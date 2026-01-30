import { useEffect } from "react"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import PageTransition from "../../components/page_transition/PageTransition"
import WorkGallery from "./WorkGallery"

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
                    <p className="text-[10rem] pt-10 lg:pt-5 lg:text-[20rem] lg:leading-120 uppercase text-[#9EFF50]">Our Work</p>
                    <WorkGallery />
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        </PageTransition>
    )
}

export default WorkPage