import React from 'react';
import { ImageComponent } from './ImageComponent';
import Marquee from 'react-fast-marquee';

import Image1 from "../assets/images/backs/01.png"
import Image2 from "../assets/images/backs/02.png"
import Image3 from "../assets/images/backs/03.png"
import Image4 from "../assets/images/backs/04.png"
import Image5 from "../assets/images/backs/05.png"


const images = [
    Image1, Image2, Image3, Image4, Image5
];

const CurvedGallery = () => {
    return (
        <div>
            <div className="image-row lg:flex justify-center w-full h-140 object-cover hidden relative">
                <Marquee speed={10}>
                    {
                        images.map((item, index) => (
                            <div className="relative w-full h-full">
                                <ImageComponent key={index} image={item} alt=""
                                    imageClass='w-[400px] h-[600px] object-cover'
                                    skeletonClass="w-full h-[600px]"
                                />
                            </div>
                        ))
                    }
                </Marquee>
                <div className='hidden lg:block absolute w-75 h-150 bg-linear-to-r via-[#000000]/70 from-[#000000] to-transparent left-0 z-20' />
                <div className='hidden lg:block absolute w-75 h-150 bg-linear-to-l via-[#000000]/70 from-[#000000] to-transparent right-0 z-20' />
            </div >
            {/* Mobile View */}
            <div div className="image-row-mobile flex justify-center w-full object-cover lg:hidden mt-5 relative" >
                <Marquee speed={10}>
                    {
                        images.slice(0, 5).map((item, index) => (
                            <div className="relative w-full h-full">
                                <ImageComponent key={index} image={item} alt=""
                                    imageClass='w-[150px] md:w-[200px] h-[300px] object-cover'
                                    skeletonClass="w-[150px] md:w-[200px] h-[250px]"
                                />
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