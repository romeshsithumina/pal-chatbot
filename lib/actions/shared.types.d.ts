export interface CreateConversationParams {
  id: string;
  userId: string | undefined | null;
}

export interface GetConversationParams {
  userId: string;
}

export interface DeleteConversationParams {
  conversationId: string;
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

export interface GetUserParams {
  clerkId: string;
}

export interface CreateUserParams {
  clerkId: string;
  name: string;
  email: string;
  pictureURL: string;
}

export interface UpdateUserParams {
  clerkId: string;
  name: string;
  email: string;
  pictureURL: string;
}

export interface DeleteUserParams {
  clerkId: string;
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

export type User = {
  clerkId: string;
  name: string;
  email: string;
  pictureURL: string;
};
