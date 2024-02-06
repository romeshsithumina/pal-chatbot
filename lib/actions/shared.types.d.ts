export interface CreateConversationParams {
  userId: string;
}

export interface GetConversationParams {
  userId: string;
}

export interface DeleteConversationParams {
  conversationId: string;
}

export interface CreateMessageParams {
  conversationId: string;
  role: string;
  content: string;
}

export interface GetMessageParams {
  conversationId: string;
}

export type Messages = {
  conversationId: string;
  id: string;
  role: string;
  content: string;
  timestamp: Date;
};

export type Conversation = {
  id: string;
  userId: string;
  createdAt: Date;
  messages: Messages[];
};
