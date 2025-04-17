import express from "express";
import { createCategory, getCategory } from "../controller/category.js";

export const categoryRouter = express.Router();

categoryRouter.post("/", createCategory).get("/", getCategory);
