import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        googleId: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
            required: true,
        },
        avatar: {
            type: String,
        },
        youtubeRefreshToken: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
