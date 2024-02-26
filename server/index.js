import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const URL = process.env.MONGOURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("db connected");
    app.listen(3001);
  })
  .catch((error) => console.log(error));

app.use("/api", route);
