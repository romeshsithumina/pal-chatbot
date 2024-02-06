interface ConversationCardProps {
  selected: boolean;
  title: string;
  onClick: () => void;
}

const ConversationCard = ({
  selected,
  title,
  onClick,
}: ConversationCardProps) => {
  return (
    <div
      className={`mb-1 cursor-pointer rounded-xl px-3 ${
        selected ? "bg-dark-400" : ""
      }`}
      onClick={onClick}
    >
      <p className="truncate py-2">{title}</p>
    </div>
  );
};
export default ConversationCard;
