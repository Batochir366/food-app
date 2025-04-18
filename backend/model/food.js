import mongoose, { Schema } from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
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
export const foodModel = mongoose.model("food", foodSchema);
