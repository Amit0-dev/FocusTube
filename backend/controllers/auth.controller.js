import { google } from "googleapis";
import { oauth2Client } from "../utils/authClient.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const redirectToGoogleLogin = (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        prompt: "consent",
        scope: [
            "https://www.googleapis.com/auth/youtube",
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
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

    const oauth2 = google.oauth2({
        auth: oauth2Client,
        version: "v2",
    });

    const { data: profile } = await oauth2.userinfo.get();

    let user = await User.findOne({ googleId: profile.id });

    console.log("User after fetching from db: ", user)

    if (!user) {
        console.log("enter into if block", user)
        user = await User.create({
            googleId: profile.id,
            email: profile.email,
            name: profile.name,
            avatar: profile.picture,
            youtubeRefreshToken: tokens.refresh_token,
        });
        console.log("User created: ", user);
    } else if (tokens.refresh_token) {
        user.youtubeRefreshToken = tokens.refresh_token;
        console.log("User refresh token updated: ", user);

        console.log(user instanceof User)
        await user.save();
    }

    console.log("User: ", user);

    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );

    if (!token) {
        return res.status(500).json({
            message: "Failed to generate token",
        });
    }

    res.cookie("token", token, {
        httpOnly: true,
    });

    res.redirect(process.env.REDIRECT_FRONTEND);
};
