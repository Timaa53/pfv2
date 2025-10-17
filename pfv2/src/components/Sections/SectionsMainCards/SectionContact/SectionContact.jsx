import { Mail } from "lucide-react"
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaCar, FaGithub } from "react-icons/fa"
import ContactItem from "./SectionContactItem"


function SectionContact({ className = "", active, setActive, expanded = false }) {
  if (expanded) {
    return (
      <section className="w-full h-full bg-[#222] flex flex-col items-center justify-between p-10 text-center">
        <header className="mb-6 w-full flex flex-col pt-3">
          <div className="flex items-end justify-center gap-3 font-bold text-4xl md:text-5xl uppercase leading-none">
            <span className="text-white">FAISONS</span>
            <span className="text-[#daa520]">ÉQUIPE</span>
          </div>
          <div className="border-and-icon pt-3">
            <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex-1 h-px bg-gray-500 max-w-[100px]" />
            <Mail className="w-8 h-8 text-[#daa520]" strokeWidth={2} />
            <div className="flex-1 h-px bg-gray-500 max-w-[100px]" />
          </div>
          </div>
        </header>
        <main className="flex flex-col items-center justify-center gap-6 text-[#daa520] text-sm w-full">
          <div className="flex flex-col items-start gap-4">
            <ContactItem icon={FaPhoneAlt} label="Téléphone" content="06 77 15 99 89" />
            <ContactItem icon={FaEnvelope} label="Email" content="cortinandy@gmail.com" />
            <ContactItem
              icon={FaLinkedin}
              label="LinkedIn"
              content="linkedin.com/in/cortinandy"
              isLink
              href="https://linkedin.com/in/cortinandy"
            />
            <ContactItem icon={FaMapMarkerAlt} label="Localisation" content="Mayenne, France" />
            <ContactItem icon={FaCar} label="Mobilité" content="Bretagne / Pays de la Loire" />
            <ContactItem
              icon={FaGithub}
              label="GitHub"
              content="github.com/AndyCortin"
              isLink
              href="https://github.com/AndyCortin"
            />
          </div>
        </main>
        <footer className="flex justify-center items-center gap-6 mt-6">
          <p className="max-w-2xl text-gray-300 mb-8">
            footer éventuel
          </p>
          <button
            className="bg-[#daa520] text-black font-bold py-2 px-6 rounded"
            onClick={() => setActive(null)}
          >
            Retour
          </button>
        </footer>
      </section>
    );
  }

  return (
    <section onClick={() => setActive("contact")} className={`${className} w-full group flex items-center justify-center bg-[#222] cursor-pointer select-none`}>
      <div className="flex items-end gap-3 font-bold text-2xl md:text-3xl uppercase leading-none">
        <div className="relative inline-block h-[1.1em] overflow-hidden">
          <span className="invisible block">FAISONS</span>
          <span className="absolute inset-0 flex items-center justify-center text-white transition-all duration-300 ease-in-out group-hover:-translate-y-full">
            FAISONS
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-[#daa520] transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
            FAISONS
          </span>
        </div>

        <div className="relative inline-block h-[1.1em] overflow-hidden">
          <span className="invisible block">EQUIPE</span>
          <span className="absolute inset-0 flex items-center justify-center text-[#daa520] transition-all duration-300 ease-in-out group-hover:translate-y-full">
            EQUIPE
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-white transition-all duration-300 ease-in-out -translate-y-full group-hover:translate-y-0">
            EQUIPE
          </span>
        </div>
      </div>
    </section>
  );
}

export default SectionContact
