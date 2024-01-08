import { Schema, model, Document, models } from "mongoose";

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
  },
  sender: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Message = models.Message || model<IMessage>("Message", MessageSchema);

export default Message;
