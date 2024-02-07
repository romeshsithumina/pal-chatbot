"use client";

import { Button } from "@/components/ui/button";
import ConversationCard from "../ConversationCard";
import { usePathname, useRouter } from "next/navigation";
import { Conversation } from "@/lib/actions/shared.types";
import { useEffect, useState } from "react";
import { getConversations } from "@/lib/actions/conversation.action";
import { useConversationContext } from "@/contexts/ConversationsContext";

const LeftSidebar = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const { conversationsVersion } = useConversationContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchConversations = async () => {
      const data = await getConversations({ userId: "test" });
      setConversations(data);
    };

    fetchConversations();
  }, [conversationsVersion]);

  const handleClick = async () => {
    router.push("/");
  };

  return (
    <section className="sticky left-0 top-0 flex h-screen flex-col justify-between border-r border-dark-300 bg-dark-800 pl-4 pt-28 max-sm:hidden lg:w-[266px]">
      <Button
        className="mb-5 rounded-full text-white"
        disabled={pathname === "/"}
        onClick={handleClick}
      >
        New Chat
      </Button>
      <span className="mb-3 border-b border-dark-300"></span>
      <div className="scrollbar-thin flex flex-1 flex-col overflow-y-scroll text-light-800">
        {conversations.map((conversation) => (
          <ConversationCard
            conversationId={conversation.id}
            title={conversation.messages[0].content}
            selected={conversation.id === pathname.split("/").pop()}
            key={conversation.id}
            onClick={() => router.push(`/chat/${conversation.id}`)}
          />
        ))}
      </div>
    </section>
  );
};
export default LeftSidebar;
