import { Router } from "express";
import { getAllPlaylistVideos } from "../controllers/video.controller.js";
import { checkAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/:playlistId/video", checkAuth, getAllPlaylistVideos);

export default router;
