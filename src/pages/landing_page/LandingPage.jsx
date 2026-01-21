import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import LocomotiveScroll from 'locomotive-scroll';
import HeroVideo from "../../assets/videos/hero_reel.mp4";
import HeroImage from "../../assets/images/backs/02.png";
import ArtistCardCarousel from "../../components/ArtistCard";
import CompanyCardCarousel from "../../components/CompanyCard";
import ServicesCards from "../../components/ServiceCards/ServicesCards";
import { DisplayMobileCard } from "../../components/ServiceCards/Card";
import CurvedGallery from "../../components/CurvedGallery";


const LandingPage = () => {
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
        <div className="bg-[#000000] text-white">
            <section className='h-screen'>
                <NavBar />
                <div className="lg:max-w-screen-2xl mx-auto flex flex-col h-full">
                    <div className="flex-1" />
                    <div className="relative px-4 z-20 mb-20">
                        <p className="text-[100px] leading-20 lg:text-[230px] lg:leading-42.5 text-white uppercase">Bring your idea — <br className="hidden md:block" />we’ll handle the <br className="hidden md:block" />craft.</p>
                        <div className="lg:absolute lg:bottom-5 lg:right-[45%] mt-4 lg:mt-0">
                            <p className="lg:w-100 helvetica-regular uppercase">We’re a hands-on <span className="text-[#9EFF50] helvetica-regular"> Audio-visual Production Studio </span>  that craft complete brand experiencesfrom initial concept to final delivery in any format.</p>
                        </div>
                    </div>
                </div>
                <video autoPlay loop muted className='absolute top-0 w-full h-full object-cover z-10'>
                    <source src={HeroVideo} type="video/mp4" />
                </video>
                <img src={HeroImage} alt="" className='absolute top-0 w-full object-cover h-full' />
                <div className='absolute w-screen h-200 bg-linear-to-t via-[#000000]/70 from-[#000000] to-transparent bottom-0 z-10' />
            </section>
            <section>
                <div className="pt-32 lg:max-w-screen-2xl mx-auto">
                    <p className="text-[#939393] text-center helvetica-regular uppercase">Amazing artists we’ve worked with</p>
                    <div className="mt-10">
                        <ArtistCardCarousel />
                    </div>
                </div>
                <div className="pt-32 lg:max-w-6xl mx-auto">
                    <p className="text-[#939393] text-center helvetica-regular uppercase">Companies and Brands</p>
                    <div>
                        <CompanyCardCarousel />
                    </div>
                </div>
            </section>

            <section className="lg:max-w-screen-2xl mx-auto relative z-10 pt-32 px-4">
                <div className="px-4 lg:px-0 mb-6">
                    <p className="helvetica-regular uppercase">Our Services</p>
                    <p className="text-[100px] leading-25.5 lg:text-[200px] lg:leading-37.5 uppercase">What We Do</p>
                </div>
                <ServicesCards />
                <DisplayMobileCard />
            </section>

            <section className="lg:max-w-screen-2xl mx-auto pt-20 lg:pt-0">
                <p className="px-4 lg:px-0 text-[80px] leading-16 lg:text-[170px] lg:leading-35 uppercase text-center">Your vision, our tools, <br className="hidden lg:block" /> one great result</p>
                <CurvedGallery />

            </section>



            <section className="h-screen"></section>
            <section className="h-screen"></section>

        </div>
    )
}

export default LandingPage



