const HowItWorks = () => {
    return (
        <div className="w-full pt-14 pb-10">
            <h4 className="text-center font-medium text-3xl">HOW IT WORKS ?</h4>

            <div className="mx-auto max-w-4xl space-y-6 mt-10">
                {/* Step 1 */}
                <div className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <div className="flex px-5 py-1 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 font-semibold">
                       Step 1
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-white">
                            Save videos to Watch Later
                        </h3>
                        <p className="mt-1 text-sm text-white/60">
                            Add videos you want to learn from — no pressure to watch immediately.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <div className="flex px-5 py-1 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 font-semibold">
                       Step 2
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-white">
                            Watch in a focused player with notes
                        </h3>
                        <p className="mt-1 text-sm text-white/60">
                            Distraction-free playback with space to write notes and timestamps.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <div className="flex px-5 py-1 shrink-0 items-center justify-center rounded-full bg-pink-500/10 text-pink-400 font-semibold">
                       Step 3
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-white">
                            Finish → removed automatically
                        </h3>
                        <p className="mt-1 text-sm text-white/60">
                            Once you’re done, videos are removed from Watch Later automatically.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
