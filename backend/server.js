import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const port = process.env.PORT || 8080;

app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

import authRoutes from "./routes/auth.routes.js";
import playlistRoutes from "./routes/playlist.routes.js";
import videoRoutes from "./routes/video.routes.js";

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/playlist", playlistRoutes);
app.use("/api/v1", videoRoutes);

app.listen(8080, () => console.log(`Server is running at port ${port}`));
