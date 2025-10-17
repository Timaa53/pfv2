

function SectionHeaderIcon (icon) {
    return(
        <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex-1 h-px bg-gray-500 max-w-[250px]" />
            <`${icon}` className="w-8 h-8 text-[#daa520]" strokeWidth={2} />
            <div className="flex-1 h-px bg-gray-500 max-w-[250px]" />
        </div>
    )
}

export default SectionHeaderIcon