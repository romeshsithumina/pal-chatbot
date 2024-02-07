import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { marked } from "marked";
import parse from "html-react-parser";

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
          <div className="ml-10 max-w-[500px] rounded-3xl rounded-tl-none bg-dark-400 p-4 text-light-800">
            {parse(marked.parse(message))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BotChatBubble;
