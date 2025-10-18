import { Mail } from "lucide-react"
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaCar, FaGithub } from "react-icons/fa"
import Typewriter from "typewriter-effect"
import ContactItem from "./SectionContactItems"
import SectionsHeader from "../../SectionsHeader/SectionsHeader"
import ButtonBack from "../../../ButtonBack/ButtonBack"


function SectionContact({ className = "", active, setActive, expanded = false }) {
  if (expanded) {
    return (
      <section className="w-full h-full bg-[#222] flex flex-col items-center justify-between p-10 text-center">
        <ButtonBack setActive={setActive} />
        <SectionsHeader title="FAISONS" title2="ÉQUIPE" Icon={Mail} />
        <main className="flex flex-col justify-center gap-6 text-sm w-full">
          <div className="flex flex-col items-start gap-8">
            <ContactItem 
              icon={FaPhoneAlt}
              label="Téléphone"
              typeString= "06 77 15 99 89"
            />
            <ContactItem
              icon={FaEnvelope}
              label="Email"
              typeString= "cortinandy@gmail.com"
            />
            <ContactItem
              icon={FaLinkedin}
              label="LinkedIn"
              typeString= "LinkedIn.fr"
              isLink
              href="https://linkedin.com"
            />
            <ContactItem
              icon={FaMapMarkerAlt}
              label="Localisation"
              typeString= "Mayenne, France"
            />
            <ContactItem
              icon={FaCar}
              label="Mobilité"
              typeString= "Bretagne, Pays De la Loire"
            />
            <ContactItem
              icon={FaGithub}
              label="GitHub"
              typeString= "Github.com"
              isLink
              href="https://github.com"
            />
          </div>
        </main>
        <footer className="flex justify-center items-center gap-6 mt-6">
          <p className="max-w-2xl text-white-700 mb-8">
            <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                    .typeString("En espérant vous rencontrer très prochainement, merci d'avoir pris le temps de consulter mon portfolio.")
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
          </p>
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
