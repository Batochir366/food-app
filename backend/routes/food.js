import express from "express";
import { createFood, getFood, getFoodById } from "../controller/food.js";

export const FoodRouter = express.Router();

FoodRouter.post("/", createFood).get("/", getFood).get("/:id", getFoodById);
