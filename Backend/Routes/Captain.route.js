import express from "express";

import { registerCaptain, captainLogin, captainProfile, captainLogout } from "../Controllers/Captain.controller.js";
import { authCaptain } from "../Middelwares/Auth.middelware.js"

const router = express.Router();

router.post("/register", registerCaptain)
router.post("/login", captainLogin)
router.get("/profile", authCaptain, captainProfile)
router.get("/logout", authCaptain, captainLogout)

export default router; 