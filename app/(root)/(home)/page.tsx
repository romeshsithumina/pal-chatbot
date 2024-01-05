import UserInput from "@/components/shared/UserInput";
import BotChatBubble from "@/components/shared/chatbubble/BotChatBubble";
import UserChatBubble from "@/components/shared/chatbubble/UserChatBubble";

const Page = () => {
  return (
    <>
      <div className="w-full  px-5 m-10 mb-0 rounded-t-[30px] bg-dark-500 text-light-800 flex-1">
        <UserChatBubble />
        <BotChatBubble />
      </div>

      <UserInput />
    </>
  );
};
export default Page;
