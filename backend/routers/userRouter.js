import express from "express";
import { register, login, getProfile, updateProfile,logout } from "../controllers/userController.js";
import authMiddleware from "../authMiddleware.js"


const router = express.Router();

router.post("/login", login);
router.post("/logout",authMiddleware,logout)
router.post("/", register);
router.get("/me", authMiddleware, getProfile);
router.patch("/me", authMiddleware, updateProfile)

export default router