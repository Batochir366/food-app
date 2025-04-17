import express from "express";
import { createFood, getFood } from "../controller/food.js";

export const FoodRouter = express.Router();

FoodRouter.post("/", createFood).get("/", getFood);
