import { useState } from "react"
import Typewriter from "typewriter-effect"

function ContactItem({ icon: Icon, label, typeString, isLink = false, href }) {
    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setOpen(!open);
        setClicked(true);
        setTimeout(() => setClicked(false), 1200); 
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="relative flex items-center gap-3 hover:text-white transition-colors duration-200"
                aria-expanded={open}
            >
                <div className="relative flex items-center justify-center">
                    <Icon className="w-8 h-8 flex-shrink-0 text-[#daa520] hover:text-white" aria-hidden="true" />
                    <span
                        className={`absolute w-8 h-8 rounded-full bg-[#daa520]/40 scale-0 opacity-0 transition-all duration-300 pointer-events-none ${
                            clicked ? "animate-pulse-once" : ""
                        }`}>
                    </span>
                </div>

                {open && (
                    isLink ? (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-white-700 text-base md:text-lg"
                        >
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                    .typeString(`${typeString}`)
                                    .pauseFor(9999999)
                                    .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: 50,
                                    deleteSpeed: 50,
                                    cursor: "",
                                }}
                            />
                        </a>
                    ) : (
                        <span className="text-white-700 text-base md:text-lg">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                    .typeString(`${typeString}`)
                                    .pauseFor(9999999)
                                    .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: 50,
                                    deleteSpeed: 50,
                                    cursor: "",
                                }}
                            />
                        </span>
                    )
                )}
            </button>
        </div>
    );
}

export default ContactItem;
