import express from "express";
const router = express.Router();
import { body } from "express-validator";
import { registerUser, loginUser, getUserProfile, logoutUser } from "../Controllers/User.controller.js";
import authUser from "../Middelwares/Auth.middelware.js";

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/profile", authUser, getUserProfile)

router.get("/logout", logoutUser)

export default router;