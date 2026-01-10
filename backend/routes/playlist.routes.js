import { Router } from "express";
import { getAllPlaylists } from "../controllers/playlist.controller.js";
import { checkAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", checkAuth, getAllPlaylists);

export default router;
