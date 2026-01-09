import { Router } from "express";
import { getAllPlaylistVideos } from "../controllers/video.controller.js";

const router = Router();

router.get("/:playlistId/video", getAllPlaylistVideos);

export default router;