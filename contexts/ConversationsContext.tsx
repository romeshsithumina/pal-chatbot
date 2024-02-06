"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ConversationContextProps {
  conversationsVersion: number;
  incrementConversationsVersion: () => void;
}

const ConversationContext = createContext<ConversationContextProps | undefined>(
  undefined
);

export const ConverastionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [conversationsVersion, setConversationsVersion] = useState(0);

  const incrementConversationsVersion = () => {
    setConversationsVersion((prevVersion) => prevVersion + 1);
  };

  return (
    <ConversationContext.Provider
      value={{
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
