import "dotenv/config";
import { google } from "googleapis";

export const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

export const getYoutubeClient = (refreshToken) => {
    if (!refreshToken) {
        throw new Error("Missing refresh token");
    }

    oauth2Client.setCredentials({
        refresh_token: refreshToken,
    });

    return google.youtube({
        version: "v3",
        auth: oauth2Client,
    });
};
