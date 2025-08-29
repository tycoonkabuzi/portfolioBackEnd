import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import projectRoute from "./routes/projectRoute.js";

import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(express.json());
app.use(
  cors({
    origin: "https://kabuzintwali.com",
  })
);
app.use("/projects", projectRoute);
app.listen(PORT, () => {
  console.log("started at port " + PORT);
});
