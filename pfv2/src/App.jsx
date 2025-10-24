import { useState } from "react"
import "./index.css"

import SectionPresentation from "./components/Sections/SectionsMainCards/SectionPresentation/SectionPresentation"
import SectionAbout from "./components/Sections/SectionsMainCards/SectionAbout/SectionAbout"
import SectionProjects from "./components/Sections/SectionsMainCards/SectionProjects/SectionProjects"
import SectionContact from "./components/Sections/SectionsMainCards/SectionContact/SectionContact"
import SectionPhoto from "./components/Sections/SectionsMainCards/SectionPhoto/SectionPhoto"

function App() {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <main className="flex min-h-screen bg-[#111] text-white overflow-hidden md:p-5 md:gap-5">
            <SectionPhoto className="hidden lg:flex w-1/3" />

            {/* MOBILE: colonne unique qui remplit 100% de la hauteur */}
            <section
                className="
                    w-full
                    flex flex-col
                    min-h-svh              /* use svh pour mobile; sinon remplace par min-h-screen */
                    md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5
                    lg:w-2/3 gap-2 relative"
            >
                {!activeSection ? (
                    <>
                        {/* 1/3 de la hauteur totale */}
                        <SectionPresentation
                            className="w-full basis-[33.3333%] grow-0 shrink-0"
                            active={activeSection}
                            setActive={setActiveSection}
                        />
                        {/* Taille sections */}
                        <SectionAbout
                            className="w-full basis-[22.2222%] grow-0 shrink-0"
                            active={activeSection}
                            setActive={setActiveSection}
                        />
                        <SectionProjects
                            className="w-full basis-[22.2222%] grow-0 shrink-0"
                            active={activeSection}
                            setActive={setActiveSection}
                        />
                        <SectionContact
                            className="w-full basis-[22.2222%] grow-0 shrink-0"
                            active={activeSection}
                            setActive={setActiveSection}
                        />
                    </>
                ) : (
                    <div className="absolute inset-0 w-full h-full lg:w-auto">
                        {activeSection === "about" && <SectionAbout active={activeSection} setActive={setActiveSection} expanded />}
                        {activeSection === "presentation" && <SectionPresentation active={activeSection} setActive={setActiveSection} expanded />}
                        {activeSection === "projects" && <SectionProjects active={activeSection} setActive={setActiveSection} expanded />}
                        {activeSection === "contact" && <SectionContact active={activeSection} setActive={setActiveSection} expanded />}
                    </div>
                )}
            </section>
        </main>
    );
}

export default App
