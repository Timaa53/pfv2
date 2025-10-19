import HtmlLogo from "../../../../../assets/images/LogosTechno/01-html5.png"
import CssLogo from "../../../../../assets/images/LogosTechno/02-CSS3.png"
import JavaScriptLogo from "../../../../../assets/images/LogosTechno/03-JavaScript.png"
import SeoLogo from "../../../../../assets/images/LogosTechno/05-SEO.png"
import Accessibility from "../../../../../assets/images/LogosTechno/10-accessibility.png"
import ReactLogo from "../../../../../assets/images/LogosTechno/04-React.png"
import MongoDBLogo from "../../../../../assets/images/LogosTechno/08-mongoDB.png"
import NodeJsLogo from "../../../../../assets/images/LogosTechno/06-nodejs.png"
import ExpressLogo from "../../../../../assets/images/LogosTechno/07-express.png"
import RestAPILogo from "../../../../../assets/images/LogosTechno/09-restAPI.png"
import SassLogo from "../../../../../assets/images/LogosTechno/11-Sass.png"
import Figma from "../../../../../assets/images/LogosTechno/12-Figma.png"

import { useRef, useState } from "react"

function SectionProjectsImagesLinks({ link, src, alt = "Image", rounded = "" }) {
    const enterRef = useRef(null)
    const leaveRef = useRef(null)
    const [overlay, setOverlay] = useState("overlay-initial")

    // Normaliser alt
    const normalizeAlt = (s) =>
        String(s)
        .trim()
        .toLowerCase()
        .replace(/^site\s+/, "")
        .replaceAll(/[àâä]/g, "a")
        .replaceAll(/[éèêë]/g, "e")
        .replaceAll(/[îï]/g, "i")
        .replaceAll(/[ôö]/g, "o")
        .replaceAll(/[ûü]/g, "u")
        .replaceAll(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")

        const altKey = normalizeAlt(alt)

    // Map projet-logos
    const techLogos = {
        booki: [HtmlLogo, CssLogo, Figma],
        "sophie-bluel": [JavaScriptLogo, RestAPILogo, HtmlLogo, CssLogo,Figma],
        "nina-carducci": [JavaScriptLogo, SeoLogo, Accessibility],
        kasa: [ReactLogo, NodeJsLogo, JavaScriptLogo, HtmlLogo, CssLogo, SassLogo, Figma],
        "mon-vieux-grimoire": [ExpressLogo, MongoDBLogo, NodeJsLogo, RestAPILogo, Figma]
    }

    const projectDescriptions = {
        booki: "Intégration responsive d'un site vitrine de réservation d'hébergements. Respect d'une maquette Figma. Site entièrement responsive.",
        "sophie-bluel": "Développement d'une page web dynamique pour une architecte d'intérieur. Le site permet d'afficher et gérer une galerie de projets avec intéraction d'une API.",
        "nina-carducci": "Optimisation complète des performances, de l'accessibilité et du référencement d'un site de photographe professionnel. Analyses et rapport techniques d'audits, débogage et optimisation du code pour une expérience utilisateur fluide, et SEO friendly.",
        kasa: "Développement complet d'une application de location immobilière. Création et organisation de composants modulaires et réutilisables. Gestion du routage et intégration d'animations pour une expérience utilisateur moderne, et responsive.",
        "mon-vieux-grimoire": "Développement du back-end d'un site de notation de livres avec Node.js, Express et MongoDB. Développement d'une API RESTful sécurisée, et traitement des images avec Multer.",
  }

    // Overlay directionnel
    const getDirection = (e) => {
        const el = e.currentTarget
        if (!el) return "left"
        const rect = el.getBoundingClientRect()
        const x = e.clientX
        const y = e.clientY
        const dist = {
            top: Math.abs(y - rect.top),
            right: Math.abs(x - rect.right),
            bottom: Math.abs(y - rect.bottom),
            left: Math.abs(x - rect.left),
        }
        return Object.entries(dist).reduce((a, b) => (a[1] < b[1] ? a : b))[0]
    }

    const handleEnter = (e) => {
        leaveRef.current = null
        const dir = getDirection(e)
        enterRef.current = dir
        setOverlay(`from-${dir} filter-visible`)
    }

    const handleLeave = (e) => {
        const dir = getDirection(e)
        leaveRef.current = dir
        setOverlay(`leaving-from-${dir} filter-visible`)
        setTimeout(() => {
            if (leaveRef.current === dir) {
                leaveRef.current = null
                enterRef.current = null
                setOverlay("overlay-initial")
            }
        }, 500)
    }

    return (
        <a href={link} target="_blank" rel="noreferrer">
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`relative w-full h-full cursor-pointer overflow-hidden bg-cover bg-[left_top] ${rounded}`}
        style={{ backgroundImage: `url(${src})` }}
      >
        {/* overlay */}
        <div className={`absolute inset-0 bg-[#daa520] ${overlay}`} />

        {/* contenu visible au hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-between text-white opacity-0 hover:opacity-100 transition-opacity duration-300 m-4">
          <h3 className="text-2xl font-bold">{alt}</h3>

          {/* description */}
          {projectDescriptions[altKey] && (
            <p className="text-sm md:text-base text-white-100 max-w-[80%] leading-snug">
              {projectDescriptions[altKey]}
            </p>
          )}

          {/* Logos */}
          {techLogos[altKey] && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              {techLogos[altKey].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`${alt} tech ${i + 1}`}
                  className="w-6 h-6 md:w-7 md:h-7 object-contain"
                  loading="lazy"
                  draggable="false"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  )
}

export default SectionProjectsImagesLinks