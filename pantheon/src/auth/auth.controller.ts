import express from "express";
import { loginUser, registerUser } from "./auth.service";
import { LoginData, SignInData } from "./auth.interfaces";
import jwt from "jsonwebtoken";
const router = express.Router();

// router.get("/", accessValidation, (req: ValidationRequest, res) => {
//   const userData = req.userData;
//   res.send(userData);
// });

router.post("/register", async (req, res) => {
  const userData = <SignInData>req.body; // From client
  const user = await registerUser(userData); // Gives user an id

  if (!user) {
    return res.status(400).json({ message: "Failed to register user!" });
  }
  return res
    .status(200)
    .json({ message: "User registered successfully!", user: user });
});

router.post("/login", async (req, res, next) => {
  const userData = <LoginData>req.body;
  if (!userData.username) {
    res.status(400).json({ message: "Invalid username!" });
  }
  if (!userData.password) {
    res.status(400).json({ message: "Invalid password!" });
  }

  const user = await loginUser(userData); // Returns data with id and email on top of the user and password

  if (!user) {
    return res.status(404).json({
      message: "User not found!",
    });
  }
  try {
    const secret = process.env.JWT_SECRET!;
    const expiresIn = process.env.JWT_EXPIRES_IN!;
    const token = jwt.sign(user, secret, { expiresIn: expiresIn }); // Creates a token with the user data and secret

    res.cookie("token", token, {
      // Set cookie to token that is stored in browser
      httpOnly: true,
    });

    return res.status(200).json({
      message: "User logged in successfully!",
      user: user,
      token: token,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
