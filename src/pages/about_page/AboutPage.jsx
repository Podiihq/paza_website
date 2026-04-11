import { useEffect } from 'react'
import PageTransition from '../../components/page_transition/PageTransition'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

import StudioVideo from "../../assets/images/studio/Paza_Studio.mp4"
import logo1 from "../../assets/logos/studio_logo/paza.png"
import logo2 from "../../assets/logos/studio_logo/abh.png"
import logo3 from "../../assets/logos/studio_logo/DOLBY_logo.png"

import BrayoImage1 from "../../assets/images/brayo/brayo-05.png"
import BrayoImage2 from "../../assets/images/brayo/brayo-4.png"
import BrayoImage3 from "../../assets/images/brayo/brayo-06.png"

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        const locomotive = new LocomotiveScroll()
        return () => {
            locomotive.destroy()
        }
    }, [])


    return (
        <PageTransition>
            <div className='text-white bg-black'>
                <NavBar />
                <div className="pt-32 pb-10 lg:pb-32 lg:max-w-screen-2xl mx-auto px-4">
                    <p className="text-[170px] leading-none lg:text-[500px] lg:leading-90 uppercase text-[#9EFF50]">About Us</p>
                    <div className="mt-10">
                        <div className='flex justify-center mb-20'>
                            <div className='lg:w-4/5'>
                                <p className="helvetica-light lg:text-xl pt-5 lg:pt-10 lg:pr-32">
                                    We are a hands-on audio-visual production studio crafting complete brand experiences from initial concept to final delivery—across every format and platform. With a portfolio spanning over 50 of Kenya’s leading artists and more than 30 major brands and companies, we bring creative vision and technical precision together under one roof. From brand storytelling, sonic identity development, and full-scale campaign production to cinematic video capture, color grading, motion graphics, and multi-camera workflows, we build work that resonates both visually and emotionally.
                                </p>
                                <p className="helvetica-light lg:text-xl pt-5 lg:pt-10 lg:pr-32">
                                    For filmmakers, we deliver original scores, immersive sound design, and pristine final mixes tailored for Stereo, 5.1 Surround, and emerging formats like Dolby Atmos®. For musicians and artists, we produce release-ready records, music videos, and content that amplifies their voice and future-proofs their sound. Beyond production, we invest in the next generation through mentoring in music production, scoring to picture, video creation, and immersive audio. Whatever the canvas—film, music, advertising, or digital—we shape ideas into powerful, end-to-end experiences that move audiences and elevate brands.
                                </p>
                                <div className='flex items-center flex-wrap gap-2 lg:gap-10 pt-10 justify-center lg:justify-normal'>
                                    <img src={logo1} alt="" className='w-20' />
                                    <img src={logo2} alt="" className='h-20 border border-[#1a1a1a]' />
                                    <img src={logo3} alt="" className='h-20 border border-[#1a1a1a]' />
                                </div>
                                <div className='py-10'>
                                    <video autoPlay loop muted className=' h-full object-cover z-10'>
                                        <source src={StudioVideo} type="video/mp4" />
                                    </video>
                                </div>
                                <h3 className="pt-10 lg:pt-20 text-center uppercase text-5xl lg:text-6xl leading-none text-[#737373]">Meet Our Founder & CEO</h3>
                                <div className='lg:flex gap-4'>
                                    <div>
                                        <img src={BrayoImage2} alt="" className='lg:w-140 h-fit' />
                                        <div className='border p-4 border-[#1F1F1F] mt-4 bg-[#0B0B0B]'>
                                            <h3 className="uppercase text-5xl lg:text-8xl leading-16 text-[#9EFF50]">Brian</h3>
                                            <p className="helvetica-light flex items-start justify-start gap-2 lg:text-xl pt-2">
                                                CEO, Director, Producer
                                            </p>
                                            <h3 className="uppercase text-center text-4xl lg:text-6xl leading-20 lg:pt-5 text-[#737373]">
                                                "Persistant quest for zero deffect"
                                            </h3>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={BrayoImage3} alt="" className='lg:w-160 h-fit' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </PageTransition >
    )
}

export default AboutPage