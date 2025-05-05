import express from "express";
import { login, sendMail } from "../controller/auth.js";

export const authRouter = express.Router();

authRouter.post("/", login).get("/mail", sendMail);
