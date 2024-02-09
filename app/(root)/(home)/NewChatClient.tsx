"use client";

import UserInput from "@/components/shared/UserInput";
import { useConversationContext } from "@/contexts/ConversationsContext";
import { createConversation } from "@/lib/actions/conversation.action";
import { useAuth } from "@clerk/nextjs";
import { useChat } from "ai/react";
import { useRouter } from "next/navigation";
import React from "react";

interface NewChatClientProps {
  conversationId: string;
}

const NewChatClient = ({ conversationId }: NewChatClientProps) => {
  const { input, isLoading, handleInputChange, setInput, append } = useChat({
    api: "/api/chat",
    id: conversationId,
  });
  const { incrementConversationsVersion } = useConversationContext();
  const router = useRouter();
  const { userId } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createConversation({ id: conversationId, userId });
    router.push(`/chat/${conversationId}`);
    setInput("");

    // Send user prompt to chat endpoint
    await append(
      { role: "user", content: input },
      { options: { body: { conversationId } } }
    ).then(() => {
      incrementConversationsVersion();
    });
  };

  return (
    <>
      <div className="scrollbar-thin mb-0 h-[calc(100vh-15rem)] min-w-full flex-nowrap rounded-t-[30px] bg-dark-500 text-light-800"></div>

      <UserInput
        handleSubmit={handleSubmit}
        onChange={handleInputChange}
        value={input}
        disabled={isLoading}
      />
    </>
  );
};
export default NewChatClient;
