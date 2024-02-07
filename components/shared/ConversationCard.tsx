import { useConversationContext } from "@/contexts/ConversationsContext";
import { deleteConversation } from "@/lib/actions/conversation.action";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

interface ConversationCardProps {
  selected: boolean;
  title: string;
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
  const router = useRouter();

  const handleDeleteClick = async () => {
    await deleteConversation({ conversationId }).then(() => {
      incrementConversationsVersion();
      router.push("/");
    });
  };

  return (
    <div
      className={`group relative mb-1 flex cursor-pointer items-center justify-between rounded-xl px-3 duration-300 hover:bg-dark-400 hover:transition-colors ${
        selected ? "bg-dark-400" : ""
      }`}
      onClick={onClick}
    >
      <p className="truncate py-2 pr-3">{title}</p>
      <div className="absolute right-0 top-0 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <MdDelete
          className="cursor-pointer text-white"
          size={18}
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default ConversationCard;
