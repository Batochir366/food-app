import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
config();

const port = process.env.PORT;

const app = express();

app.use(json());
app.use(cors());

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}/`);
});
