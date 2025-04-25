import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);
export const UserModel = mongoose.model("User", userSchema);
