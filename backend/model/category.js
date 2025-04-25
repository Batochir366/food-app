import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const categoryModel = mongoose.model("category", categorySchema);
