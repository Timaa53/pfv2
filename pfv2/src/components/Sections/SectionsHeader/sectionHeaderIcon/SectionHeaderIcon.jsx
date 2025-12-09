function SectionHeaderIcon ({icon: Icon}) {
    return(
        <div className="flex items-center justify-center gap-4 mt-4 pt-3">
            <div className="flex-1 h-px bg-white max-w-[250px]" />
            <Icon className="w-8 h-8 text-[#daa520]" strokeWidth={2} />
            <div className="flex-1 h-px bg-white max-w-[250px]" />
        </div>
    )
}

export default SectionHeaderIcon