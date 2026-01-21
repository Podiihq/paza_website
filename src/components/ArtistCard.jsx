import Marquee from "react-fast-marquee"
import Boutross from "../assets/images/artist/Boutross.webp"
import Femi from "../assets/images/artist/femi-one.jpg"
import Toxic from "../assets/images/artist/toxic.jpg"
import Costa from "../assets/images/artist/Costa Ojwang.jpeg"
import Breeder from "../assets/images/artist/Breeder.jpg"
import Father from "../assets/images/artist/fathermore.jpg"
import Maandy from "../assets/images/artist/maandy.webp"
import Mejja from "../assets/images/artist/mejja.jpg"
import Tanasha from "../assets/images/artist/Tanasha-Donna.jpg"
import Jadi from "../assets/images/artist/jadi.jpg"
import King from "../assets/images/artist/king-kaka.jpg"
import Nyasanje from "../assets/images/artist/Nyasanje.jpg"
import Soul from "../assets/images/artist/Sauti-Sol.jpg"
import Serro from "../assets/images/artist/serro.jpg"
import Maina from "../assets/images/artist/lil maina.jpeg"
import Ochunglo from "../assets/images/artist/ochunglo.webp"
import Ssaru from "../assets/images/artist/ssaru.jpg"
import Typsy from "../assets/images/artist/Tipsy-Gee.jpg"
import Vic from "../assets/images/artist/Vic-West.jpg"
import Wadagliz from "../assets/images/artist/Wadagliz.jpg"

const ArtistCardCarousel = () => {
    return (
        <div className="relative">
            <div className='hidden lg:block absolute w-75 h-150 bg-linear-to-r via-[#000000]/70 from-[#000000] to-transparent left-0 z-20' />
            <div className='hidden lg:block absolute w-75 h-150 bg-linear-to-l via-[#000000]/70 from-[#000000] to-transparent right-0 z-20' />
            <Marquee direction="right">
                <ArtistCard name="Boutross" image={Boutross} />
                <ArtistCard name="Femi 1" image={Femi} />
                <ArtistCard name="Toxic Lylikali" image={Toxic} />
                <ArtistCard name="Costa Ojwang" image={Costa} />
                <ArtistCard name="Ssaru" image={Ssaru} />
                <ArtistCard name="Breeder LW" image={Breeder} />
                <ArtistCard name="Fathermore" image={Father} />
                <ArtistCard name="Maandy" image={Maandy} />
                <ArtistCard name="Mejja" image={Mejja} />
                <ArtistCard name="Tanasha Donna" image={Tanasha} />
                <ArtistCard name="Jadi" image={Jadi} />
                <ArtistCard name="King Kaka" image={King} />
                <ArtistCard name="Nyasanje" image={Nyasanje} />
                <ArtistCard name="Sauti Soul" image={Soul} />
                <ArtistCard name="Serro" image={Serro} />
                <ArtistCard name="Lil Maina" image={Maina} />
                <ArtistCard name="Ochunglo" image={Ochunglo} />
                <ArtistCard name="Tipsy Gee" image={Typsy} />
                <ArtistCard name="Vic West" image={Vic} />
                <ArtistCard name="Wadangliz" image={Wadagliz} />
            </Marquee>
        </div>

    )
}

export default ArtistCardCarousel



export const ArtistCard = ({ name, image }) => {
    return (
        <div className="relative h-80 w-50 lg:h-130 lg:w-100 mr-4">
            <img src={image} alt="" className="h-full w-full object-cover relative" />
            <div className='absolute w-full h-50 bg-linear-to-t from-[#000000] via-[#000000]/80 to-transparent bottom-0 z-20' />
            <div className="absolute bottom-1 left-2 lg:left-6 z-30">
                <div className="">
                    <p className="text-4xl lg:text-7xl uppercase">{name}</p>
                    <p className="helvetica-regular normal-case">Artist</p>
                </div>
            </div>
        </div>
    )
}


