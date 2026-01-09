import { Router } from "express";
import { googleCallback, redirectToGoogleLogin } from "../controllers/auth.controller.js";

const router = Router();

router.get("/google", redirectToGoogleLogin);
router.get("/google/callback", googleCallback);

export default router;