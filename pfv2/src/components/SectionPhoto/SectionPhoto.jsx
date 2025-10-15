
function SectionPhoto({ className = "" }) {
    return (
        <section
            id="photo"
            className={`${className} items-center justify-center relative`}
        >
            {/* Image de fond */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/chill_guy.webp')" }}
            />

            {/* Overlay doré subtil */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111]/70 to-transparent" />

            {/* Texte ou logo optionnel */}
            <div className="relative z-10 text-center">
                <p className="text-[#daa520] font-semibold tracking-wider">
                    Portfolio
                </p>
            </div>
        </section>
    );
}

export default SectionPhoto
