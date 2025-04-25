import mongoose, { Schema } from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  },
  {
    timestamps: true,
  }
);
export const foodModel = mongoose.model("food", foodSchema);
