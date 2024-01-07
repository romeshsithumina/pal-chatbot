"use server";

import Message from "@/database/message.model";
import { connectToDatabase } from "../mongoose";
import { CreateMessageParams } from "./shared.types";

export async function createMessage(params: CreateMessageParams) {
  console.log("Before the try block");
  try {
    connectToDatabase();

    const { conversationId, sender, content } = params;

    console.log("Going to create message");

    await Message.create({
      conversationId,
      sender,
      content,
    })
      .then(() => {
        console.log("Created message");
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });

    console.log("Created message");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// export async function name(params: GetAllUsersParams) {
//   try {
//     connectToDatabase();
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }
