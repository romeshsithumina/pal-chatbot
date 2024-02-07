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
import React from "react";
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
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInput = ({
  value,
  disabled,
  handleSubmit,
  onChange,
}: UserInputProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  return (
    <div className="mt-0 flex h-20 w-full items-center justify-center rounded-b-[30px] bg-dark-400 text-light-800">
      <Form {...form}>
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center justify-between"
        >
          <Select>
            <SelectTrigger className="ml-5 h-20 w-[100px] border border-none border-r-dark-400 text-lg">
              <SelectValue placeholder="Chat" />
            </SelectTrigger>
            <SelectContent className="bg-dark-400 text-lg text-light-800">
              <SelectItem value="chat">Chat</SelectItem>
              <SelectItem value="image" disabled>
                Image
              </SelectItem>
              <SelectItem value="audio" disabled>
                Audio
              </SelectItem>
            </SelectContent>
          </Select>

          <FormField
            name="input"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    className="ml-5 w-full border-none bg-dark-400 text-lg text-light-800"
                    placeholder="Ask Pal..."
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    autoComplete="off"
                    autoFocus
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={disabled}
            type="submit"
            className="ml-2 mr-5 rounded-full"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserInput;
