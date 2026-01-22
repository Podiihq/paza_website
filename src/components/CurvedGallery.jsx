import React from 'react';
import { ImageComponent } from './ImageComponent';
import Marquee from 'react-fast-marquee';

import Image1 from "../assets/images/backs/01.png"
import Image2 from "../assets/images/backs/02.png"
import Image3 from "../assets/images/backs/03.png"
import Image4 from "../assets/images/backs/04.png"
import Image5 from "../assets/images/backs/05.png"

import Video1 from "../assets/videos/curved_videos/01.mp4"
import Video2 from "../assets/videos/curved_videos/02.mp4"
import Video3 from "../assets/videos/curved_videos/03.mp4"
import Video4 from "../assets/videos/curved_videos/04.mp4"
import Video5 from "../assets/videos/curved_videos/05.mp4"
import Video6 from "../assets/videos/curved_videos/06.mp4"
import Video7 from "../assets/videos/curved_videos/07.mp4"
import Video8 from "../assets/videos/curved_videos/08.mp4"


const images = [
    Image1, Image2, Image3, Image4, Image5,
];

const video_reel = [
    Video1, Video2, Video3, Video5, Video6, Video7, Video8
];

const CurvedGallery = () => {
    return (
        <div>
            <div className="image-row lg:flex justify-center w-full h-140 object-cover hidden relative">
                <Marquee speed={10}>
                    {
                        video_reel.map((item, index) => (
                            <div className="relative w-full h-full">
                                {/* <ImageComponent key={index} image={item} alt=""
                                    imageClass='w-[400px] h-[600px] object-cover'
                                    skeletonClass="w-full h-[600px]"
                                /> */}
                                <video autoPlay loop muted className='w-100 h-150 object-cover' >
                                    <source key={index} src={item} type="video/mp4" />
                                </video>
                            </div>
                        ))
                    }
                </Marquee>
                <div className='hidden lg:block absolute w-75 h-150 bg-linear-to-r via-[#000000]/70 from-[#000000] to-transparent left-0 z-20' />
                <div className='hidden lg:block absolute w-75 h-150 bg-linear-to-l via-[#000000]/70 from-[#000000] to-transparent right-0 z-20' />
            </div >
            {/* Mobile View */}
            <div className="image-row-mobile flex justify-center w-full object-cover lg:hidden mt-5 relative" >
                <Marquee speed={10}>
                    {
                        video_reel.slice(0, 5).map((item, index) => (
                            <div className="relative w-full h-full">
                                {/* <ImageComponent key={index} image={item} alt=""
                                    imageClass='w-[150px] md:w-[200px] h-[300px] object-cover'
                                    skeletonClass="w-[150px] md:w-[200px] h-[250px]"
                                /> */}
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