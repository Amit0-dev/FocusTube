import React from "react";

const Features = () => {
    return (
        <div className="w-full pt-14 pb-10">
            <h4 className="text-center font-medium text-3xl">KEY FEATURES</h4>

            <div className="mx-auto max-w-4xl grid grid-cols-1 gap-3 mt-10 md:auto-rows-[14rem] md:grid-cols-3">
                {/* Big hero card */}
                <div className=" md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur shadow flex items-center">
                    <div className="w-[70%]">
                        <h3 className="text-xl font-medium">Notes with timestamps</h3>

                        <p className="text-xs mt-3 text-gray-400">
                            Take notes while watching and automatically link them to the exact
                            moment in the video, so you can revisit key ideas instantly.
                        </p>
                    </div>

                    <div className="w-[30%] h-full">
                        <div
                            className="w-full h-full rounded-2xl p-4
                            bg-linear-to-br from-gray-700/80 to-gray-800/80
                            border border-white/10 backdrop-blur"
                        >
                            <h4 className="mb-3 text-[10px] uppercase tracking-wider text-slate-400">
                                Notes
                            </h4>

                            <div className="space-y-2 text-[11px] text-slate-100">
                                {/* Note item */}
                                <div className="relative rounded-lg px-3 py-2 overflow-hidden">
                                    {/* content */}
                                    <div className="relative z-10 flex gap-3 items-start">
                                        <span className="shrink-0 text-orange-400 font-medium">
                                            1:26
                                        </span>
                                        <p className="leading-relaxed">CSS is used for styling</p>
                                    </div>
                                </div>

                                {/* Another note */}
                                <div className="relative rounded-lg px-3 py-2 overflow-hidden">
                                    <div className="relative z-10 flex gap-3">
                                        <span className="text-orange-400 font-medium">3:42</span>
                                        <p>Box model explained clearly</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl border overflow-hidden p-1 border-white/10 bg-white/5 backdrop-blur shadow">
                    <img
                        className="w-full h-full object-cover rounded-2xl"
                        src="./bento-2.png"
                        alt="bento-2"
                    />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur shadow">
                    <div className="w-full h-40 overflow-hidden">
                        <img
                            src="./bento-4.png"
                            alt="bento-4"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-sm text-center mt-2 font-medium"> Track learning time</h3>
                    <p className="text-[10px] text-center mt-1 text-gray-400">
                        See how much time you actually spend learning.
                    </p>
                </div>
                <div className=" md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur shadow">
                    {/* Icon */}
                    <div className="flex items-center gap-2 mb-3">
                        <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg
      bg-emerald-400/20 text-emerald-400"
                        >
                            ✓
                        </div>
                        <h3 className="text-sm font-semibold text-white">
                            Auto-remove watched videos
                        </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                        Videos disappear automatically once watched — keeping your learning queue
                        clean and focused.
                    </p>

                    {/* Toggle preview */}
                    <div className="mt-4 flex items-center gap-3 text-xs text-slate-300">
                        <span>Enabled</span>
                        <div className="h-4 w-8 rounded-full bg-emerald-400/40 relative">
                            <span className="absolute right-1 top-1 h-2 w-2 bg-emerald-400 rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
