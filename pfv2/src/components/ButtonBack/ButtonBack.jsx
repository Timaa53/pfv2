function ButtonBack ({setActive}) {
    return(
        <button
            className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-5 lg:left-5 bg-[#daa520] text-black font-semibold text-xs sm:text-sm lg:text-base py-1 px-3 sm:py-2 sm:px-5 lg:py-2.5 lg:px-6 rounded hover:bg-[#e1b94c] transition-all duration-200 shadow-md active:scale-95"
            onClick={() => setActive(null)}
        >
            Retour
        </button>
    )
}

export default ButtonBack