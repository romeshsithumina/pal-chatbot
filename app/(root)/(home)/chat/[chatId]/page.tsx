import { getMessages } from "@/lib/actions/message.action";
import ChatClient from "./ChatClient";

const Page = async ({ params }: { params: { chatId: string } }) => {
  const conversationId = params.chatId;
  const previousMessages = await getMessages({
    conversationId,
  });

  return (
    <ChatClient
      conversationId={conversationId}
      previousChats={previousMessages}
    />
  );
};
export default Page;
