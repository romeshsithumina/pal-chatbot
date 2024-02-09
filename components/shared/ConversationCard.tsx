import { useConversationContext } from "@/contexts/ConversationsContext";
import { deleteConversation } from "@/lib/actions/conversation.action";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

interface ConversationCardProps {
  selected: boolean;
  title?: string;
  conversationId: string;
  onClick: () => void;
}

const ConversationCard = ({
  selected,
  title,
  conversationId,
  onClick,
}: ConversationCardProps) => {
  const { incrementConversationsVersion } = useConversationContext();
  const [isDeleting, setIsDeleting] = useState(false);
  const { userId } = useAuth();
  const router = useRouter();

  const handleDeleteClick = async () => {
    if (userId) {
      setIsDeleting(true);
      await deleteConversation({ conversationId, userId }).then(() => {
        incrementConversationsVersion();
        router.push("/");
        setIsDeleting(false);
      });
    }
  };

  return (
    <div
      className={`group relative mb-1 flex cursor-pointer items-center justify-between rounded-xl pl-3 duration-300 hover:transition-colors ${
        selected ? "bg-dark-400" : ""
      } ${isDeleting ? "pointer-events-none opacity-50" : ""}`}
    >
      <p
        className={`truncate py-2 pr-5 ${title ? "" : "text-yellow-500"}`}
        onClick={onClick}
      >
        {title || "Loading..."}
      </p>
      <div
        className={`absolute right-0 top-0 rounded-xl bg-gradient-to-l from-dark-500 from-25% p-2 duration-300 lg:visible lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100 ${
          selected ? "visible lg:visible" : "invisible"
        }`}
      >
        <MdDelete
          className="cursor-pointer text-white hover:text-red-400"
          size={18}
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default ConversationCard;
