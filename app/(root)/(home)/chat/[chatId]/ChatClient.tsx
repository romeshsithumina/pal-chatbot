"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import UserInput from "@/components/shared/UserInput";
import BotChatBubble from "@/components/shared/chatbubble/BotChatBubble";
import UserChatBubble from "@/components/shared/chatbubble/UserChatBubble";
import { useChat } from "ai/react";

interface ChatClientProps {
  conversationId: string;
  previousChats: any[];
}

const ChatClient = ({ conversationId, previousChats }: ChatClientProps) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);
  const [showScrollToBottomButton, setShowScrollToBottomButton] =
    useState(false);

  const { messages, input, isLoading, handleInputChange, append, setInput } =
    useChat({
      api: "/api/chat",
      id: conversationId,
      initialMessages: previousChats,
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");
    setShouldScrollToBottom(true);

    await append(
      { role: "user", content: input },
      { options: { body: { conversationId } } }
    ).then(() => {
      setShouldScrollToBottom(true); // Trigger scroll to bottom after new message
    });
  };

  // Scroll to the bottom when new messages are added or when shouldScrollToBottom is true
  useEffect(() => {
    if (chatContainerRef.current && shouldScrollToBottom) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
      setShouldScrollToBottom(false);
    }
  }, [messages, shouldScrollToBottom]);

  // Handle scroll event on the outer div
  const handleScroll = () => {
    if (chatContainerRef.current) {
      const isScrolledToBottom =
        chatContainerRef.current.scrollHeight -
          chatContainerRef.current.clientHeight <=
        chatContainerRef.current.scrollTop + 20; // Adjust the threshold as needed
      setShowScrollToBottomButton(!isScrolledToBottom);
    }
  };

  // Add smooth scrolling effect when scrolling down
  const smoothScrollToBottom = () => {
    if (chatContainerRef.current) {
      const currentScrollTop = chatContainerRef.current.scrollTop;
      const targetScrollTop = chatContainerRef.current.scrollHeight;
      const difference = targetScrollTop - currentScrollTop;
      const duration = 500; // milliseconds
      const startTime = performance.now();

      const scrollStep = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = elapsed / duration;

        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop =
            currentScrollTop + difference * Math.min(progress, 1);
        }

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      };

      requestAnimationFrame(scrollStep);
    }
  };

  return (
    <>
      <div
        ref={chatContainerRef}
        className="relative mb-0 h-[480px] w-full flex-nowrap overflow-y-auto rounded-t-[30px] bg-dark-500 text-light-800 focus-visible:outline-none"
        onScroll={handleScroll}
        autoFocus={false}
      >
        {messages.map((m: any) => (
          <div key={m.id} className="px-5">
            {m.role === "user" ? (
              <UserChatBubble message={m.content} />
            ) : (
              <BotChatBubble message={m.content} />
            )}
          </div>
        ))}
        <button
          className={`sticky bottom-5 right-5 float-end rounded-full bg-blue-500 p-2 text-white transition-opacity duration-300  ${
            showScrollToBottomButton
              ? "opacity-70 hover:opacity-100"
              : "opacity-0"
          }`}
          onClick={smoothScrollToBottom}
          disabled={!showScrollToBottomButton}
        >
          <FaArrowDown />
        </button>
      </div>

      <UserInput
        handleSubmit={handleSubmit}
        onChange={handleInputChange}
        value={input}
        disabled={isLoading}
      />
    </>
  );
};

export default ChatClient;
