import LocomotiveScroll from "locomotive-scroll"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import PageTransition from "../../components/page_transition/PageTransition"
import { useEffect, useState } from "react"
import { FlipLink } from "../../components/LinkFlip"
import { BiRightArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom"
import { servicesFullData } from "../../assets/data/servies_data"
import { LuArrowBigRight } from "react-icons/lu"
import FAQSection from "../../components/FAQs"
import Drawer from "../../components/DrawerComponent"

const ServicesPage = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

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
            <div className="bg-[#000000] text-[#EFEFEB]">
                <section>
                    <NavBar />
                    <div className="pt-32 lg:max-w-screen-2xl mx-auto px-4 lg:px-0">
                        <p className="text-[170px] leading-none lg:text-[700px] lg:leading-125 uppercase text-center">Services</p>
                        <div className="lg:grid grid-cols-3">
                            <div />
                            <div className="col-span-2">
                                <p className="helvetica-light lg:text-xl pt-5 lg:pt-10 text-center lg:text-start lg:w-2/3">We’re a hands-on audio-visual production studio that craft complete brand experiencesfrom initial concept to final delivery in any format. We’re a hands-on audio-visual production studio that craft complete brand experiencesfrom initial concept to final delivery in any format.</p>
                                <div className='mt-5 lg:mt-10 flex justify-center lg:w-fit'>
                                    <button onClick={openDrawer} className="group cursor-pointer">
                                        <div className="uppercase pl-5 pr-3 py-1.5 text-[50px] leading-10 lg:text-[100px] w-full lg:leading-13.5 duration-300 text-black group-hover:text-[#9EFF50] bg-[#9EFF50] group-hover:bg-black flex items-center gap-2 border group-hover:border-[#9EFF50]">
                                            <FlipLink>Work&nbsp;with&nbsp;Us</FlipLink>
                                            <div className="text-[#9EFF50] border group-hover:border-[#9EFF50] bg-black p-3 lg:text-[50px]">
                                                <BiRightArrowAlt className="group-hover:-rotate-45 duration-200 text-2xl lg:text-6xl" />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="lg:max-w-screen-2xl mx-auto px-4 lg:pt-20">
                    {servicesFullData.map((service) => (
                        <div key={service.id} className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-14 py-20 border-b border-[#282828]">
                            <div className="flex">
                                <p className="text-7xl leading-14 lg:text-[150px] uppercase lg:leading-28">0{service.id}.&nbsp;</p>
                                <h2 className="text-7xl leading-14 lg:text-[150px] uppercase lg:leading-28">{service.title}</h2>
                            </div>
                            <div className="">
                                {service.services.items.map((item, index) => (
                                    <div className="py-3 lg:py-6" key={index}>
                                        <h3 className="uppercase text-5xl lg:text-6xl leading-none pb-2 text-[#9EFF50] tracking-wide">{item.service_sub_title}</h3>
                                        {item.service_description.map((desc, i) => (
                                            <p key={i} className="helvetica-light flex items-start justify-start gap-2 pt-2 lg:pt-3 lg:text-xl">
                                                <span>
                                                    <LuArrowBigRight className='mt-1 lg:text-2xl' />
                                                </span>
                                                {desc}
                                            </p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
                <section>
                    <FAQSection />
                </section>
                <section className="lg:pt-32">
                    <Footer />
                </section>
            </div>
            <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
        </PageTransition>
    )
}

export default ServicesPage




export const ServicesPageCard = ({ image, title, item_title, item_description }) => {
    return (
        <div>
            <img src={image} alt="" />
            <p>{title}</p>
            <div>

                {servicesFullData.map((index))}
                <p>{item_title}</p>
                <p>{item_description}</p>
            </div>
        </div>
    )
}
