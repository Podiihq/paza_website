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
import Logo15 from "../assets/logos/brands/visual_edge.avif"
import Logo16 from "../assets/logos/brands/zamradi.png"
import Logo17 from "../assets/logos/brands/zebra_productions.jpeg"




const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

const companyCards = [
    { image: Logo1, className: "h-24 w-24" },
    { image: Logo2, className: "h-24 w-32" },
    { image: Logo3, className: "h-24 w-24" },
    { image: Logo4, className: "h-24 w-50" },
    { image: Logo6, className: "h-24 w-24" },
    { image: Logo5, className: "w-40 h-40" },
    { image: Logo8, className: "h-30 w-30" },
    { image: Logo7, className: "h-24 w-24" },
    { image: Logo9, className: "h-30 w-30" },
    { image: Logo16, className: "h-16 w-24" },
    { image: Logo10, className: "h-40 w-40" },
    { image: Logo11, className: "h-24 w-24" },
    { image: Logo15, className: "h-24 w-24" },
    { image: Logo12, className: "h-40 w-40" },
    { image: Logo13, className: "h-40 w-40" },
    { image: Logo14, className: "h-40 w-40" },
    { image: Logo17, className: "h-24 w-24" },
];

const CompanyCardCarousel = () => {
    // const topRow = shuffleArray(companyCards);
    // const bottomRow = shuffleArray(companyCards);

    return (
        <div className="relative -space-y-20 lg:-space-y-16">
            <div className='hidden lg:block absolute w-30 h-100 bg-linear-to-r via-[#000000]/70 from-[#000000] to-transparent left-0 z-10' />
            <div className='hidden lg:block absolute w-30 h-100 bg-linear-to-l via-[#000000]/70 from-[#000000] to-transparent right-0 z-10' />
            {/* <Marquee speed={20} direction="left">
                {topRow.map((card, index) => (
                    <CompanyCard
                        key={`top-${index}`}
                        image={card.image}
                        imageClass={card.className}
                    />
                ))}
            </Marquee>

            <Marquee speed={20} direction="right">
                {bottomRow.map((card, index) => (
                    <CompanyCard
                        key={`bottom-${index}`}
                        image={card.image}
                        imageClass={card.className}
                    />
                ))}
            </Marquee> */}

            <Marquee speed={20} direction="left">
                <CompanyCard image={Logo7} imageClass="h-24 w-24" />
                <CompanyCard image={Logo10} imageClass="h-40 w-40" />
                <CompanyCard image={Logo9} imageClass="h-30 w-30" />
                <CompanyCard image={Logo4} imageClass="h-24 w-50" />
                <CompanyCard image={Logo1} imageClass="h-24 w-24" />
                <CompanyCard image={Logo3} imageClass="h-24 w-24" />
                <CompanyCard image={Logo2} imageClass="h-24 w-32" />
                <CompanyCard image={Logo6} imageClass="h-24 w-24" />
                <CompanyCard image={Logo13} imageClass="h-40 w-40" />
                <CompanyCard image={Logo14} imageClass="h-40 w-40" />
                <CompanyCard image={Logo11} imageClass="h-24 w-24" />
                <CompanyCard image={Logo16} imageClass="h-16 w-24" />
                <CompanyCard image={Logo17} imageClass="h-24 w-24" />
                <CompanyCard image={Logo5} imageClass="w-40 h-40" />
                <CompanyCard image={Logo8} imageClass="h-30 w-30" />
                <CompanyCard image={Logo12} imageClass="h-40 w-40" />
                <CompanyCard image={Logo15} imageClass="h-24 w-24" />
            </Marquee>

            <Marquee speed={20} direction="right" className="">
                <CompanyCard image={Logo3} imageClass="h-24 w-24" />
                <CompanyCard image={Logo13} imageClass="h-40 w-40" />
                <CompanyCard image={Logo15} imageClass="h-24 w-24" />
                <CompanyCard image={Logo12} imageClass="h-40 w-40" />
                <CompanyCard image={Logo6} imageClass="h-24 w-24" />
                <CompanyCard image={Logo11} imageClass="h-24 w-24" />
                <CompanyCard image={Logo9} imageClass="h-30 w-30" />
                <CompanyCard image={Logo14} imageClass="h-40 w-40" />
                <CompanyCard image={Logo2} imageClass="h-24 w-32" />
                <CompanyCard image={Logo10} imageClass="h-40 w-40" />
                <CompanyCard image={Logo7} imageClass="h-24 w-24" />
                <CompanyCard image={Logo16} imageClass="h-16 w-24" />
                <CompanyCard image={Logo4} imageClass="h-24 w-50" />
                <CompanyCard image={Logo5} imageClass="w-40 h-40" />
                <CompanyCard image={Logo1} imageClass="h-24 w-24" />
                <CompanyCard image={Logo17} imageClass="h-24 w-24" />
                <CompanyCard image={Logo8} imageClass="h-30 w-30" />
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


