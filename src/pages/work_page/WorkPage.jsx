import { useEffect } from "react"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import PageTransition from "../../components/page_transition/PageTransition"
import WorkGallery from "./WorkGallery"
import ArtistCardCarousel from "../../components/ArtistCard"
import CompanyCardCarousel from "../../components/CompanyCard"

const WorkPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <PageTransition>
            <div className="bg-[#000000] text-[#EFEFEB]">
                <section>
                    <NavBar />
                </section>
                <section className="lg:max-w-screen-2xl mx-auto px-4 pb-32">
                    <p className="mb-20 lg:mb-0 text-9xl leading-25 pt-20 lg:pt-5 lg:text-[15rem] lg:leading-120 uppercase text-[#9EFF50] text-center">Selected Work</p>
                    <WorkGallery />
                </section>
                <section>
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
                <section>
                    <Footer />
                </section>
            </div>
        </PageTransition>
    )
}

export default WorkPage