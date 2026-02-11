import { useEffect } from 'react'
import PageTransition from '../../components/page_transition/PageTransition'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

// import StudioImage from "../../assets/images/studio/Paza.webp"
import StudioVideo from "../../assets/images/studio/Paza_Studio.mp4"
import logo1 from "../../assets/logos/studio_logo/paza.png"
import logo2 from "../../assets/logos/studio_logo/abh.png"
import logo3 from "../../assets/logos/studio_logo/DOLBY_logo.png"
import ArtistCardCarousel from '../../components/ArtistCard'
import CompanyCardCarousel from '../../components/CompanyCard'
import { VideoComponent } from '../../components/ImageComponent'

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
                <div className="pt-32 lg:max-w-screen-2xl mx-auto px-4">
                    <p className="text-[170px] leading-none lg:text-[500px] lg:leading-90 uppercase text-[#9EFF50]">About Us</p>
                    <div className="mt-10">
                        <div className='flex justify-center mb-20'>
                            <div className='lg:w-2/3'>
                                <p className="helvetica-light lg:text-xl pt-5 lg:pt-10 lg:pr-32">
                                    We’re a hands-on audio-visual production studio that craft complete brand experiencesfrom initial concept to final delivery in any format. We’re a hands-on audio-visual production studio that craft complete brand experiencesfrom initial concept to final delivery in any format.
                                    We’re a hands-on audio-visual production studio that craft complete brand experiencesfrom initial concept to final delivery in any format. We’re a hands-on audio-visual production studio that craft complete brand experiencesfrom initial concept to final delivery in any format.</p>
                                <div className='flex items-center flex-wrap gap-10 pt-10 justify-center lg:justify-normal'>
                                    <img src={logo1} alt="" className='w-20' />
                                    <img src={logo2} alt="" className='h-20 border border-[#1a1a1a]' />
                                    <img src={logo3} alt="" className='h-20 border border-[#1a1a1a]' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <video autoPlay loop muted className='mx-auto lg:w-2/3 h-full object-cover z-10'>
                                <source src={StudioVideo} type="video/mp4" />
                            </video>
                            {/* <img src={StudioImage} alt="" className='lg:w-1/2 mx-auto' /> */}
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
        </PageTransition >
    )
}

export default AboutPage