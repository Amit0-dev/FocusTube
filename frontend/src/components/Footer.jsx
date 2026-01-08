import { Spotlight } from "lucide-react";
import Container from "./Container";

const Footer = () => {
    return (
        <footer className="relative w-full border-t border-white/10 bg-linear-to-b from-white/5 to-black/20 backdrop-blur mt-10">
            <Container className="px-10 py-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    {/* Brand */}
                    <div className="max-w-sm">
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

                        <p className="mt-3 text-sm leading-relaxed text-gray-400">
                            Built for focused learning. Turn YouTube into a distraction-free
                            learning queue.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-6 text-sm text-gray-400">
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Terms
                            </a>
                        </div>

                        <p className="text-xs text-gray-500">
                            © 2026 FocusTube. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
