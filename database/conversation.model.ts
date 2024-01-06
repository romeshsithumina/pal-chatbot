import { Schema, models, model, Document } from "mongoose";

// Interface for the Conversation model
export interface IConversation extends Document {
  conversationId: string;
  userId: string;
  createdAt: Date;
}

// Define the Conversation schema
const ConversationSchema = new Schema({
  conversationId: { type: String, required: true, unique: true }, // Ensure unique conversation IDs
  userId: { type: String, required: true, ref: "User" }, // Reference the User model
  createdAt: { type: Date, default: Date.now },
});

// Create the model
const Conversation =
  models.Conversation || model("Conversation", ConversationSchema);

export default Conversation;
