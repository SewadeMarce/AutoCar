import express from "express";
import { protect } from "../../middleware/auth.js";
import { login, me, register } from "../../controllers/auth.controller.js";


const authRoutes = express.Router();


authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.get("/me", protect, me);


export default authRoutes;