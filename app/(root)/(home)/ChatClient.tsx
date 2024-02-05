"use client";

import UserInput from "@/components/shared/UserInput";
import { useChat } from "ai/react";
import { useRouter } from "next/navigation";
import React from "react";

interface ChatClientProps {
  conversationId: string;
}

const ChatClient = ({ conversationId }: ChatClientProps) => {
  const { input, handleInputChange, setInput, append } = useChat({
    api: "/api/chat",
    id: conversationId,
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");

    // Send user prompt to chat endpoint
    await append(
      { role: "user", content: input },
      { options: { body: { conversationId } } }
    ).then(() => {
      router.push(`/chat/${conversationId}`);
    });
  };

  return (
    <>
      <div className="m-10 mb-0 h-[480px] w-full flex-nowrap overflow-scroll rounded-t-[30px] bg-dark-500 px-5 text-light-800"></div>

      <UserInput
        handleSubmit={handleSubmit}
        onChange={handleInputChange}
        value={input}
      />
    </>
  );
};
export default ChatClient;
