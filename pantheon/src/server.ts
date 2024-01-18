import "dotenv/config"; // Immediately configs the .env file, required to read the .env file
import express, { NextFunction, Request, Response } from "express";
import env from "./utils/validateEnv";
import morgan from "morgan";
import cors from "cors";
import createHttpError, { HttpError } from "http-errors";
import isHttpError from "http-errors";
import authController from "./auth/auth.controller";
import postController from "./post/post.controller";
import userController from "./user/user.controller";
const app = express();
const PORT = env.PORT;

app.use(morgan("dev"));
app.use(express.json()); // Important to parse the body of the request
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Enable credentials (cookies, HTTP authentication) in cross-origin requests
  })
);
app.use("/api/users", userController);
app.use("/api/auth", authController);
app.use("/api/posts", postController);

// If we try to access an endpoint that we haven't defined, we get a 404 error
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found!"));
});

interface ErrorHandler {
  error: never; // We don't know what type of error we will get
  req: Request;
  res: Response;
  next: NextFunction;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(({ error, req, res, next }: ErrorHandler) => {
  console.error(error);
  let errorMessage = "An unknown error occurred!";
  let statusCode = 500;

  if (isHttpError(error)) {
    const httpError = error as HttpError;
    statusCode = httpError.status || 500;
    errorMessage = httpError.message || "An unknown error occurred!";
  }

  res.status(statusCode).json({ error: errorMessage });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
