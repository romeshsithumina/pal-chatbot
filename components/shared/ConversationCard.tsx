interface ConversationCardProps {
  selected: boolean;
  message: string;
}

const ConversationCard = ({ selected, message }: ConversationCardProps) => {
  return (
    <div className={`px-3 mb-1 rounded-xl ${selected ? "bg-dark-400" : ""}`}>
      <p className="py-2 whitespace-nowrap text-ellipsis overflow-hidden">
        {message}
      </p>
    </div>
  );
};
export default ConversationCard;
