import humanImg from "../assets/loading.webp";
export default function Human({ isFlipped }) {
    return (
        <div
            className={`absolute top-0 z-30 h-[26rem] w-[10rem] overflow-hidden transition-transform duration-700 ${
                isFlipped ? "rotate-[-90deg]" : "rotate-0"
            }`}
        >
            <img
                src={humanImg}
                alt="walking human"
                className="h-[30rem] w-[10rem] object-cover"
            />
        </div>
    );
}
