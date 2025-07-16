import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import projectRoute from "./routes/projectRoute.js";
const PORT = 8080;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/portfolio");
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(express.json());
app.use(cors());
app.use("/projects", projectRoute);
app.listen(PORT, () => {
  console.log("started at port " + PORT);
});
