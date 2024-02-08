"use server";

import prisma from "@/lib/prismadb";
import {
  CreateConversationParams,
  DeleteConversationParams,
  GetConversationParams,
} from "./shared.types";

export async function createConversation(params: CreateConversationParams) {
  const { id, userId } = params;

  try {
    if (userId) {
      const conversation = await prisma.conversation.create({
        data: {
          id,
          user: {
            connect: {
              clerkId: userId,
            },
          },
        },
      });
      return conversation;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getConversations(params: GetConversationParams) {
  const { userId } = params;

  try {
    const conversations = await prisma.conversation.findMany({
      where: {
        user: {
          clerkId: userId,
        },
      },
      include: {
        messages: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return conversations;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteConversation(params: DeleteConversationParams) {
  const { conversationId } = params;

  try {
    await prisma.message.deleteMany({
      where: {
        conversationId,
      },
    });

    const conversation = await prisma.conversation.delete({
      where: {
        id: conversationId,
      },
    });

    console.log("conversation deleted", conversation);
    return conversation;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
