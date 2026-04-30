import { useEffect } from "react"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import PageTransition from "../../components/page_transition/PageTransition"
import LocomotiveScroll from "locomotive-scroll"
import SocialImage from "../../assets/images/other/social_Work.jpg"
import { socialData } from "../../assets/data/social_data"
import { LuArrowBigRight } from "react-icons/lu"


const ImpactPage = () => {
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
                <NavBar />
                <section className='h-screen lg:h-[70vh] relative  pt-32'>
                    <div className="lg:max-w-screen-2xl mx-auto flex flex-col h-full">
                        <div className="flex-1" />
                        <div className="relative px-4 z-20">
                            <p className="text-9xl leading-25 lg:text-[15rem] lg:leading-50 text-white uppercase">
                                Our
                                <span className="text-[#9EFF50]"> Social Impact</span>
                            </p>
                            <div className="lg:py-20 flex justify-center">
                                <p className="helvetica-light lg:text-lg lg:w-1/2 py-5">
                                    We take pride in our collaborations with esteemed international
                                    charities social enterprises, and Governmental organizations.
                                    We’ve successfully completed hundreds of projects for UNICEF,
                                    USAID, One Young World, Shofco, PSK, Ministry of Health,
                                    Nairobi County Government and UKAID. Our contributions
                                    include the Pata Chanjo campaign, the Linda Mama NHIF
                                    campaign, Tumaini Korono, Mainyotto, and Mukulima True
                                    campaigns to name a few. At Paza Studios, we transcend
                                    boundaries to bring your vision to life while making a positive
                                    impact in every project we undertake.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={SocialImage} alt="" className="absolute top-0 w-full h-full object-cover z-10" />
                    <div className='absolute w-screen h-200 bg-linear-to-t via-[#000000]/70 from-[#000000] to-transparent bottom-0 z-10' />
                </section>

                <section className="lg:max-w-screen-2xl mx-auto pt-20 lg:pt-0 pb-20">
                    <div>
                        <div className="flex flex-col justify-center items-center my-10 lg:my-20 px-4 space-y-4">
                            <p className="uppercase text-6xl leading-14 lg:leading-20 lg:text-8xl text-center lg:w-1/2">Public Health Campaigns in Kenya: A Musical and Broadcast Legacy</p>
                            <p className="helvetica-light lg:w-1/2 text-center lg:text-lg italic">These theme songs, radio dramas, and radio spots were produced to support public health communication across Kenya, working in partnership with national government ministries, UN agencies, international NGOs, and community-based organizations. Each campaign reached millions of Kenyans through radio, television, public events, and community mobilization.</p>
                        </div>
                        <SocialCampaigns data={socialData} />
                    </div>
                </section>
                <Footer />
            </div>
        </PageTransition>
    )
}

export default ImpactPage




const SocialCampaigns = ({ data }) => {
    return (
        <div className="grid gap-8 lg:grid-cols-2 px-2 lg:px-0">
            {data.map((campaign, index) => (
                <div
                    key={index}
                    className="shadow-md rounded-xl p-6 border border-[#1f1f1f]">
                    <h3 className="text-[60px] leading-12 uppercase text-[#9EFF50] tracking-wide flex">
                        <span>{index}. </span>
                        {campaign.title}
                    </h3>
                    <p className="my-4 uppercase text-4xl leading-7 tracking tracking-wide">{campaign.description}</p>
                    {campaign.award && (
                        <div className="mb-4 helvetica-light">
                            {campaign.award}
                        </div>
                    )}
                    <h4 className="mb-2 uppercase helvetica-regular underline text-[#727272]">
                        Partner Organizations
                    </h4>

                    <ul className="list-disc list-inside space-y-2">
                        {campaign.orgs.map((org, i) => (
                            <p key={i} className="helvetica-light flex items-start lg:text-lg">
                                <span>
                                    <LuArrowBigRight className='mt-1 lg:text-2xl' />
                                </span>
                                {org}
                            </p>
                        ))}
                    </ul>
                </div>
            ))}
        </div >
    )
};


