import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import PlaceholderImage from "../assets/images/placeholder.png"


import Video1 from "../assets/videos/curved_videos/01.mp4"
import Video2 from "../assets/videos/curved_videos/02.mp4"
import Video3 from "../assets/videos/curved_videos/03.mp4"
import Video4 from "../assets/videos/curved_videos/04.mp4"
import Video5 from "../assets/videos/curved_videos/05.mp4"
import Video6 from "../assets/videos/curved_videos/06.mp4"
import Video7 from "../assets/videos/curved_videos/07.mp4"
import Video8 from "../assets/videos/curved_videos/08.mp4"
import Video9 from "../assets/videos/curved_videos/09.mp4"


const video_reel = [
    {
        reel_video: Video1,
        reel_placeholder: PlaceholderImage
    },
    {
        reel_video: Video3,
        reel_placeholder: PlaceholderImage
    },
    {
        reel_video: Video9,
        reel_placeholder: PlaceholderImage
    },
    {
        reel_video: Video2,
        reel_placeholder: PlaceholderImage
    },
    {
        reel_video: Video7,
        reel_placeholder: PlaceholderImage
    },
    {
        reel_video: Video5,
        reel_placeholder: PlaceholderImage
    },
    {
        reel_video: Video8,
        reel_placeholder: PlaceholderImage
    },
];

const CurvedGallery = () => {
    const [loaded, setLoaded] = useState(false);
    return (
        <div>
            <div className="image-row lg:flex justify-center w-full h-140 object-cover hidden relative">
                <Marquee speed={10}>
                    {
                        video_reel.map((item, index) => (
                            <div className="w-100 h-full">
                                <video autoPlay loop muted className='w-100 h-150 object-cover'>
                                    <source key={index} src={item.reel_video} type="video/mp4" />
                                </video>
                                <div key={index} className='absolute top-0 -z-10'>
                                    <img src={item.reel_placeholder} alt="" className='h-150 w-100 object-cover border-r border-[#000000]' />
                                </div>
                            </div>
                        ))
                    }
                </Marquee>
                <div className='hidden lg:block absolute w-75 h-150 bg-linear-to-r via-[#000000]/70 from-[#000000] to-transparent left-0 z-20' />
                <div className='hidden lg:block absolute w-75 h-150 bg-linear-to-l via-[#000000]/70 from-[#000000] to-transparent right-0 z-20' />
            </div >
            {/* Mobile View */}
            <div className="image-row-mobile flex justify-center w-full object-cover lg:hidden mt-5 relative" >
                <Marquee speed={40}>
                    {
                        video_reel.slice(0, 5).map((item, index) => (
                            <div className="relative w-full h-full">
                                <video key={index} autoPlay loop muted className='w-37.5 md:w-50 h-75 object-cover'>
                                    <source src={item} type="video/mp4" />
                                </video>
                            </div>
                        ))
                    }
                </Marquee >
                <div className='absolute w-20 h-100 bg-linear-to-r via-[#000000]/70 from-[#000000] to-transparent left-0 z-20' />
                <div className='absolute w-20 h-100 bg-linear-to-l via-[#000000]/70 from-[#000000] to-transparent right-0 z-20' />
            </div>
        </div >

    );
};

export default CurvedGallery;