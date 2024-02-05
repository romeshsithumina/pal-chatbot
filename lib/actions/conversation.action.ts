"use server";

import prisma from "@/lib/prismadb";
import { CreateConversationParams } from "./shared.types";

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
