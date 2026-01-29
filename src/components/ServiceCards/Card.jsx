'use client'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { FlipLink } from '../LinkFlip';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import { LuArrowBigRight } from 'react-icons/lu';
import { servicesData } from '../../assets/data/servies_data';

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
                className="flex flex-col relative top-[25%] h-[30vh] lg:h-[80vh] rounded-lg origin-top w-full lg:border border-[#1A1A1A]">
                <div className="h-full w-full relative flex flex-col ">
                    <div className='lg:flex-1' />
                    <div className="relative z-20 lg:p-20 flex-col space-y-5 lg:w-2/3 p-4 hidden lg:block">
                        <div className='w-full'>
                            <h2 className='text-[40px] leading-11.25 lg:text-[170px] lg:leading-35.5 mb-4 uppercase'>{title}</h2>
                            {services?.map((item, index) => (
                                <p key={index} className='text-lg helvetica-light w-fit flex items-start gap-2 border-b border-[#222222]'>
                                    <LuArrowBigRight className='mt-1 text-xl' />
                                    {item}
                                </p>
                            ))}
                        </div>
                        <div className='flex'>
                            <Link to="/services" className="group">
                                <div className=" uppercase pl-5 pr-3 py-1.5 text-[100px] w-full leading-13.5 duration-300 text-black group-hover:text-[#9EFF50] bg-[#9EFF50] group-hover:bg-black flex items-center gap-2 border group-hover:border-[#9EFF50]">
                                    <FlipLink>Learn&nbsp;More</FlipLink>
                                    <div className="text-[#9EFF50] border group-hover:border-[#9EFF50] bg-black p-3 text-[50px]">
                                        <BiRightArrowAlt className="group-hover:-rotate-45 duration-200" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="h-full hidden lg:block absolute top-0 w-full">
                        <img src={src} alt="image" className='w-full h-full object-cover rounded-lg' />
                    </div>
                    <div className='hidden lg:block absolute w-full h-190 bg-linear-to-t via-[#000000]/90 from-[#000000] to-transparent bottom-0 z-10' />
                </div>
            </motion.div >
        </div >

    )
}

export default Card




export const CardMobile = ({ services, title, src }) => {
    return (
        <div className='mb-4'>
            <div className='lg:hidden p-4 border lg:mx-4 border-[#1A1A1A] h-full'>
                <div className='w-full'>
                    <img src={src} alt="" className='w-full h-24 object-cover' />
                    <h2 className='pt-2 text-[50px] leading-11.25 tracking-wide lg:text-[200px] lg:leading-37.5 mb-4 text-white uppercase'>{title}</h2>
                    {services?.map((item, index) => (
                        <p key={index} className='helvetica-light w-fit flex items-center gap-2 border-b border-[#222222] text-base py-0.5'>
                            <LuArrowBigRight className='text-xl' />
                            {item}
                        </p>
                    ))}
                </div>

                <div className='flex mt-4'>
                    <Link to="/" className="group">
                        <div className=" uppercase pl-5 pr-3 py-2 text-[30px] w-full leading-13.5 duration-300 text-[#9EFF50] lg:bg-black border border-[#9EFF50] flex items-center gap-2">
                            <FlipLink>Learn&nbsp;More</FlipLink>
                            <div className="text-[#9EFF50] border border-[#9EFF50] bg-black p-1">
                                <BiRightArrowAlt className="text-xl" />
                            </div>
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
                servicesData.map((service, i) => {
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

