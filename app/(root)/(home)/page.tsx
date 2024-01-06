"use client";

import UserInput from "@/components/shared/UserInput";
import BotChatBubble from "@/components/shared/chatbubble/BotChatBubble";
import UserChatBubble from "@/components/shared/chatbubble/UserChatBubble";
import { useChat } from "ai/react";

const Page = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <>
      <div className="w-full flex h-[480px] px-5 m-10 mb-0 rounded-t-[30px] bg-dark-500 text-light-800 flex-nowrap  flex-1 overflow-scroll">
        {messages.map((m) => (
          <div key={m.id}>
            {m.role === "user" ? (
              <UserChatBubble message={m.content} />
            ) : (
              <BotChatBubble message={m.content} />
            )}
          </div>
        ))}
      </div>

      <UserInput
        handleSubmit={handleSubmit}
        onChange={handleInputChange}
        value={input}
      />
    </>
  );
};
export default Page;
