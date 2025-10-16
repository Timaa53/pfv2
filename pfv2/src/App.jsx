import { useState } from "react"
import "./index.css"

import SectionPresentation from "./components/SectionPresentation/SectionPresentation"
import SectionAbout from "./components/SectionAbout/SectionAbout"
import SectionProjects from "./components/SectionProjects/SectionProjects"
import SectionContact from "./components/SectionContact/SectionContact"
import SectionPhoto from "./components/SectionPhoto/SectionPhoto"

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
        <main className="flex min-h-screen bg-[#111] text-white overflow-hidden">
            <SectionPhoto className="w-1/3 hidden lg:flex" />
            <section className="w-2/3 grid grid-cols-2 grid-rows-2 h-screen gap-5 p-5">
                <SectionPresentation
                    active={activeSection}
                    setActive={setActiveSection}
                />
                <SectionAbout
                    active={activeSection}
                    setActive={setActiveSection}
                />
                <SectionProjects
                    active={activeSection}
                    setActive={setActiveSection}
                />
                <SectionContact
                    active={activeSection}
                    setActive={setActiveSection}
                />
            </section>
        </main>
    );
}

export default App
