import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BotChatBubbleProps {
  message: string;
}

const BotChatBubble = ({ message }: BotChatBubbleProps) => {
  return (
    <div className="">
      <div className=" py-10">
        <div className="flex items-center justify-between">
          <div className="mb-4 flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-light-800">Pal</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-dark-400 max-w-[500px] text-light-800 rounded-3xl rounded-tl-none p-4 ml-10">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BotChatBubble;
