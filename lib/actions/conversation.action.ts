"use server";

import prisma from "@/lib/prismadb";
import {
  CreateConversationParams,
  DeleteConversationParams,
} from "./shared.types";

export async function createConversation(params: CreateConversationParams) {
  // const { userId } = params;
  const userId = "65bf80f91e19f0a90546a134";

  try {
    const conversation = await prisma.conversation.create({
      data: {
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
