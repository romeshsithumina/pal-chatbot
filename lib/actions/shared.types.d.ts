export interface CreateConversationParams {
  userId: string;
}

export interface CreateMessageParams {
  conversationId: string;
  sender: string;
  content: string;
}

export interface GetMessageParams {
  conversationId: string;
}
