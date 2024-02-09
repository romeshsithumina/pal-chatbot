"use client";

import { Button } from "@/components/ui/button";
import { useConversationContext } from "@/contexts/ConversationsContext";
import { getConversations } from "@/lib/actions/conversation.action";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import ConversationCard from "../ConversationCard";
import { useAuth } from "@clerk/nextjs";
import EmptyState from "../EmptyState";

const LeftSidebar = () => {
  const { conversationsVersion, conversations, setConversations } =
    useConversationContext();
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  useEffect(() => {
    const fetchConversations = async () => {
      if (userId) {
        const data = await getConversations({ userId });
        setConversations(data);
        console.log("conversations fetched", data);
      }
    };

    fetchConversations();
  }, [conversationsVersion, pathname]);

  const handleClick = async () => {
    router.push("/");
  };

  return (
    <section className="sticky left-0 top-0 hidden h-screen flex-col border-r border-dark-300 bg-dark-800 pt-28 lg:flex lg:w-72 lg:min-w-72">
      <Button
        className="mx-4 mb-5 rounded-full text-white"
        disabled={pathname === "/"}
        onClick={handleClick}
      >
        New Chat
      </Button>
      <span className="mx-4 mb-3 border-b border-dark-300"></span>
      {conversations.length === 0 && (
        <EmptyState
          subtitle="Try saying something to Pal.."
          className="mx-4 mt-5"
        />
      )}
      {conversations.length > 1 && (
        <div className="scrollbar-thin ml-4 flex flex-1 flex-col overflow-y-scroll text-light-800">
          {conversations.map((conversation) => (
            <ConversationCard
              conversationId={conversation.id}
              title={conversation.messages[0]?.content}
              selected={conversation.id === pathname.split("/").pop()}
              key={conversation.id}
              onClick={() => router.push(`/chat/${conversation.id}`)}
            />
          ))}
        </div>
      )}
    </section>
  );
};
export default LeftSidebar;
