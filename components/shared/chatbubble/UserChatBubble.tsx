import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { marked } from "marked";
import parse from "html-react-parser";

interface UserChatBubbleProps {
  message: string;
}

const UserChatBubble = ({ message }: UserChatBubbleProps) => {
  return (
    <div className="flex justify-end">
      <div className="py-6 sm:py-10">
        <div className="mb-2 flex items-end justify-end gap-5 sm:mb-4 sm:flex-row sm:items-center sm:gap-2">
          <div className="flex flex-row items-center">
            <p className="text-light-800">You</p>
          </div>

          <Avatar className="h-7 w-7 sm:h-10 sm:w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col">
          <div className="mr-7 w-fit min-w-20 rounded-3xl rounded-tr-none bg-primary p-3 text-sm text-light-800 sm:mr-10 sm:p-4 sm:text-base">
            {parse(
              marked.parse(message, { async: false, gfm: true }).toString()
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChatBubble;
