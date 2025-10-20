import { useState } from "react"
import { Briefcase, GraduationCap, Star, Heart, Sparkles } from "lucide-react"
import ButtonBack from "../../../ButtonBack/ButtonBack"
import SectionsHeader from "../../SectionsHeader/SectionsHeader"

function SectionAbout({ className = "", active, setActive, expanded = false }) {
    const initialCards = [
        {
          id: "pro",
          title: "PARCOURS PROFESSIONNEL",
          Icon: Briefcase,
          content: "Expérience pro : stages, alternances, projets pros, etc."
        },
        {
          id: "school",
          title: "PARCOURS SCOLAIRE",
          Icon: GraduationCap,
          content: "Formations, diplômes et certifications ici."
        },
        {
          id: "skills",
          title: "COMPÉTENCES ACQUISES",
          Icon: Star,
          content: "Stacks, outils, langages, frameworks, soft skills..."
        },
        {
          id: "passions",
          title: "MES PASSIONS",
          Icon: Heart,
          content: "Projets personnels, centres d'intérêt, etc."
        },
    ]

    const [cardsOrder, setCardsOrder] = useState(initialCards)
    const [activeCard, setActiveCard] = useState("passions")

    if (expanded) {
        const handleCardClick = (clickedId) => {
            if (clickedId === activeCard) return
            const clickedCard = cardsOrder.find((c) => c.id === clickedId)
            const others = cardsOrder.filter((c) => c.id !== clickedId)
            const newOrder = [...others, clickedCard]
            setCardsOrder(newOrder)
            setActiveCard(clickedId)
        }

        // Paramètres visuels
        const GAP_Y = 55
        const insets = [120, 70, 35, 0] // Valeurs position cartes

        return (
            <section className="w-full h-full bg-[#222] flex flex-col items-center justify-between p-10 text-center overflow-hidden">
                <ButtonBack setActive={setActive} />
                <SectionsHeader title="ME" title2="DÉCOUVRIR" Icon={Sparkles} />

                <main className="flex flex-col justify-center items-center gap-6 text-sm w-full">
                    <div className="relative w-full h-full">
                    {cardsOrder.map((card, index) => {
                        const isActive = activeCard === card.id
                        const zIndex = 10 + index * 10
                        const offsetY = index * GAP_Y

                        // Valeurs cartes selon position
                        const inset = insets[index] ?? 0

                        return (
                            <article
                                key={card.id}
                                onClick={() => handleCardClick(card.id)}
                                className={`absolute border border-gray-600 transition-all duration-500 cursor-pointer rounded-lg overflow-hidden flex flex-col ${
                                    isActive
                                    ? "bg-[#111] scale-[1.02] h-[calc(100%-220px)] cursor-default"
                                    : "bg-[#1a1a1a] opacity-90 hover:opacity-100 h-auto"
                                }`}
                                style={{
                                    zIndex,
                                    left: inset,
                                    right: inset,
                                    transform: `translateY(${offsetY}px)`,
                                }}
                            >
                                {/* En-tête */}
                                <div className="flex items-center justify-center gap-2 py-4 border-b border-gray-600 text-[#daa520] uppercase tracking-wide shrink-0">
                                    <card.Icon className="w-5 h-5" />
                                    <h3 className="text-lg font-semibold">{card.title}</h3>
                                </div>

                                {/* Contenu */}
                                <div
                                    className={`transition-all duration-500 ease-in-out flex-grow ${
                                        isActive ? "opacity-100 p-6" : "opacity-0 h-0 p-0"
                                    }`}
                                >
                                    <div className="text-white-300 text-left overflow-auto">
                                        {card.content}
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                    <div className="h-[750px]" />
                    </div>
                </main>
            </section>
        )
    }

    // Cartes fermées
    return (
        <section
            onClick={() => setActive("about")}
            className={`${className} w-full group flex items-center justify-center bg-[#222] cursor-pointer select-none`}
        >
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
    )
}

export default SectionAbout
