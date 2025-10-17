import Photo from "../../../../assets/images/andy.jpg"

function SectionPhoto({ className = "" }) {
    return (
        <section
            id="photo"
            className={`${className} relative flex items-center justify-center overflow-hidden`}
        >
            <img
        src={Photo}
        alt="Photo d'Andy Cortin"
        className="w-full h-full object-cover"
      />
        </section>
    );
}

export default SectionPhoto
