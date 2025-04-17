import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
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
export const categoryModel = mongoose.model("category", categorySchema);
