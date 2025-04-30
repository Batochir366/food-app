import express from "express";
import {
  createFood,
  deleteFood,
  getFood,
  getFoodByCatFoods,
  getFoodByCatId,
  updateFood,
} from "../controller/food.js";

export const FoodRouter = express.Router();

FoodRouter.post("/", createFood)
  .get("/", getFood)
  .get("/byCategory/:id", getFoodByCatId)
  .get("/all", getFoodByCatFoods)
  .put("/:FoodId", updateFood)
  .delete("/:FoodId", deleteFood);
