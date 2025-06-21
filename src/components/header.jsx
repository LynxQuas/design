export default function Header({ isFlipped }) {
    return (
        <header
            className={`sticky top-0 z-40 p-10 transition-all duration-700 ease-in-out ${
                isFlipped
                    ? "opacity-0 -translate-y-10 scale-90 pointer-events-none"
                    : "opacity-100 translate-y-0 scale-100"
            }`}
        >
            <div className="md:w-[368px] md:h-[71.8px]">
                <img
                    src="/src/assets/logo.webp"
                    alt="logo"
                    className="object-contain w-full h-full"
                />
            </div>
        </header>
    );
}
