// Controller untuk ngehandle request dari client ke server dan validasi body

import express from "express";
const router = express.Router();
import { createUser, deleteUser, getAllUsers, getUser } from "./user.services";

router.get("/", async (req, res) => {
  const users = await getAllUsers();
  if (!users) { // Validating body which is done in controller
    res.status(404).json({ message: "Users not found!" });
  }
  res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await getUser(userId);
  if (!user) {
    res.status(404).json({ message: "User not found!" });
  }
  res.status(200).json(user);
});

router.post("/", async (req, res) => {
  const newUserData = req.body;
  const user = await createUser(newUserData);
  if (!user) {
    res.status(400).json({ message: "Invalid user data!" });
  }
  res.status(201).json(user);
});

router.delete("/:id", async (req, res) => {
  const userId = req.params.id; // From the URL
  if (!userId) {
    res.status(400).json({ message: "Invalid user ID!" });
  }
  await deleteUser(userId);
  res.status(200).json({ message: `User ${req.body.username} deleted!` });
});

export default router;
