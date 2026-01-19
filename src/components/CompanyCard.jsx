import Marquee from "react-fast-marquee"
import Logo1 from "../assets/logos/brands/absa.png"
import Logo2 from "../assets/logos/brands/chora_digital_logo.png"
import Logo3 from "../assets/logos/brands/co-op.webp"
import Logo4 from "../assets/logos/brands/CTRL-Z-LOGO.png"
import Logo6 from "../assets/logos/brands/film_crew.jpeg"
import Logo5 from "../assets/logos/brands/DStv_2012_logo.svg"
import Logo7 from "../assets/logos/brands/helb.png"
import Logo8 from "../assets/logos/brands/MasterCard_Logo.svg"
import Logo9 from "../assets/logos/brands/MultiChoice_logo.svg"
import Logo10 from "../assets/logos/brands/nhif.svg"
import Logo11 from "../assets/logos/brands/redbull.svg"
import Logo12 from "../assets/logos/brands/Showmax_Logo.svg"
import Logo13 from "../assets/logos/brands/unicef.png"
import Logo14 from "../assets/logos/brands/usaid.svg"

const CompanyCardCarousel = () => {
    return (
        <Marquee speed={20} direction="right">
            <CompanyCard image={Logo1} imageClass="h-30 w-30" />
            <CompanyCard image={Logo2} imageClass="h-30 w-50" />
            <CompanyCard image={Logo3} imageClass="h-30 w-30" />
            <CompanyCard image={Logo4} imageClass="h-30 w-70" />
            {/* <CompanyCard image={Logo6} imageClass="h-30 w-30" /> */}
            <CompanyCard image={Logo5} imageClass="w-50 h-50" />
            <CompanyCard image={Logo8} imageClass="h-30 w-30" />
            {/* <CompanyCard image={Logo7} imageClass="h-30 w-30" /> */}
            <CompanyCard image={Logo9} imageClass="h-50 w-50" />
            <CompanyCard image={Logo10} imageClass="h-30 w-30" />
            <CompanyCard image={Logo11} imageClass="h-30 w-30" />
            <CompanyCard image={Logo12} imageClass="h-50 w-50" />
            <CompanyCard image={Logo13} imageClass="h-50 w-50" />
            <CompanyCard image={Logo14} imageClass="h-50 w-50" />
        </Marquee>
    )
}

export default CompanyCardCarousel



export const CompanyCard = ({ image, imageClass }) => {
    return (
        <div className={`${imageClass}`}>
            <img src={image} alt="" className="pr-12 w-full h-full object-contain saturate-50" />
        </div>
    )
}


