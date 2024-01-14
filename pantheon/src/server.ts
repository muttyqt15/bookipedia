import "dotenv/config"; // Immediately configs the .env file, required to read the .env file
import express from "express";
import env from "./utils/validateEnv";
import morgan from "morgan";
// import { prisma } from "./db/index";
import userController from "./user/user.controller";
const app = express();
const PORT = env.PORT;

app.use(morgan("dev"));
app.use(express.json()); // Important to parse the body of the request

app.use("/api/users", userController);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
