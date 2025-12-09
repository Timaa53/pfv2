import SectionHeaderIcon from "./sectionHeaderIcon/SectionHeaderIcon"

function SectionHeader ({title, title2, Icon}) {
    return(
        <header className="mb-6 w-full flex flex-col pt-3">
            <div className="flex items-end justify-center gap-3 font-bold text-4xl md:text-5xl uppercase leading-none">
                <span className="text-white">{title}</span>
                <span className="text-[#daa520]">{title2}</span>
            </div>
            <SectionHeaderIcon icon={Icon} />
        </header>
    )
}

export default SectionHeader