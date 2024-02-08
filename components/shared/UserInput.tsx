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
  input: z.string().min(1, { message: "Please enter a message" }),
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
    <div className="mt-0 flex h-16 w-full items-center justify-center rounded-b-[30px] bg-dark-400 text-light-800 md:h-20">
      <Form {...form}>
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center justify-between"
        >
          <Select>
            <SelectTrigger className="ml-3 h-20 w-20 border border-none border-r-dark-400 text-sm md:ml-5 md:w-24 md:text-lg">
              <SelectValue placeholder="Chat" />
            </SelectTrigger>
            <SelectContent className="bg-dark-400 text-sm text-light-800 md:text-lg">
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
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    className="ml-0 w-full border-none bg-dark-400 text-sm text-light-800 md:text-lg lg:ml-5"
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
            disabled={disabled || value === ""}
            type="submit"
            className="ml-2 mr-3 rounded-full text-xs md:mr-5 md:text-base"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserInput;
