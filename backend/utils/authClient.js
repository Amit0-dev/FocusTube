import "dotenv/config"
import { google } from "googleapis";

export const oauth2Client = new google.auth.OAuth2({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uris: [process.env.REDIRECT_URI],
});


export const youtube = google.youtube({
    version: "v3",
    auth: oauth2Client,
});