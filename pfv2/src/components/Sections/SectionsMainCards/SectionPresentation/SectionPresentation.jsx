import Typewriter from "typewriter-effect"

function SectionPresentation({ className = "" }) {
    return (
        <section
            id="presentation"
            className={`${className} w-full flex flex-col items-center justify-center gap-2 p-6 text-center select-none`}
        >
            <p className="text-xs md:text-sm font-light tracking-wider text-white-400 uppercase">
            Hello, World! I'm
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#daa520] uppercase">
                Andy Cortin
            </h2>

            <h3 className="text-xs md:text-sm font-semibold text-white-300 uppercase">
                <Typewriter
                    options={{
                        strings: [
                            "Étudiant Epitech Rennes",
                            "Pré Master Of Science",
                            "Développeur web"
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                        cursor: "",
                    }}
                />
            </h3>
        </section>
    );
}

export default SectionPresentation