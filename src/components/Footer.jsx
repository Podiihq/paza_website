import { BiRightArrowAlt } from 'react-icons/bi'
import { FlipLink } from './LinkFlip'
import { Link } from 'react-router-dom'
import Drawer from './DrawerComponent'
import { useState } from 'react'

const Footer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };
    return (
        <div>
            <section className='overflow-hidden relative z-10 bg-black'>
                <footer className='max-w-screen-2xl px-4 mx-auto flex flex-col lg:flex-row justify-between gap-5 relative z-10 pt-8 lg:pt-16 lg:pb-32 border-t-2 border-[#1a1a1a]'>
                    <div className="flex flex-wrap lg:flex-nowrap justify-between items-start w-full gap-10 lg:gap-0">
                        <div className='flex flex-col h-full col-span-4'>
                            <h3 className="text-[40px] lg:text-[70px] uppercase text-[#9EFF50] underline">Contact us</h3>
                            <div className="mt-2 space-y-1 text-[24px] leading-none flex flex-col">
                                <p className='uppercase text-[36px] leading-none lg:text-[100px] lg:leading-19 text-white'><span className='text-[#a1a1a1]'>Email:</span> paza@example.com</p>
                                <p className='uppercase text-[36px] leading-none lg:text-[100px] lg:leading-19 text-white'><span className='text-[#a1a1a1]'>Phone: </span> +254-700-000-000</p>
                                <p className='uppercase text-[36px] leading-none lg:text-[100px] lg:leading-19 text-white'><span className='text-[#a1a1a1]'>Location: </span> 12 MOI AVENUE, NAIROBI</p>
                            </div>
                            <div className='flex-1' />
                            <div className='flex mt-10'>
                                <button onClick={openDrawer} className="group">
                                    <div className=" uppercase pl-5 pr-3 py-1.5 text-[50px] lg:text-[100px] w-full lg:leading-13.5 duration-300 text-black group-hover:text-[#9EFF50] bg-[#9EFF50] group-hover:bg-black flex items-center gap-2 border group-hover:border-[#9EFF50]">
                                        <FlipLink>GET&nbsp;Quotation</FlipLink>
                                        <div className="text-[#9EFF50] border group-hover:border-[#9EFF50] bg-black p-2 lg:p-3 lg:text-[50px]">
                                            <BiRightArrowAlt className="group-hover:-rotate-45 duration-200" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[40px] lg:text-[70px] uppercase text-[#9EFF50] underline">Website Links</h3>
                            <div className="mt-2 space-y-1 text-[24px] leading-none flex flex-col hover:text-[#9EFF50]">
                                <FooterLink link="/services" linkName="OUR&nbsp;SERVICES" />
                                <FooterLink link="#" linkName="PORTFOLIO" />
                                <FooterLink link="#" linkName="ABOUT&nbsp;US" />
                                <FooterLink link="#" linkName="OUR&nbsp;PROCESS" />
                                <FooterLink link="#" linkName="contact&nbsp;us" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[40px] lg:text-[70px] uppercase text-[#9EFF50] underline">SOCIALS LINKS</h3>
                            <div className="mt-2 space-y-1 text-[24px] leading-none flex flex-col">
                                <FooterLink link="#" linkName="INSTAGRAM" />
                                <FooterLink link="#" linkName="YOUTUBE" />
                                <FooterLink link="#" linkName="FACEBOOK" />
                            </div>
                        </div>

                    </div>
                </footer>
                <div className='lg:max-w-screen-2xl px-4 mx-auto lg:px-0'>
                    <p className="hidden lg:block text-white text-[10px] leading-none lg:text-[570px] lg:leading-120 text-center mt-10 lg:mt-0 ">PAZA STUDIO</p>
                    <div className='overflow-hidden px-4 pb-4'>
                        <p className="lg:hidden text-white text-[230px] leading-40 mt-10 text-center">PAZA</p>
                        <p className="lg:hidden text-white text-[230px] leading-42 text-center">STUDIO</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:max-w-screen-2xl px-4 mx-auto lg:px-0 pb-4'>
                    <p className='helvetica-regular uppercase text-sm text-center lg:text-start text-[#939393]'>Copyright 2026 Paza Studio | ALL RIGHTS RESERVED</p>
                    <p className='helvetica-regular uppercase text-sm lg:my-4 lg:mt-0 text-[#939393]'>Developed by Podii</p>
                </div>
            </section>
            <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
        </div>


    )
}

export default Footer



export const FooterLink = ({ link, linkName }) => {
    return (
        <Link to={link} className='group'>
            <FlipLink flipClass="uppercase text-[36px] leading-none lg:text-[100px] lg:leading-[80px] text-white group-hover:text-[#9EFF50]">{linkName}</FlipLink>
        </Link>
    )
}