"use client";

import UserInput from "@/components/shared/UserInput";
import { useConversationContext } from "@/contexts/ConversationsContext";
import { createConversation } from "@/lib/actions/conversation.action";
import { useChat } from "ai/react";
import { useRouter } from "next/navigation";
import React from "react";

interface NewChatClientProps {
  conversationId: string;
}

const NewChatClient = ({ conversationId }: NewChatClientProps) => {
  const { input, handleInputChange, setInput, append } = useChat({
    api: "/api/chat",
    id: conversationId,
  });
  const { incrementConversationsVersion } = useConversationContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createConversation({ id: conversationId, userId: "test" });

    // Send user prompt to chat endpoint
    await append(
      { role: "user", content: input },
      { options: { body: { conversationId } } }
    ).then(() => {
      setInput("");
      incrementConversationsVersion();
      router.push(`/chat/${conversationId}`);
    });
  };

  return (
    <>
      <div className="mb-0 h-[480px] w-full flex-nowrap overflow-scroll rounded-t-[30px] bg-dark-500 text-light-800"></div>

      <UserInput
        handleSubmit={handleSubmit}
        onChange={handleInputChange}
        value={input}
      />
    </>
  );
};
export default NewChatClient;
