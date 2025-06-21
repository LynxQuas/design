import { useEffect, useState } from "react";
import Cta from "./components/cta";
import BubbleImage from "./components/bubble-image";
import Human from "./components/human";
import Header from "./components/header";
import Footer from "./components/footer";
import Loading from "./components/loading";

const emojiList = ["🐶", "🧃", "👟", "🧠", "🛸", "🧑‍💻", "🚀", "🔥"];

const getRandomOffset = (range) =>
    Math.floor(Math.random() * range * 2 - range);

export default function App() {
    const [loading, setLoading] = useState(true);
    const [isFlipped, setIsFlipped] = useState(false);
    const [showBubbles, setShowBubbles] = useState(false);
    const [emojiPositions, setEmojiPositions] = useState([]);

    useEffect(() => {
        const positions = emojiList.map(() => ({
            x: getRandomOffset(25),
            y: getRandomOffset(25),
            xEnd: getRandomOffset(10) + 40,
            yEnd: getRandomOffset(10) + 50,
        }));
        setEmojiPositions(positions);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const flipStart = window.innerHeight * 0.2;
            const flipEnd = window.innerHeight * 1.1;

            const shouldFlip = scrollY > flipStart && scrollY < flipEnd;
            setIsFlipped(shouldFlip);
            if (!shouldFlip) setShowBubbles(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);

    useEffect(() => {
        if (!isFlipped) return;
        const timer = setTimeout(() => setShowBubbles(true), 500);
        return () => clearTimeout(timer);
    }, [isFlipped]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="relative w-screen min-h-[300vh]">
            <Header isFlipped={isFlipped} />

            <main>
                <section className="fixed w-full h-screen flex items-center justify-center bg-white overflow-hidden">
                    <Human isFlipped={isFlipped} />

                    {showBubbles && (
                        <>
                            <BubbleImage className="animate-floatUp" />
                            <BubbleImage className="animate-floatUp delay-400" />
                        </>
                    )}

                    {emojiList.map((emoji, i) => {
                        const pos = emojiPositions[i];
                        if (!pos) return null;

                        const x = isFlipped ? `${pos.xEnd}vw` : `${pos.x}vw`;
                        const y = isFlipped ? `${pos.yEnd}vh` : `${pos.y}vh`;

                        return (
                            <span
                                key={i}
                                className="absolute text-[3rem] transition-all duration-700 ease-in-out"
                                style={{
                                    transform: `translate(${x}, ${y}) scale(${
                                        isFlipped ? 0.5 : 1
                                    })`,
                                    opacity: isFlipped ? 0 : 1,
                                    zIndex: 10 - i,
                                }}
                            >
                                {emoji}
                            </span>
                        );
                    })}
                </section>

                <section className="h-screen" />
            </main>

            <Footer />
        </div>
    );
}
