"use server";

import prisma from "@/lib/prismadb";
import { CreateMessageParams, GetMessageParams } from "./shared.types";

export async function createMessage(params: CreateMessageParams) {
  const { conversationId, sender, content } = params;
  try {
    const message = await prisma.message.create({
      data: {
        conversation: {
          connect: {
            id: conversationId,
          },
        },
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

export async function getMessages(params: GetMessageParams) {
  const { conversationId } = params;
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId,
      },
    });
    return messages;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
