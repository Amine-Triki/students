import express from "express";
import mongoose from "mongoose";
import studentsRouter from "./routers/students";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


if (!process.env.MONGO_URI) {
  throw new Error("Missing MONGO_URI in environment variables");
}
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("Connected!"));

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

app.use("/students", studentsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
