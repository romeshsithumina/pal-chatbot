// @ts-nocheck

import { Schema, models, model, Document } from "mongoose";

// Interface for the Message model
export interface IMessage extends Document {
  conversationId: string;
  sender: string;
  content: string;
  timestamp: Date;
}

// Define the Message schema
const MessageSchema = new Schema({
  conversationId: {
    type: String,
    required: true,
  }, // Reference the Conversation model
  sender: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Create the model
// @ts-ignore
// const Message = models.Message || model("Message", MessageSchema);
const Message = model<IMessage>("Message", MessageSchema);

export default Message;
