import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: String,
  phoneNumber: String,
  address: {
    type: String,
  },
  isVerified: Boolean,
  role: {
    type: String,
    enum: ["User", "Admin"],
    default: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
export const UserModel = mongoose.model("User", userSchema);
