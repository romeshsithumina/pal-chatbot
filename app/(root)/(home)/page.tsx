import { createConversation } from "@/lib/actions/conversation.action";
import ChatClient from "./ChatClient";

const Page = async () => {
  const { id } = await createConversation({
    userId: "test",
  });

  return <ChatClient conversationId={id} />;
};
export default Page;
