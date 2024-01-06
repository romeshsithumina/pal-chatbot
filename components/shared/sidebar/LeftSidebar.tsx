"use client";

import { usePathname } from "next/navigation";
import ConversationCard from "../ConversationCard";

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
  const pathname = usePathname();

  return (
    <section className="bg-dark-800 border-dark-300 custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-4 pt-36 max-sm:hidden lg:w-[266px]">
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
