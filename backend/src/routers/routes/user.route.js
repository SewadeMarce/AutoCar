import express from "express";

import { protect, requireRole } from "../../middleware/auth.js";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../../controllers/user.controller.js";


const userRoutes = express.Router();


userRoutes.get("/", protect, requireRole("admin"), getUsers);
userRoutes.get("/:id", protect, getUserById);
userRoutes.post("/", protect, requireRole("admin"), createUser);
userRoutes.put("/:id", protect, requireRole("admin"), updateUser);
userRoutes.delete("/:id", protect, requireRole("admin"), deleteUser);


export default userRoutes;