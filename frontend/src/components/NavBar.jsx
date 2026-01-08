import { Spotlight } from "lucide-react";

const NavBar = () => {
    return (
        <div className="w-full h-16 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl
                bg-orange-400/20 text-orange-400"
                >
                    <Spotlight size={18} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                    Focus<span className="italic text-orange-400">Tube</span>
                </h3>
            </div>

            <div className="flex items-center gap-4 text-gray-400">
                <span className="text-xs">Beta</span>
                <div className="h-2 w-2 bg-orange-400 rounded-full animate-pulse" />
            </div>
        </div>
    );
};

export default NavBar;
