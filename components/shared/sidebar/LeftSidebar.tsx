"use client";

import { Button } from "@/components/ui/button";
// import { usePathname } from "next/navigation";
import ConversationCard from "../ConversationCard";
import { useRouter } from "next/navigation";

const chatHistory = [
  {
    id: 1,
    name: "John Doe",
    message: "Hello, what about you?",
    time: "10:00",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "I'm fine, thank you! How about you?",
    time: "10:00",
  },
  {
    id: 3,
    name: "Bob Johnson",
    message: "I'm doing well, thank you! What about you?",
    time: "10:00",
  },
];

const LeftSidebar = () => {
  const router = useRouter();
  // const pathname = usePathname();

  const handleClick = async () => {
    router.push("/");
  };

  return (
    <section className="sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r border-dark-300 bg-dark-800 p-4 pt-28 max-sm:hidden lg:w-[266px]">
      <Button className="mb-5 rounded-full" onClick={handleClick}>
        New Chat
      </Button>
      <span className="mb-3 border-b border-dark-300"></span>
      <div className="flex flex-1 flex-col text-light-800">
        {chatHistory.map((chat) => (
          <ConversationCard
            message={chat.message}
            selected={chat.id === 1}
            key={chat.id}
          />
        ))}
      </div>
    </section>
  );
};
export default LeftSidebar;
