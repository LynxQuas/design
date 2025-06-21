// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                floatUp: "floatUp 10s linear infinite",
                floatUpDelayed: "floatUp 10s linear infinite 5s",
                bounceOnce: "bounceOnce 1s ease",
                bounceSlow: "bounceSlow 3s ease-in-out infinite",
            },
            keyframes: {
                floatUp: {
                    "0%": { transform: "translateY(100%)", opacity: "0.3" },
                    "100%": { transform: "translateY(-100%)", opacity: "0.3" },
                },
                bounceOnce: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-2px)" },
                },

                bounceSlow: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-15px)" },
                },
            },
        },
    },
    plugins: [],
};
