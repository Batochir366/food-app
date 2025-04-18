import express, { json } from "express";
import cors from "cors";
import { connectMongoDB } from "./connectDB.js";
import { userRouter } from "./routes/user.js";
import { FoodRouter } from "./routes/food.js";
import { categoryRouter } from "./routes/category.js";

connectMongoDB();

const port = process.env.PORT;

const app = express();

app.use(json());
app.use(cors());
app.use("/user", userRouter);
app.use("/food", FoodRouter);
app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}/`);
});
