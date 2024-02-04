"use server";

import prisma from "@/lib/prismadb";
import { CreateMessageParams } from "./shared.types";

export async function createMessage(params: CreateMessageParams) {
  const { conversationId, sender, content } = params;
  try {
    const message = await prisma.message.create({
      data: {
        conversationId,
        sender,
        content,
      },
    });
    return message;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
