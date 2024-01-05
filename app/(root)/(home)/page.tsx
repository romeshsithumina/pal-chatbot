import BotChatBubble from "@/components/shared/chatbubble/BotChatBubble";
import UserChatBubble from "@/components/shared/chatbubble/UserChatBubble";

const Page = () => {
  return (
    <div className="w-full p-36 px-5 m-10 rounded-[30px] bg-dark-500 text-light-800 flex-1">
      <UserChatBubble />
      <BotChatBubble />
    </div>
  );
};
export default Page;
