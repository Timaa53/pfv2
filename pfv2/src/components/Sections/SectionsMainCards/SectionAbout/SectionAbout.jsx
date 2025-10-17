function SectionAbout({ className = "", active, setActive, expanded = false }) {
  if (expanded) {
    return (
      <section className="w-full h-full bg-[#222] flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4xl text-[#daa520] mb-6">À propos de moi</h1>
        <p className="max-w-2xl text-gray-300 mb-8">
          Ton texte détaillé ici...
        </p>
        <button
          className="bg-[#daa520] text-black font-bold py-2 px-6 rounded"
          onClick={() => setActive(null)}
        >
          Retour
        </button>
      </section>
    );
  }

  return (
    <section onClick={() => setActive("contact")} className={`${className} w-full group flex items-center justify-center bg-[#222] cursor-pointer select-none`}>
      <div className="flex items-end gap-3 font-bold text-2xl md:text-3xl uppercase leading-none">
        <div className="relative inline-block h-[1.1em] overflow-hidden">
          <span className="invisible block">ME</span>
          <span className="absolute inset-0 flex items-center justify-center text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full">
            ME
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-[#daa520] transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
            ME
          </span>
        </div>

        <div className="relative inline-block h-[1.1em] overflow-hidden">
          <span className="invisible block">DECOUVRIR</span>
          <span className="absolute inset-0 flex items-center justify-center text-[#daa520] transition-all duration-300 ease-in-out group-hover:translate-y-full">
            DECOUVRIR
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-white transition-all duration-300 ease-in-out -translate-y-full group-hover:translate-y-0">
            DECOUVRIR
          </span>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout
