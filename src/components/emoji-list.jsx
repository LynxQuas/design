import { useEffect, useState } from "react";

const emojiList = ["🐶", "🧃", "👟", "🧠", "🛸", "🧑‍💻", "🚀", "🔥"];

const getRandomPosition = () => ({
    x: Math.random() * 80 - 40, // between -40vw and 40vw
    y: Math.random() * 80 - 40, // between -40vh and 40vh
});

export default function App() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const newPositions = emojiList.map(() => getRandomPosition());
        setPositions(newPositions);
    }, []);

    return (
        <div className="relative w-screen h-screen bg-white flex items-center justify-center overflow-hidden">
            {emojiList.map((emoji, i) => (
                <span
                    key={i}
                    className="absolute text-5xl"
                    style={{
                        transform: `translate(${positions[i]?.x}vw, ${positions[i]?.y}vh)`,
                    }}
                >
                    {emoji}
                </span>
            ))}
        </div>
    );
}
