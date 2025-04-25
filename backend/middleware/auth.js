import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
const secret_key = process.env.SECRET_KEY;
const verifyToken = (req, res, next) => {};
