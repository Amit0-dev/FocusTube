import { youtube } from "../utils/authClient.js";

export const getAllPlaylists = async (req, res) => {
    try {
        let playlists = [];
        let nextPageToken = null;

        const response = await youtube.playlists.list({
            part: ["snippet", "contentDetails"],
            maxResults: 50,
            mine: true,
            pageToken: nextPageToken || undefined,
        });

        const items = response.data.items || [];
        console.log("yeye 1");
        for (const item of items) {
            playlists.push({
                id: item.id,
                thumbnail: item.snippet.thumbnails,
                title: item.snippet.title,
                description: item.snippet.description,
                publishedAt: item.snippet.publishedAt,
                channelTitle: item.snippet.channelTitle,
                contentDetails: item.contentDetails.itemCount,
            });
        }

        console.log("yeye");
        console.log(playlists)

        return res.status(200).json({
            message: "Playlists fetch successfully",
            status: true,
            playlists: playlists,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Failed to fetch playlists",
            status: false,
            playlists: null,
        });
    }
};
