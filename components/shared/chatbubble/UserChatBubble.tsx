import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const UserChatBubble = () => {
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
          <div className="bg-primary max-w-[500px] text-light-800 rounded-3xl rounded-tr-none p-4 mr-10">
            Hello there
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChatBubble;
