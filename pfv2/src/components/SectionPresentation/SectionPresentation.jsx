
function SectionPresentation() {
    return (
        <section
            id="presentation"
            className="relative aspect-square flex flex-col items-center justify-center gap-2 bg-[#111] p-6 text-center select-none"
        >
            <p className="text-xs md:text-sm font-light tracking-wider text-gray-400 uppercase">
            Hello, World! I'm
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#daa520] uppercase">
                Andy Cortin
            </h2>

            <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase">
                Etudiant EPITECH Rennes - Pré MSC
            </h3>
        </section>
    );
}

export default SectionPresentation