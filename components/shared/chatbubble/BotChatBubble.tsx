import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { marked } from "marked";
import parse from "html-react-parser";

interface BotChatBubbleProps {
  message: string;
}

const BotChatBubble = ({ message }: BotChatBubbleProps) => {
  return (
    <div className="">
      <div className="py-6 sm:py-10">
        <div className="flex items-center justify-between">
          <div className="mb-2 flex flex-row justify-between gap-3 sm:mb-4 sm:items-center sm:gap-5">
            <Avatar className="h-7 w-7 sm:h-10 sm:w-10">
              <AvatarImage sizes="" src="/images/pal-avatar.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-row items-center">
              <p className="text-light-800">Pal</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="ml-7 w-fit min-w-20 rounded-3xl rounded-tl-none bg-dark-400 p-3 text-sm text-light-800 sm:ml-10 sm:p-4 sm:text-base">
            {parse(
              marked.parse(message, { async: false, gfm: true }).toString()
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BotChatBubble;
