import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import { FlipLink } from './LinkFlip';
import { FaArrowRight } from 'react-icons/fa';

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        open: { x: 0 },
        closed: { x: "100%" }
    };

    const topLineVariants = {
        open: { rotate: 45, y: 1, originX: '40%', originY: '40%' },
        closed: { rotate: 0, y: 0 }
    };

    const bottomLineVariants = {
        open: { rotate: -45, y: -1, originX: '50%', originY: '50%' },
        closed: { rotate: 0, y: 0 }
    };

    const menuItems = [
        { id: 1, text: 'Home', link: "/" },
        { id: 2, text: 'Services', link: "/" },
        { id: 4, text: 'Our Work', link: "/" },
        { id: 4, text: 'About us', link: "/" },
        { id: 4, text: 'Our Process', link: "/" },
    ];

    return (
        <div className="relative">
            <button
                className={`pt-4 focus:outline-none relative z-30 ${isOpen ? "text-[#9EFF50]" : "text-[#9EFF50]"}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <div className={`lg:pl-1 lg:pb-3 lg:pr-1 lg:pt-1 lg:hover:pb-6 lg:hover:pl-3 duration-300 rounded ${isOpen ? "" : ""}`}>
                    <motion.svg
                        className="w-16 h-16 lg:w-32 lg:h-32 rounded"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <motion.path
                            d="M4 8H20"
                            variants={topLineVariants}
                            animate={isOpen ? "open" : "closed"}
                            transition={{ type: 'tween' }}
                        />
                        <motion.path
                            d="M4 12H20"
                            variants={bottomLineVariants}
                            animate={isOpen ? "open" : "closed"}
                            transition={{ type: 'tween' }}
                        />
                    </motion.svg>
                </div>

            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 h-screen left-0 w-screen overflow-hidden bg-[#000000] z-10 text-[#9EFF50]"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ type: 'tween', duration: 0.5 }}>
                        <div className='flex flex-col items-center px-4 lg:px-10 mx-auto mt-6 h-screen pb-10 pt-32'>
                            <nav className='flex justify-center'>
                                <ul>
                                    {menuItems.map((item) => (
                                        <motion.li
                                            key={item.id}
                                            whileTap={{ scale: 0.95 }}>
                                            <Link
                                                to={item.link}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-[#9EFF50] text-[6rem] leading-20 text-center" >
                                                {item.text}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>
                            <div className='flex-1' />
                            <div className='w-full flex flex-col gap-2'>
                                <Link className='w-full'>
                                    <p className='px-8 py-3 text-[3rem] leading-none lg:text-[60px] lg:leading-12.5 text-[#000000] bg-[#9EFF50] text-center'>Contact Us</p>
                                </Link>
                                <Link className='w-full'>
                                    <p className='px-8 py-3 text-[3rem] leading-none lg:text-[60px] lg:leading-12.5 bg-[#000000] text-[#9EFF50] border border-[#9EFF50] text-center'>Get Quotation</p>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};




const NavBar = () => {
    return (
        <div>
            <div className='flex justify-between px-4 lg:px-0 items-center fixed z-50 w-full bg-[#000000] lg:hidden'>
                <Link to="/">
                    <p className='text-[40px] leading-10 relative z-50 text-white'>PAZA STUDIO</p>
                </Link>
                <HamburgerMenu />
            </div>
            <nav className='hidden lg:block w-screen py-2 fixed z-50'>
                <div className='flex justify-between items-center mx-auto max-w-screen-2xl px-4'>
                    <Link to="/">
                        <p className='text-[50px] leading-10'>PAZA STUDIO</p>
                    </Link>
                    <div className='lg:flex items-center gap-6 uppercase'>
                        <div className='flex gap-6'>
                            <FlipLink flipClass="text-4xl">HOME</FlipLink>
                            <FlipLink flipClass="text-4xl">SERVICES</FlipLink>
                            <FlipLink flipClass="text-4xl">About&nbsp;US</FlipLink>
                            <FlipLink flipClass="text-4xl">OUR&nbsp;WORK</FlipLink>
                            <FlipLink flipClass="text-4xl">Our&nbsp;PROCESS</FlipLink>
                        </div>
                        <Link to="/">
                            <div className="pl-5 pr-1.5 py-1.5 text-[40px] leading-10 duration-300 text-black bg-[#9EFF50] flex items-center gap-2">
                                <FlipLink>GET&nbsp;QUOTATION</FlipLink>
                                <div className="text-[#9EFF50] bg-black p-3 text-lg">
                                    <FaArrowRight />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='absolute w-full h-50 bg-linear-to-b via-[#000000]/70 from-[#000000] to-transparent top-0 -z-10' />
            </nav>
        </div>
    )
}

export default NavBar