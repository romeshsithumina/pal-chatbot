"use client";

import { customAlphabet } from "nanoid";
import NewChatClient from "./NewChatClient";
import { useEffect, useState } from "react";

const Page = () => {
  const [id, setId] = useState<string>("");

  useEffect(() => {
    const generateId = () => {
      const alphabet =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const nanoid = customAlphabet(alphabet, 20);
      setId(nanoid());
    };
    generateId();
  }, []);

  return <NewChatClient conversationId={id} />;
};
export default Page;
