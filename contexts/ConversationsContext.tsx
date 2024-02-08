"use client";
import { Conversation } from "@/lib/actions/shared.types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ConversationContextProps {
  conversations: Conversation[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
  conversationsVersion: number;
  incrementConversationsVersion: () => void;
}

const ConversationContext = createContext<ConversationContextProps | undefined>(
  undefined
);

export const ConverastionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [conversationsVersion, setConversationsVersion] = useState(0);

  const incrementConversationsVersion = () => {
    setConversationsVersion((prevVersion) => prevVersion + 1);
  };

  return (
    <ConversationContext.Provider
      value={{
        conversations,
        setConversations,
        conversationsVersion,
        incrementConversationsVersion,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversationContext = () => {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error("useIssueContext must be used within an IssueProvider");
  }
  return context;
};
