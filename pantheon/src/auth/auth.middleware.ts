import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface authReq extends Request {
  user?: User
}
export const cookieAuthValidation = (req: authReq, res: Response, next: NextFunction) => {
  const token = req.cookies.token; // Get cookies from request

  try {
    const secret = process.env.JWT_SECRET!; 
    const user = jwt.verify(token, secret); // Verify token with secret
    if (user) {
      req.user = user as User; // If token is valid, set user to the user data
    }
    next(); // Since this middleware works, we can move on to the next middleware which is the controller (or depends) but usually controller
  } catch (error) {
    // If verification fails, you can send an unauthorized response or handle it accordingly
    res.clearCookie("token");
    res.status(401).json({ message: "Unauthorized" });
  }
};
