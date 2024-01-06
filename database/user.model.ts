import { Schema, models, model, Document } from "mongoose";

// Interface for the User model
export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  password: string;
  pictureUrl: string;
  joinedAt: Date;
}

// Define the User schema
const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true }, // Ensure unique clerk IDs
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Ensure unique email addresses
  password: { type: String, required: true },
  pictureUrl: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
});

// Create the model
const User = models.User || model("User", UserSchema);

export default User;
