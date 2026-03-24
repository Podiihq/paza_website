import Marquee from "react-fast-marquee"
import Logo1 from "../assets/logos/brands/absa.png" //absa
import Logo2 from "../assets/logos/brands/chora_logo.png"
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
import Logo15 from "../assets/logos/brands/visual_edge.avif"
import Logo16 from "../assets/logos/brands/zamradi.png"
import Logo17 from "../assets/logos/brands/zebra_productions.jpeg"
import Logo19 from "../assets/logos/new_brands/Admedia-Communications-Logos-01.webp"
import Logo20 from "../assets/logos/new_brands/bajaj-motorcycle-seeklogo.png"
import Logo21 from "../assets/logos/new_brands/CBCC.jpg"
import Logo22 from "../assets/logos/new_brands/Coat_of_Arms_of_Samburu_County.png"
import Logo23 from "../assets/logos/new_brands/CommunicationsAuthority.jpg"
import Logo24 from "../assets/logos/new_brands/consolidated_bank_logo.png"
import Logo25 from "../assets/logos/new_brands/County-Government-of-Busia-TENDER-2020.jpg"
import Logo26 from "../assets/logos/new_brands/county_government_of_kisumu_logo.jpg"
import Logo27 from "../assets/logos/new_brands/flamingo-logo.jpg"
import Logo28 from "../assets/logos/new_brands/Galaxy_FreeForm_logo.jpg"
import Logo29 from "../assets/logos/new_brands/golden_Marketing.png"
import Logo30 from "../assets/logos/new_brands/gvt-kilifi.png"
import Logo31 from "../assets/logos/new_brands/west-pokot-county-logo-png_seeklogo-518434.png"
import Logo32 from "../assets/logos/new_brands/Victoriabank_logo.png"
import Logo33 from "../assets/logos/new_brands/UNILIVER.jpeg"
import Logo34 from "../assets/logos/new_brands/UKAID.webp"
import Logo35 from "../assets/logos/new_brands/SHOFCO-Blue-Logo-01.png"
import Logo36 from "../assets/logos/new_brands/pnl.jpg"
import Logo37 from "../assets/logos/new_brands/perform_music_incubator.jpg"
import Logo38 from "../assets/logos/new_brands/Ogilvy_logo.png" // Sawa
import Logo39 from "../assets/logos/new_brands/Nairobi_City_Logo.png"
import Logo40 from "../assets/logos/new_brands/nairobi-ent-bbs-mall.jpg"
import Logo41 from "../assets/logos/new_brands/moon_beam.png"
import Logo42 from "../assets/logos/new_brands/MoH Kenya.jpg"
import Logo43 from "../assets/logos/new_brands/Kenya_Power_logo.jpeg" // Sawa
import Logo44 from "../assets/logos/new_brands/gvt-of-garissa.jpg"
import Logo45 from "../assets/logos/new_brands/good_life.svg"
import Logo46 from "../assets/logos/new_brands/pesalink-logo-light.png"


const companyCardsOne = [
    { image: Logo1, className: "h-24 w-24" },
    { image: Logo2, className: "h-32 w-40" },
    { image: Logo46, className: "h-16 w-50" },
    { image: Logo3, className: "h-24 w-24" },
    { image: Logo4, className: "h-24 w-50" },
    { image: Logo5, className: "w-40 h-40" },
    { image: Logo8, className: "h-30 w-30" },
    { image: Logo9, className: "h-30 w-40" },
    { image: Logo10, className: "h-40 w-40" },
    { image: Logo11, className: "h-24 w-24" },
    { image: Logo15, className: "h-24 w-24" },
    { image: Logo12, className: "h-40 w-40" },
    { image: Logo13, className: "h-40 w-40" },
    { image: Logo14, className: "h-40 w-40" },
    { image: Logo19, className: "h-32 w-32" },
    { image: Logo20, className: "h-40 w-40" },
    { image: Logo30, className: "h-32 w-32" },
    { image: Logo31, className: "h-32 w-32" },
    { image: Logo38, className: "h-40 w-40" },
    { image: Logo35, className: "h-40 w-50" },
    { image: Logo45, className: "h-40 w-50" },

];

const companyCardsTwo = [

    { image: Logo6, className: "h-32 w-32" },
    { image: Logo7, className: "h-32 w-32" },
    { image: Logo17, className: "h-32 w-32" },
    { image: Logo44, className: "h-32 w-40" },
    { image: Logo37, className: "h-32 w-32" },
    { image: Logo36, className: "h-32 w-32" },
    { image: Logo39, className: "h-32 w-32" },
    { image: Logo34, className: "h-32 w-32" },
    { image: Logo32, className: "h-32 w-32" },
    { image: Logo33, className: "h-40 w-50" },
    { image: Logo40, className: "h-40 w-40" },
    { image: Logo16, className: "h-20 w-32" },
    { image: Logo41, className: "h-32 w-32" },
    { image: Logo42, className: "h-40 w-40" },
    { image: Logo43, className: "h-32 w-32" },
    { image: Logo26, className: "h-32 w-32" },
    { image: Logo23, className: "h-40 w-50" },
    { image: Logo24, className: "h-50 w-60" },
    { image: Logo25, className: "h-40 w-40" },
    { image: Logo28, className: "h-32 w-40" },
    { image: Logo29, className: "h-32 w-60" },
    { image: Logo27, className: "h-32 w-32" },
    { image: Logo21, className: "h-32 w-32" },
    { image: Logo22, className: "h-32 w-32" },

]

const CompanyCardCarousel = () => {

    return (
        <div className="relative -space-y-20 lg:-space-y-16">
            <div className='hidden lg:block absolute w-30 h-100 bg-linear-to-r via-[#000000]/70 from-[#000000] to-transparent left-0 z-10' />
            <div className='hidden lg:block absolute w-30 h-100 bg-linear-to-l via-[#000000]/70 from-[#000000] to-transparent right-0 z-10' />
            <Marquee speed={20} direction="left">
                {companyCardsOne.map((card, index) => (
                    <CompanyCard
                        key={`top-${index}`}
                        image={card.image}
                        imageClass={card.className}
                    />
                ))}
            </Marquee>

            <Marquee speed={20} direction="right">
                {companyCardsTwo.map((card, index) => (
                    <CompanyCard
                        key={`bottom-${index}`}
                        image={card.image}
                        imageClass={card.className}
                    />
                ))}
            </Marquee>
        </div>
    )
}

export default CompanyCardCarousel



export const CompanyCard = ({ image, imageClass }) => {
    return (
        <div className={`${imageClass}`}>
            <img src={image} alt="" className="pr-10 w-full h-full object-contain saturate-50" />
        </div>
    )
}


