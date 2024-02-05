"use client";

import UserInput from "@/components/shared/UserInput";
import BotChatBubble from "@/components/shared/chatbubble/BotChatBubble";
import UserChatBubble from "@/components/shared/chatbubble/UserChatBubble";
import { useChat } from "ai/react";
import React from "react";

const Page = ({ params }: { params: { chatId: string } }) => {
  const conversationId = params.chatId;
  const { messages, input, handleInputChange, append, setInput } = useChat({
    api: "/api/chat",
    id: conversationId,
  });
  // const [conversationMessages, setConversationMessages] = useState([] as any);

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     const res = await getMessages({ conversationId });
  //     setConversationMessages(res);
  //   };

  //   fetchMessages();
  // }, [input, conversationId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");

    await append(
      { role: "user", content: input },
      { options: { body: { conversationId } } }
    );
  };

  return (
    <>
      <div className="m-10 mb-0 h-[480px] w-full flex-nowrap overflow-scroll rounded-t-[30px] bg-dark-500 px-5 text-light-800">
        {messages.map((m: any) => (
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
