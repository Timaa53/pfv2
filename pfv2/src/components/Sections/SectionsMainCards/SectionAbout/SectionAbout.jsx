import ButtonBack from "../../../ButtonBack/ButtonBack"
import {Sparkles} from "lucide-react"
import Typewriter from "typewriter-effect"
import SectionsHeader from "../../SectionsHeader/SectionsHeader"

function SectionAbout({ className = "", active, setActive, expanded = false }) {
  if (expanded) {
    return (
      <section className="w-full h-full bg-[#222] flex flex-col items-center justify-between p-10 text-center">
        <ButtonBack setActive={setActive} />
        <SectionsHeader title="ME" title2="DÉCOUVRIR" Icon={Sparkles} />
        <main className="flex flex-col justify-center gap-6 text-sm w-full">
          
        </main>
      </section>
    );
  }

  return (
    <section onClick={() => setActive("about")} className={`${className} w-full group flex items-center justify-center bg-[#222] cursor-pointer select-none`}>
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
          <span className="invisible block">DÉCOUVRIR</span>
          <span className="absolute inset-0 flex items-center justify-center text-[#daa520] transition-all duration-300 ease-in-out group-hover:translate-y-full">
            DÉCOUVRIR
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-white transition-all duration-300 ease-in-out -translate-y-full group-hover:translate-y-0">
            DÉCOUVRIR
          </span>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout
