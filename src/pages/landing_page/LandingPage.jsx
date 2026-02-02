import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import HeroVideo from "../../assets/videos/hero_reel.mp4";
import HeroImage from "../../assets/images/backs/02.png";
import ArtistCardCarousel from "../../components/ArtistCard";
import CompanyCardCarousel from "../../components/CompanyCard";
import ServicesCards from "../../components/ServiceCards/ServicesCards";
import { DisplayMobileCard } from "../../components/ServiceCards/Card";
import CurvedGallery from "../../components/CurvedGallery";
import { FlipLink } from "../../components/LinkFlip";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import { ParalaxTextComponent } from "../../components/ParalaxText";
import Footer from "../../components/Footer";
import PageTransition from "../../components/page_transition/PageTransition";
import FAQSection from "../../components/FAQs";
import WorkGallery, { HomeWorkDisplay } from "../work_page/WorkGallery";


const LandingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <PageTransition>
            <div className="bg-[#000000] text-[#EFEFEB]">
                <section className='h-screen'>
                    <NavBar />
                    <div className="lg:max-w-screen-2xl mx-auto flex flex-col h-full">
                        <div className="flex-1" />
                        <div className="relative px-4 z-20 mb-10 lg:mb-20">
                            <p className="text-[100px] leading-20 lg:text-[230px] lg:leading-42.5 text-white uppercase">Bring your idea — <br className="hidden md:block" />we’ll handle the <br className="hidden md:block" />craft.</p>
                            <div className="lg:absolute lg:bottom-5 lg:right-[45%] mt-4 lg:mt-0">
                                <p className="lg:w-100 helvetica-light uppercase">We’re a hands-on <span className="text-[#9EFF50] helvetica-regular"> Audio-visual Production Studio </span>  that craft complete brand experiencesfrom initial concept to final delivery in any format.</p>
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
                <section className="lg:max-w-screen-2xl mx-auto relative z-10 pt-5 lg:pt-32 px-4">
                    <div className="mb-6">
                        <p className="helvetica-regular uppercase">Our Services</p>
                        <p className="text-[80px] leading-18 lg:text-[150px] lg:leading-24 uppercase text-[#9EFF50]">What We Do</p>
                    </div>
                    <ServicesCards />
                    <DisplayMobileCard />
                </section>
                <section className="lg:max-w-screen-2xl mx-auto py-10 lg:py-32 lg:pt-0 px-4">
                    <p className="text-[80px] leading-18 lg:text-[150px] lg:leading-30 uppercase text-center">Your <span className="text-[#9EFF50]">vision,</span> our tools, <br className="hidden lg:block" /> one  <span className="text-[#9EFF50]">great result.</span></p>
                    <CurvedGallery />
                </section>
                <section className="lg:max-w-screen-2xl mx-auto py-10 px-4">
                    <div className="mb-6 lg:mb-20">
                        <p className="helvetica-regular uppercase ">Portfolio</p>
                        <p className="text-[80px] leading-18 lg:text-[150px] lg:leading-24 uppercase text-[#9EFF50]">Our Work</p>
                    </div>
                    {/* <WorkGallery /> */}
                    <HomeWorkDisplay />
                    <div className='flex justify-end mt-10 lg:mt-20'>
                        <Link to="/work" className="group">
                            <div className=" uppercase pl-5 pr-3 py-1.5 text-[50px] leading-10 lg:text-[100px] w-full lg:leading-13.5 duration-300 text-black group-hover:text-[#9EFF50] bg-[#9EFF50] group-hover:bg-black flex items-center gap-2 border group-hover:border-[#9EFF50]">
                                <FlipLink>ALL&nbsp;PROJECTS</FlipLink>
                                <div className="text-[#9EFF50] border group-hover:border-[#9EFF50] bg-black p-3 lg:text-[50px]">
                                    <BiRightArrowAlt className="group-hover:-rotate-45 duration-200 text-2xl" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
                <section>
                    <ParalaxTextComponent />
                </section>
                <section>
                    <FAQSection />
                </section>
                <section>
                    <div className="pt-10 lg:pt-32 lg:max-w-screen-2xl mx-auto">
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

                <section className="lg:pt-32">
                    <Footer />
                </section>
            </div>
        </PageTransition>

    )
}

export default LandingPage



