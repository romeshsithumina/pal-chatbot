interface ConversationCardProps {
  selected: boolean;
  title: string;
}

const ConversationCard = ({ selected, title }: ConversationCardProps) => {
  return (
    <div className={`mb-1 rounded-xl px-3 ${selected ? "bg-dark-400" : ""}`}>
      <p className="truncate py-2">{title}</p>
    </div>
  );
};
export default ConversationCard;
