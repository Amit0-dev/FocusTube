import { useState } from "react";
import Container from "../components/Container";
import { X, Clock } from "lucide-react";
import { useEffect } from "react";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/v1/playlist", {
                    method: "GET",
                });

                const result = await res.json();

                if (result.status) {
                    setPlaylists(result.playlists);
                    console.log(result.playlists);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchPlaylists();
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-950 text-orange-200">
            <Container className={"pb-20"}>
                <div className="w-full h-34 border-white/10 bg-linear-to-t rounded-md px-5 from-white/5 to-black/20 backdrop-blur flex items-center justify-between">
                    <div>
                        <h2 className="font-semibold">
                            Good Morning,{" "}
                            <span className="text-white font-bold uppercase">Amit</span> 👋
                        </h2>
                        <p className="text-gray-400 text-sm mt-1">
                            You've learned for 42 minutes today
                        </p>
                    </div>
                    <div>
                        <button className="px-4 py-2 bg-linear-to-r from-orange-300 via-orange-400 to-orange-500 rounded-xl text-white text-sm font-medium cursor-pointer">
                            Continue Learning
                        </button>
                    </div>
                </div>

                <h4 className="font-medium text-lg mt-10 px-5">Your Learning Queues :</h4>

                {/* playlist container   */}
                <div className="flex items-center gap-2 px-5 w-full">
                    {playlists.length > 0 &&
                        playlists.map((playlist) => (
                            <div
                                key={playlist.id}
                                className="max-w-2xs w-full h-54 rounded-2xl border-white/10 bg-linear-to-t from-white/15 to-black/15 backdrop-blur px-5 pt-7"
                            >
                                <div className="flex items-center gap-2 ">
                                    <div
                                        className="flex h-8 w-8 items-center justify-center rounded-lg
                bg-orange-400/20 text-orange-400"
                                    >
                                        <p className="font-semibold uppercase">
                                            {playlist.title[0]}
                                        </p>
                                    </div>

                                    <h4 className="font-medium text-white">{playlist.title}</h4>
                                </div>

                                <p className="font-medium text-gray-400 mt-4">
                                    <span className="text-2xl text-white">
                                        {playlist.contentDetails}
                                    </span>{" "}
                                    Videos
                                </p>

                                <div className="w-full h-2 bg-gray-500 rounded-xl mt-1"></div>

                                <div>
                                    <p className="text-gray-400 text-xs mt-3">
                                        Earn Badges after finish playlist
                                    </p>

                                    <div
                                        onClick={() => setIsOpen(true)}
                                        className="mt-1 w-14 h-14 rounded-xl overflow-hidden cursor-pointer"
                                    >
                                        <img
                                            src="./levelupBadge.png"
                                            alt="levelUp"
                                            className="w-full h-full object-cover"
                                            draggable={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="flex items-center mt-10 px-5 gap-2">
                    <Clock size={20} />
                    <h4 className="font-medium text-lg">Continue Learning</h4>
                </div>
                <div
                    className="w-full mt-7 rounded-2xl 
                        border border-white/10 
                        bg-linear-to-t from-white/10 to-black/20 
                        backdrop-blur-xl 
                        px-6 py-5 
                        flex items-center justify-between 
                        shadow-lg"
                >
                    {/* Left Image */}
                    <div className="w-1/2 h-full flex items-center">
                        <div className="w-[90%] h-full overflow-hidden rounded-2xl">
                            <img
                                src="./test.avif"
                                alt="test"
                                className="h-full w-full object-cover 
                                transition-transform duration-300 
                                hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-1/2 h-full flex items-start pt-8 gap-16">
                        {/* Text */}
                        <div>
                            <div className="flex items-center gap-4">
                                <h4 className="text-lg font-semibold text-white">
                                    Kruskal&apos;s Algorithm
                                </h4>

                                <p className="flex items-center gap-1 text-gray-400 text-sm">
                                    <Clock size={14} />
                                    <span>15:42</span>
                                </p>
                            </div>

                            <p className="max-w-md text-gray-400 text-sm mt-3 leading-relaxed">
                                Learn how Kruskal’s algorithm builds a minimum spanning tree using
                                greedy edge selection.
                            </p>
                        </div>

                        {/* CTA */}
                        <button
                            className="mt-1 px-6 py-2.5 rounded-xl 
                            bg-linear-to-r from-orange-300 via-orange-400 to-orange-500 
                            text-white font-medium 
                            shadow-md hover:shadow-orange-500/30 
                            transition-all duration-300
                            hover:scale-105 active:scale-95"
                        >
                            Resume
                        </button>
                    </div>
                </div>

                {isOpen && <BadgePreviewModal onClose={() => setIsOpen(false)} />}
            </Container>
        </div>
    );
};

export default Home;

const BadgePreviewModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative z-10 w-85 rounded-2xl border border-white/10 
                      bg-linear-to-b from-[#0B1220]/90 to-[#060A14]/90
                      p-6 shadow-2xl backdrop-blur-xl
                      animate-scaleIn"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-3 top-3 rounded-full p-1 
                     text-white/60 hover:text-white
                     hover:bg-white/10 transition"
                >
                    <X size={18} />
                </button>

                {/* Title */}
                <h3 className="mb-4 text-center text-sm font-semibold tracking-wide text-white/80">
                    🎉 Achievement Badge
                </h3>

                {/* Badge Preview */}
                <div className="flex justify-center">
                    <img
                        src="./levelupBadge.png"
                        alt="Level Up Badge"
                        className="h-40 w-40 drop-shadow-[0_0_25px_rgba(124,58,237,0.45)]"
                    />
                </div>

                {/* Badge Name */}
                <h2 className="mt-3 text-center text-xl font-bold text-white">LEVEL UP</h2>

                {/* Description */}
                <p className="mt-1 text-center text-xs text-white/60">
                    Represents progress and growth 🚀
                </p>

                <div className="flex items-center gap-1 justify-center text-gray-400 mt-2">
                    <span className="text-xs">Status :</span>
                    <span className="text-xs text-white">Preview</span>
                    <div className="h-2 w-2 bg-orange-400 rounded-full animate-pulse mt-0.5" />
                </div>
            </div>
        </div>
    );
};
