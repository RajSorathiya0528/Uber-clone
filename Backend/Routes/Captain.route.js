import express from "express";
import { body } from "express-validator";
import { registerCaptain } from "../Controllers/Captain.controller.js";

const router = express.Router();

router.post("/register", registerCaptain)

export default router; 