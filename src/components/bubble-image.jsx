import bubbleImage from "../assets/bubbles.webp";

export default function BubbleImage({ className }) {
    return (
        <img
            src={bubbleImage}
            alt="bubbles"
            className={`fixed top-0 left-0 w-screen h-screen object-contain pointer-events-none z-10 ${className}`}
        />
    );
}
