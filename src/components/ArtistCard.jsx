import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import { artistData } from "../assets/data/artist_data";
import { ImageComponent } from "./ImageComponent";

const ArtistCardCarousel = () => {
    return (
        <div className="relative group">
            {/* Gradient Overlays */}
            <div className='hidden lg:block absolute w-40 h-full bg-linear-to-r via-[#000000]/70 from-[#000000] to-transparent left-0 z-20 pointer-events-none' />
            <div className='hidden lg:block absolute w-40 h-full bg-linear-to-l via-[#000000]/70 from-[#000000] to-transparent right-0 z-20 pointer-events-none' />

            <Swiper
                modules={[Autoplay, FreeMode]}
                loop={true}
                speed={5000} // Adjust this for "Marquee" speed (higher = slower/smoother)
                slidesPerView="auto"
                spaceBetween={16}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false, // Keeps it moving after user interaction
                    pauseOnMouseEnter: true,      // Optional: pauses when mouse is over
                }}
                className="artist-swiper"
            >
                {artistData.map((artist, index) => (
                    <SwiperSlide key={index} style={{ width: 'auto' }}>
                        <ArtistCard name={artist.artist_name} poster={artist.poster} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export const ArtistCard = ({ name, poster }) => {
    return (
        <div className="relative h-80 w-50 lg:h-130 lg:w-100">
            <ImageComponent
                image={poster}
                skeletonClass="h-80 w-50 lg:h-130 lg:w-100"
                imageClass="h-80 w-50 lg:h-130 lg:w-100 object-cover relative"
            />
            <div className='absolute w-full h-50 bg-linear-to-t from-[#000000] via-[#000000]/80 to-transparent bottom-0 z-20' />
            <div className="absolute bottom-4 left-2 lg:left-6 z-30">
                <p className="text-4xl lg:text-7xl uppercase text-[#9EFF50] leading-none">{name}</p>
                <p className="helvetica-regular normal-case text-white">Artist</p>
            </div>
        </div>
    );
};

export default ArtistCardCarousel;