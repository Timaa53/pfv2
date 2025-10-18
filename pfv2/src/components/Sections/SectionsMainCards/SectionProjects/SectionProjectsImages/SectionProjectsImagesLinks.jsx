

function SectionProjectsImagesLinks ({link, src, alt="Image", rounded=""}) {
    return(
        <div className={`cursor-pointer overflow-hidden ${rounded}`} >
            <a href={link} target="_blank">
                <img src={src} alt={alt} className="object-cover object-[left_top] w-full h-full" />
            </a>
        </div>
    )
}

export default SectionProjectsImagesLinks