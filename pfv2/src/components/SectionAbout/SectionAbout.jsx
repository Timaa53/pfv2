function SectionAbout() {
  return (
    <section className="w-full h-full group relative aspect-square flex items-center justify-center bg-[#222] cursor-pointer select-none">
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
