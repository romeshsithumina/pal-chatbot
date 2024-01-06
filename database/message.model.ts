import { Schema, models, model, Document } from "mongoose";

// Interface for the Message model
export interface IMessage extends Document {
  messageId: string;
  conversationId: string;
  sender: string;
  type: string;
  content: string;
  timestamp: Date;
}

// Define the Message schema
const MessageSchema = new Schema({
  messageId: { type: String, required: true, unique: true }, // Ensure unique message IDs
  conversationId: { type: String, required: true, ref: "Conversation" }, // Reference the Conversation model
  sender: { type: String, required: true },
  type: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Create the model
const Message = models.Message || model("Message", MessageSchema);

export default Message;
