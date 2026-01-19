'use client'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '../Button';
import { FaArrowRight } from 'react-icons/fa';
import { FlipLink } from '../LinkFlip';
import { Link } from 'react-router-dom';
import { services } from './servies_data';

const Card = ({ i, title, services, src, progress, range, targetScale }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="hidden h-[30vh] lg:h-screen w-full lg:flex items-center justify-center sticky lg:top-20 px-4 lg:px-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="flex flex-col relative top-[25%] h-[30vh] lg:h-[70vh] rounded-[30px] origin-top w-full lg:border border-[#1A1A1A]">
                <div className="h-full w-full relative flex flex-col ">
                    <div className='lg:flex-1' />
                    <div className="relative z-20 lg:p-20 flex-col space-y-5 lg:w-2/3 p-4 hidden lg:block">
                        <div className='w-full'>
                            <h2 className='text-[40px] leading-11.25 lg:text-[200px] lg:leading-37.5 mb-4 uppercase'>{title}</h2>
                            {services?.map((item, index) => (
                                <p key={index} className='text-lg helvetica-regular w-fit flex items-start gap-2 border-b border-[#222222]'>
                                    <FaArrowRight className='mr-2 mt-1' />
                                    {item}
                                </p>
                            ))}
                        </div>
                        <div className='flex'>
                            <Link to="/">
                                <div className="uppercase pl-5 pr-3 py-1.5 text-[100px] w-full leading-13.5 duration-300 text-black bg-[#9EFF50] flex items-center gap-2">
                                    <FlipLink>Learn&nbsp;More</FlipLink>
                                    <div className="text-[#9EFF50] bg-black p-3 text-[50px]">
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="h-full hidden lg:block absolute top-0 w-full">
                        <img fill src={src} alt="image" className='w-full h-full object-cover rounded-[30px]' />
                    </div>
                    <div className='hidden lg:block absolute w-full h-190 bg-linear-to-t via-[#000000]/90 from-[#000000] to-transparent bottom-0 z-10' />
                </div>
            </motion.div >
        </div >

    )
}

export default Card




export const CardMobile = ({ services, title, }) => {
    return (
        <div className='mb-6'>
            <div className='lg:hidden p-4 border mx-4 border-[#1A1A1A] h-full'>
                <div className='w-full'>
                    <h2 className='text-[60px] leading-11.25 lg:text-[200px] lg:leading-37.5 mb-4 text-white uppercase'>{title}</h2>
                    {services?.map((item, index) => (
                        <p key={index} className='text-lg helvetica-regular w-fit flex items-start gap-2 border-b border-[#222222]'>
                            <FaArrowRight className='mr-2 mt-1' />
                            {item}
                        </p>
                    ))}
                </div>
                <div className='flex'>
                    <Link to="/">
                        <div className="text-[#9EFF50] flex items-center gap-3 mt-4 underline">
                            <p className='helvetica-regular'>More Services</p>
                            <FaArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export const DisplayMobileCard = () => {
    return (
        <div>
            {
                services.map((service, i) => {
                    return <CardMobile
                        key={`p_${i}`}
                        i={i}
                        {...service}
                    />
                })
            }
        </div>
    )
}

