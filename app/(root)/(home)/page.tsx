import { createConversation } from "@/lib/actions/conversation.action";
import NewChatClient from "./NewChatClient";

const Page = async () => {
  const { id } = await createConversation({
    userId: "test",
  });

  return <NewChatClient conversationId={id} />;
};
export default Page;
