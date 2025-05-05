import mongoose, { Schema } from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    quantity: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
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
