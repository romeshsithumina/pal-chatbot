import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { marked } from "marked";
import parse from "html-react-parser";

interface UserChatBubbleProps {
  message: string;
}

const UserChatBubble = ({ message }: UserChatBubbleProps) => {
  return (
    <div className="flex justify-end">
      <div className="py-10">
        <div className="mb-4 flex items-end justify-end gap-5 sm:flex-row sm:items-center sm:gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="text-light-800">You</p>
          </div>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col">
          <div className="mr-10 max-w-[500px] rounded-3xl rounded-tr-none bg-primary p-4 text-light-800">
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
