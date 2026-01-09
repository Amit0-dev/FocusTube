import { oauth2Client } from "../utils/authClient.js";

export const redirectToGoogleLogin = (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        prompt: "consent",
        scope: [process.env.SCOPE],
    });

    res.redirect(url);
};

export const googleCallback = async (req, res) => {
    const code = req.query.code;

    if (!code) {
        return res.status(400).send("No auth code received");
    }

    const { tokens } = await oauth2Client.getToken(code);

    oauth2Client.setCredentials(tokens);

    oauth2Client.setCredentials({
        access_token: tokens.access_token,
    });

    res.cookie("access-token", tokens.access_token);

    res.redirect(process.env.REDIRECT_FRONTEND);
};
