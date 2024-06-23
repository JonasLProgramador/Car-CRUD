import express from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "./src/routes/index.js";
import {  testConnection } from "./src/data/connection.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(process.env.PORT, async () => {
  try {
    await testConnection();
    console.log(
      `server is running at port  ${process.env.PORT} in local host : http://localhost:${process.env.PORT}`
    );
  } catch (error) {
    throw new Error(`Not possible starts the server at port ${process.env.PORT}`);
  }
});
