import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa"
import { SiMongodb, SiExpress, SiPostgresql, SiTailwindcss, SiVite } from "react-icons/si"

export default function SkillsGrid() {
  const skills = [
    { icon: <FaHtml5 />, label: "HTML5" },
    { icon: <FaCss3Alt />, label: "CSS3 / SCSS" },
    { icon: <FaJs />, label: "JavaScript" },
    { icon: <FaReact />, label: "React / Vite" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
    { icon: <FaGitAlt />, label: "Git / GitHub" },
    { icon: <SiVite />, label: "Vite" },
  ]

  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      <h4 className="text-[#daa520] text-lg font-semibold uppercase tracking-wide mb-6">
        Savoir-Faire
      </h4>

      <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15 }}
            className="flex flex-col items-center gap-2 text-[#daa520]"
          >
            <div className="text-5xl">{s.icon}</div>
            <span className="text-white text-xs">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
