import SectionProjectsImagesLinks from "./SectionProjectsImagesLinks"
import booki from "../../../../../assets/images/ProjectImages/booki.png"
import kasa from "../../../../../assets/images/ProjectImages/kasa.png"
import mvg from "../../../../../assets/images/ProjectImages/mvg.png"
import nina from "../../../../../assets/images/ProjectImages/ninaCarducciPhoto.png"
import sophie from "../../../../../assets/images/ProjectImages/sophieBluelArchitecte.png"

function SectionProjectsImages() {
    return(
        <>
            <SectionProjectsImagesLinks link="https://projet2-booki-cyan.vercel.app" src={booki} alt="Site Booki" rounded="rounded-tr-2xl" />
            <SectionProjectsImagesLinks link="https://portfolio-architecte-sophie-bluel-bay.vercel.app" src={sophie} alt="Site Sophie Bluel" rounded="rounded-tl-2xl rounded-tr-2xl" />
            <SectionProjectsImagesLinks link="https://nina-carducci-photographer.vercel.app" src={nina} alt="Site Nina Carducci" rounded="rounded-tl-2xl" />
            <SectionProjectsImagesLinks link="https://kasa-nine-gamma.vercel.app" src={kasa} alt="Site Kasa" rounded="rounded-br-2xl" />
            <SectionProjectsImagesLinks link="https://monvieuxgrimoire53210.vercel.app" src={mvg} alt="Site Mon Vieux Grimoire" rounded="rounded-bl-2xl rounded-br-2xl" />
        </>
    )
}

export default SectionProjectsImages