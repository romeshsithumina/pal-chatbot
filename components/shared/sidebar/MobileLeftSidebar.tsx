"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useConversationContext } from "@/contexts/ConversationsContext";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ConversationCard from "../ConversationCard";
import { UserButton } from "@clerk/nextjs";

const MobileLeftSidebar = () => {
  const [open, setOpen] = useState(false);
  const { conversations } = useConversationContext();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (id: string) => {
    router.push(`/chat/${id}`);
    setOpen(!open);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="text-light-800">
          <GiHamburgerMenu size={28} />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="scrollbar-thin overflow-y-scroll bg-dark-800 text-white"
        >
          <SheetHeader>
            <SheetTitle>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-10 w-10",
                  },
                  variables: {
                    colorPrimary: "#146DFF",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SheetTitle>
            <SheetDescription>
              <div className="mt-3 flex flex-1 flex-col border-t border-dark-300 pt-3 text-light-800">
                {conversations.map((conversation) => (
                  <ConversationCard
                    conversationId={conversation.id}
                    title={conversation.messages[0]?.content}
                    selected={conversation.id === pathname.split("/").pop()}
                    key={conversation.id}
                    onClick={() => handleClick(conversation.id)}
                  />
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileLeftSidebar;
