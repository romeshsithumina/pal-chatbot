export interface CreateConversationParams {
  userId: string;
}

export interface CreateMessageParams {
  conversationId: string;
  role: string;
  content: string;
}

export interface GetMessageParams {
  conversationId: string;
}
