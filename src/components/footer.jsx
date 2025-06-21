import Cta from "./cta";

import discordLogo from "../assets/discord.svg";
import openseaLogo from "../assets/opensea.svg";
import twitterLogo from "../assets/twitter.svg";

export default function Footer() {
    return (
        <footer className="pl-10 fixed bottom-0 w-full flex justify-between">
            <ul className="flex items-center gap-3">
                {[
                    [discordLogo, "Discord"],
                    [openseaLogo, "OpenSea"],
                    [twitterLogo, "Twitter"],
                ].map(([name, label]) => (
                    <li key={name} className="w-10 h-10">
                        <img
                            src={name}
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
