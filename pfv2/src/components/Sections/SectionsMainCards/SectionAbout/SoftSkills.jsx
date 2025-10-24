import { Fade } from "react-awesome-reveal"

function SoftSkills() {
    const softSkills = [
        "+15 ans d'expériences professionnelles diverses",
        "Curiosité et apprentissage continu",
        "Esprit d'équipe et entraide",
        "Altruisme et bienveillance",
        "Autonomie et prise d'initiative",
        "Communication claire et adaptation",
    ]

    return (
        <div className="flex flex-col justify-between h-full w-full">
            <h4 className="text-[#daa520] text-lg font-semibold uppercase tracking-wide mb-6">
                Savoirs & Savoir-Être
            </h4>

            <Fade cascade damping={0.15} triggerOnce className="flex-1 flex flex-col justify-between">
                <ul className="flex flex-col justify-between flex-1">
                    {softSkills.map((skill, i) => (
                        <li key={i} className="text-white text-sm">
                            {skill}
                        </li>
                    ))}
                </ul>
            </Fade>
        </div>
    )
}

export default SoftSkills