import { useEffect, useState } from 'react'
import PageTransition from '../../components/page_transition/PageTransition'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import Drawer from '../../components/DrawerComponent'

// import StudioImage from "../../assets/images/studio/Paza.webp"
import StudioVideo from "../../assets/images/studio/Paza_Studio.mp4"
import logo1 from "../../assets/logos/studio_logo/paza.png"
import logo2 from "../../assets/logos/studio_logo/abh.png"
import ArtistCardCarousel from '../../components/ArtistCard'
import CompanyCardCarousel from '../../components/CompanyCard'

const AboutPage = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // })

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
                <div className="pt-32 lg:max-w-screen-2xl mx-auto px-4">
                    <p className="text-[170px] leading-none lg:text-[400px] lg:leading-90 uppercase text-[#9EFF50]">About Us</p>
                    <div className="">
                        <div />
                        <div className="col-span-2">
                            <div className='flex justify-center mb-20'>
                                <div className='lg:w-1/2'>
                                    <p className="helvetica-light lg:text-xl pt-5 lg:pt-10">
                                        We’re a hands-on audio-visual production studio that craft complete brand experiencesfrom initial concept to final delivery in any format. We’re a hands-on audio-visual production studio that craft complete brand experiencesfrom initial concept to final delivery in any format.
                                        We’re a hands-on audio-visual production studio that craft complete brand experiencesfrom initial concept to final delivery in any format. We’re a hands-on audio-visual production studio that craft complete brand experiencesfrom initial concept to final delivery in any format.</p>
                                    <div className='flex items-center gap-10 pt-10'>
                                        <img src={logo1} alt="" className='w-20' />
                                        <img src={logo2} alt="" className='h-20 border border-[#6F6F6F]' />
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <video autoPlay loop muted className='mx-auto lg:w-1/2 h-full object-cover z-10'>
                                    <source src={StudioVideo} type="video/mp4" />
                                </video>
                                {/* <img src={StudioImage} alt="" className='lg:w-1/2 mx-auto' /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <section className='py-32'>
                    <div className="pt-10 lg:max-w-screen-2xl mx-auto">
                        <p className="text-[#939393] text-center helvetica-regular uppercase">Worked with</p>
                        <p className="px-4 lg:px-0 text-[80px] leading-16 uppercase text-center text-[#939393]">50+ TOP Artists</p>
                        <div className="mt-10">
                            <ArtistCardCarousel />
                        </div>
                    </div>
                    <div className="pt-32 lg:max-w-6xl mx-auto">
                        <p className="text-[#939393] text-center helvetica-regular uppercase">TRUSTED BY</p>
                        <p className="px-4 lg:px-0 text-[80px] leading-16 uppercase text-center text-[#939393]">30+ Brands & Companies</p>
                        <div>
                            <CompanyCardCarousel />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
            <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
        </PageTransition >
    )
}

export default AboutPage