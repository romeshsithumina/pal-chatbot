"use server";

import prisma from "@/lib/prismadb";
import {
  CreateConversationParams,
  DeleteConversationParams,
  GetConversationParams,
} from "./shared.types";

export async function createConversation(params: CreateConversationParams) {
  const { id } = params;
  const userId = "65bf80f91e19f0a90546a134";

  try {
    const conversation = await prisma.conversation.create({
      data: {
        id,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return conversation;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getConversations(params: GetConversationParams) {
  // const { userId } = params;

  try {
    const allConversations = await prisma.conversation.findMany({
      include: {
        messages: true, // Include messages for each conversation
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Filter out conversations without messages
    const conversations = allConversations.filter(
      (conversation) =>
        conversation.messages && conversation.messages.length > 0
    );
    return conversations;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteConversation(params: DeleteConversationParams) {
  const { conversationId } = params;

  try {
    const conversation = await prisma.conversation.delete({
      where: {
        id: conversationId,
      },
    });
    return conversation;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
