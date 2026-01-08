import React from "react";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Login from "../components/Login";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <div className="w-full min-h-screen bg-gray-950 text-orange-200">
            <Container>
                <NavBar />

                <div className="w-full pt-30 flex flex-col items-center justify-center">
                    <h2 className="text-6xl text-center font-semibold">
                        Turn YouTube Playlists into <br />{" "}
                        <span className="relative inline-block capitalize">
                            <span className="relative z-10">a Learning Queue</span>
                            <span
                                className="absolute left-0 -bottom-1 w-full h-2 
                                bg-linear-to-r from-orange-300 via-orange-400 to-orange-500
                                opacity-80
                                rounded-sm
                                -rotate-2
                                z-0"
                            ></span>
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-400 text-xl max-w-3xl text-center">
                        A distraction-free YouTube experience with notes, progress tracking, and
                        auto-cleanup.
                    </p>

                    <Login />

                    <div className="px-14 py-16">
                        <div className="relative mx-auto max-w-6xl rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 p-3 shadow-2xl backdrop-blur">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-60"></div>

                            {/* Image wrapper */}
                            <div className="relative overflow-hidden rounded-xl mask-fade-bottom">
                                <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-1 text-sm text-white backdrop-blur">
                                    Distraction-free learning
                                </div>
                                <img
                                    src="https://res.cloudinary.com/tea-aur-backend/image/upload/v1767867989/focusTube-image_pnviri.png"
                                    alt="FocusTube product preview"
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <HowItWorks />

                <Features />
            </Container>
            <Footer />
        </div>
    );
};

export default LandingPage;
