"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { ChatRequestOptions } from "ai";
import * as z from "zod";

const formSchema = z.object({
  input: z.string(),
});

interface UserInputProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInput = ({ handleSubmit, value, onChange }: UserInputProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  return (
    <div className="w-full h-20 m-10 mt-0 rounded-b-[30px] bg-dark-400 text-light-800 flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center justify-between"
        >
          <Select>
            <SelectTrigger className="ml-5 w-[100px] h-20 border border-none border-r-dark-400 text-lg">
              <SelectValue placeholder="Chat" />
            </SelectTrigger>
            <SelectContent className="text-light-800 text-lg bg-dark-400">
              <SelectItem value="chat">Chat</SelectItem>
              <SelectItem value="image">Image</SelectItem>
              <SelectItem value="audio">Audio</SelectItem>
            </SelectContent>
          </Select>

          <FormField
            name="input"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    className="bg-dark-400 text-light-800 border-none w-full ml-5 text-lg"
                    placeholder="Ask Pal..."
                    value={value}
                    onChange={onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="ml-2 mr-5 rounded-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserInput;