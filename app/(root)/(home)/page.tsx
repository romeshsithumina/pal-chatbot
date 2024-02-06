import { customAlphabet } from "nanoid";
import NewChatClient from "./NewChatClient";

const Page = async () => {
  const alphabet =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nanoid = customAlphabet(alphabet, 20);
  const id = nanoid();

  return <NewChatClient conversationId={id} />;
};
export default Page;
