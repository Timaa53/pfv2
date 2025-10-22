import { useState } from "react"
import { Briefcase, GraduationCap, Star, Heart, Sparkles } from "lucide-react"
import ButtonBack from "../../../ButtonBack/ButtonBack"
import SectionsHeader from "../../SectionsHeader/SectionsHeader"

import astronomie from "../../../../assets/images/aboutPassionsImages/astronomie.jpg"
import musique from "../../../../assets/images/aboutPassionsImages/music.jpg"
import sports from "../../../../assets/images/aboutPassionsImages/sports.png"
import ia from "../../../../assets/images/aboutPassionsImages/ia.jpg"
import jeuxVideos from "../../../../assets/images/aboutPassionsImages/jeuxvideos.jpg"
import rando from "../../../../assets/images/aboutPassionsImages/montblanc.jpg"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"


function SectionAbout({ className = "", active, setActive, expanded = false }) {
    const [cardsOrder, setCardsOrder] = useState([
        {
  id: "pro",
  title: "PARCOURS PROFESSIONNEL",
  Icon: Briefcase,
  content: (
    <div className="timeline-wrapper">
      <VerticalTimeline lineColor="#daa520">

        <VerticalTimelineElement
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #daa520" }}
          iconStyle={{ background: "#daa520", color: "#111" }}
          icon={<Briefcase />}
        >
          <h3 className="text-[#daa520] font-semibold">2024 — Formation développeur web front-end & Back-end - OPENCLASSROOMS</h3>
          <p>
            Formation intensive orientée "projets", d'applications web modernes complet. Apprentissage des technologies mentionnée dans l'onglet "mes projets". Stack préférée actuelle: MongoDB/PostgreSQL, Express & Node.js, React.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #daa520" }}
          iconStyle={{ background: "#daa520", color: "#111" }}
          icon={<Briefcase />}
        >
          <h3 className="text-[#daa520] font-semibold">2023 — Formateur nouveaux embauchés - MACIF</h3>
          <p>
            Intégration et accompagnement dans la montée en compétences de nouveaux embauchés. Suivi avec reporting et plans d'actions.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #daa520" }}
          iconStyle={{ background: "#daa520", color: "#111" }}
          icon={<Briefcase />}
        >
          <h3 className="text-[#daa520] font-semibold">2018 — Conseiller commercial en assurances - MACIF</h3>
          <p>
            Vente & gestion de contrats d'assurances IARD aux particuliers et professionnels. 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #daa520" }}
          iconStyle={{ background: "#daa520", color: "#111" }}
          icon={<Briefcase />}
        >
          <h3 className="text-[#daa520] font-semibold">2016 — Conseiller en gestion financière et prévoyance - AXA</h3>
          <p>
            Développement, organisation en totale autonomie de mon portefeuille clients. Mise en place de plans/construction d'épargne pour les particuliers, et TNS. Optimisation financière et fiscale des services d'épargne et de prévoyance.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #daa520" }}
          iconStyle={{ background: "#daa520", color: "#111" }}
          icon={<Briefcase />}
        >
          <h3 className="text-[#daa520] font-semibold">2012 — Gestionnaire back-office & SAV - DARTY </h3>
          <p>
            Organisation des retours SAV de produits défectueux ou non conformes. Gestion des stocks en magasin, accompagnements clients des solutions de financements proposés.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  ),
},

        {
  id: "school",
  title: "PARCOURS SCOLAIRE",
  Icon: GraduationCap,
  content: (
    <div className="timeline-wrapper">
      <VerticalTimeline lineColor="#daa520">
        <VerticalTimelineElement
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #daa520" }}
          iconStyle={{ background: "#daa520", color: "#111" }}
          icon={<GraduationCap />}
        >
          <h3 className="text-[#daa520] font-semibold">2025 — EPITECH Rennes</h3>
          <p>
            Année préparatoire intensive en vue d'un Master of Science, réalisé en alternance.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#1a1a1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #daa520" }}
          iconStyle={{ background: "#daa520", color: "#111" }}
          icon={<GraduationCap />}
        >
          <h3 className="text-[#daa520] font-semibold">2024 — OPENCLASSROOMS</h3>
          <p>
            Développement d'application web, approfondissement des technologies suivantes: React, Node.js, MongoDB, Express, HTML, CSS, SASS, JavaScript, Git, SEO/Accessibilité, Figma.
            HTML, CSS, JS, React, Node.js, MongoDB, gestion de projets.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  ),
},

        {
            id: "skills",
            title: "COMPÉTENCES ACQUISES",
            Icon: Star,
            content: (
                <p>
                    CompétencesLangages, frameworks, outils, bonnes pratiques, soft skills, etc.
                </p>
            ),
        },
        {
  id: "passions",
  title: "MES PASSIONS",
  Icon: Heart,
  content: (
    <div className="flex flex-col w-full h-full">
      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 w-full h-full place-items-center">
        {[
          { src: astronomie, title: "Astronomie" },
          { src: musique, title: "Musique" },
          { src: sports, title: "Sports" },
          { src: ia, title: "IA" },
          { src: jeuxVideos, title: "Jeux Vidéos" },
          { src: rando, title: "Randonnée Mont Blanc 2029" },
        ].map((item, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden flex items-center justify-center w-[90%] h-[90%] aspect-[3/2] max-h-[120px] group"
          >
            <img
              src={item.src}
              alt={item.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wide drop-shadow-lg text-center transition-colors duration-300 group-hover:text-[#daa520]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
},

    ])

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

        const GAP_Y = 55
        const insets = [120, 70, 35, 0]

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
                            const inset = insets[index] ?? 0

                            return (
                                <article
                                    key={card.id}
                                    onClick={() => handleCardClick(card.id)}
                                    className={`absolute border border-gray-600 transition-all duration-500 rounded-lg overflow-hidden flex flex-col ${
                                        isActive
                                        ? "bg-[#111] scale-[1.02] h-[calc(100%-220px)] cursor-default"
                                        : "bg-[#1a1a1a] opacity-90 hover:opacity-100 h-auto cursor-pointer"
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
                                            isActive
                                            ? "opacity-100 p-6 flex flex-col overflow-y-auto"
                                            : "opacity-0 h-0 p-0"
                                        }`}
                                    >
                                        <div className="text-white flex-grow">{card.content}</div>
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
