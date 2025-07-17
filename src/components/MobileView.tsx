import { Github, Mail, Facebook, ArrowDown, Umbrella } from "lucide-react";
import { MoeCounter } from "./ui/moeCounter";
import { useEffect, useRef, useState } from "react";

interface MobileViewProps {
    onReady?: () => void;
}

function MobileView({ onReady }: MobileViewProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoaded = () => onReady?.();

        video.addEventListener("loadeddata", handleLoaded);
        return () => {
            video.removeEventListener("loadeddata", handleLoaded);
        };
    }, [onReady]);

    function handleTouch() {
        setSpinning(true);
        setTimeout(() => setSpinning(false), 2000);
    }

    const [spinning, setSpinning] = useState(false);

    return (
        <div className="relative">
            <div className="relative z-10">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]"
                >
                    <source src="/snowy-nocopyright.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <header className="text-white flex items-center ml-[-1rem] justify-center mt-12">
                    <p className="text-2xl font-semibold">
                        Welcome to Allysia!
                    </p>
                </header>
                <div className="flex h-screen mt-[-5rem] ml-7 flex-col items-center justify-center text-white w-screen">
                    <div className="flex flex-wrap gap-4">
                        <div className="overflow-visible">
                            <div className="relative w-fit h-fit">
                                <Umbrella
                                    color="#007AFF"
                                    size={121}
                                    strokeWidth={0.7}
                                    className={`absolute  -top-[35%] right-[70%] -rotate-[18deg]  transition-transform duration-500 ${spinning ? "animate-spin" : ""} hover:animate-spin`}
                                    onTouchStart={handleTouch}
                                />
                                <img
                                    src="/pandoraside.jpg"
                                    alt="Pandora Image"
                                    className="w-38 h-38 rounded-3xl"
                                />
                                <div className="ml-[-2px] mt-2 gap-4 inline-flex">
                                    <a
                                        href="https://github.com/Ryuuusuke"
                                        className="hover:border-blue-800 border-3 rounded-full"
                                    >
                                        <Github
                                            size={34}
                                            className=" p-[6px] "
                                        />
                                    </a>
                                    <a
                                        href="https://fedi.tilde.green/ryusuke"
                                        className="hover:border-blue-800 border-3 rounded-full"
                                    >
                                        <Facebook
                                            size={34}
                                            className="p-[6px]"
                                        />
                                    </a>
                                    <a
                                        href="mailto:alice@allysia.uno"
                                        className="hover:border-blue-800 border-3 rounded-full"
                                    >
                                        <Mail size={34} className="p-[6px]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-1 ml-1 flex-col gap-5">
                            <div className="text-xl">
                                <h2>Hi, My name is Alice!</h2>
                                <h2>Leader of Allysia</h2>
                            </div>
                            <div className="text-[17px]">
                                <p>I'm also known as Ryuuusuke</p>
                                <p>I have big interests on linux</p>
                                <p>and open source software.</p>
                            </div>
                        </div>
                    </div>
                    <footer className="absolute bottom-10 left-0 right-0">
                        <div className="flex flex-col items-center">
                            <MoeCounter size={0.7} />
                            <div className="flex gap-7 items-end justify-center flex-row relative">
                                <p>© 2025 allysia</p>

                                <a
                                    className="text-white"
                                    href="https://send.allysia.uno"
                                >
                                    <p className="text-white hover:underline">
                                        uploads
                                    </p>
                                </a>

                                <div className="relative bg-transparent flex pt-2 flex-col items-center">
                                    <ArrowDown
                                        className="absolute bg-transparent animate-bounce rotate-[25deg] bottom-6 left-[88%] -translate-x-[50%] z-50"
                                        size={28}
                                    />
                                    <a href="https://keyserver.ubuntu.com/pks/lookup?search=alice@allysia.uno&op=index">
                                        <p className="text-white hover:underline cursor-pointer mt-6">
                                            public key
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default MobileView;
