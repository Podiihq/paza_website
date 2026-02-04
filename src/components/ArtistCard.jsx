import Marquee from "react-fast-marquee"
import { artistData } from "../assets/data/artist_data"
import { ImageComponent } from "./ImageComponent"

const ArtistCardCarousel = () => {
    return (
        <div className="relative">
            <div className='hidden lg:block absolute w-75 h-150 bg-linear-to-r via-[#000000]/70 from-[#000000] to-transparent left-0 z-20' />
            <div className='hidden lg:block absolute w-75 h-150 bg-linear-to-l via-[#000000]/70 from-[#000000] to-transparent right-0 z-20' />
            <Marquee direction="right">
                {artistData.map((artist, index) => (
                    <ArtistCard key={index} name={artist.artist_name} poster={artist.poster} />
                ))}
            </Marquee>
        </div>

    )
}

export default ArtistCardCarousel



export const ArtistCard = ({ name, poster }) => {
    return (
        <div className="relative h-80 w-50 lg:h-130 lg:w-100 mr-4">
            <ImageComponent image={poster} skeletonClass="h-80 w-50 lg:h-130 lg:w-100" imageClass="h-80 w-50 lg:h-130 lg:w-100 object-cover relative" />
            <div className='absolute w-full h-50 bg-linear-to-t from-[#000000] via-[#000000]/80 to-transparent bottom-0 z-20' />
            <div className="absolute bottom-1 left-2 lg:left-6 z-30">
                <div className="">
                    <p className="text-4xl lg:text-7xl uppercase text-[#9EFF50]">{name}</p>
                    <p className="helvetica-regular normal-case">Artist</p>
                </div>
            </div>
        </div>
    )
}


