import express from "express";
import {
  createFood,
  deleteFood,
  getFood,
  getFoodByCatId,
  updateFood,
} from "../controller/food.js";

export const FoodRouter = express.Router();

FoodRouter.post("/", createFood)
  .get("/", getFood)
  .get("/:id", getFoodByCatId)
  .put("/:FoodId", updateFood)
  .delete("/:FoodId", deleteFood);
