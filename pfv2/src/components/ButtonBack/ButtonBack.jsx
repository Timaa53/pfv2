

function ButtonBack ({setActive}) {
    return(
        <button
            className="absolute top-5 left-5 bg-[#daa520] text-black font-bold py-2 px-6 rounded hover:bg-[#e1b94c] transition-colors"
            onClick={() => setActive(null)}
        >
            Retour
        </button>
    )
}

export default ButtonBack