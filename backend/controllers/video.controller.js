import { getYoutubeClient } from "../utils/authClient.js";

export const getAllPlaylistVideos = async (req, res) => {
    try {
        const { playlistId } = req.params;

        if (!playlistId) {
            return res.status(400).send("Invalid PlaylistId");
        }

        let videos = [];
        let nextPageToken = null;

        do {
            const youtube = getYoutubeClient(req.user?.youtubeRefreshToken);

            const res = await youtube.playlistItems.list({
                part: ["snippet", "contentDetails"],
                playlistId,
                maxResults: 50,
                pageToken: nextPageToken || undefined,
            });

            const items = res.data.items || [];

            for (const item of items) {
                console.log(item);
                videos.push({
                    playlistItemId: item.id, // 🔥 REQUIRED for delete
                    videoId: item.snippet.resourceId.videoId,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails?.medium?.url,
                    publishedAt: item.snippet.publishedAt,
                });
            }

            nextPageToken = res.data.nextPageToken;
        } while (nextPageToken);

        return res.status(200).json({
            message: "Video fetch successfully",
            status: true,
            video: videos,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Failed to fetch videos",
            status: false,
            video: null,
        });
    }
};
