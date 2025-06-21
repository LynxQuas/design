import Cta from "./cta";

export default function Footer() {
    return (
        <footer className="pl-10 fixed bottom-0 w-full flex justify-between">
            <ul className="flex items-center gap-3">
                {[
                    ["discord", "Discord"],
                    ["opensea", "OpenSea"],
                    ["twitter", "Twitter"],
                ].map(([name, label]) => (
                    <li key={name} className="w-10 h-10">
                        <img
                            src={`/src/assets/${name}.svg`}
                            alt={label}
                            className="w-full h-full object-contain"
                        />
                    </li>
                ))}
            </ul>
            <Cta />
        </footer>
    );
}
