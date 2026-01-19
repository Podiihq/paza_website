import { useEffect, useRef } from "react";
import NavBar from "../../components/NavBar";
import LocomotiveScroll from 'locomotive-scroll';
import { useScroll } from "motion/react";
import HeroVideo from "../../assets/videos/hero_reel.mp4";

const LandingPage = () => {
    const targetSectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetSectionRef,
        offset: ["center center", "end end"],
    });

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
        <div className="bg-[#000000] text-white">
            <NavBar targetSectionRef={targetSectionRef} />
            <section className='h-screen absolute top-0 w-full'>
                <video autoPlay loop muted className='absolute top-0 w-full h-full object-cover'>
                    <source src={HeroVideo} type="video/mp4" />
                </video>
                {/* <img src={HeroImage} alt="" className='w-full object-cover h-full' /> */}
                <div className='absolute w-screen h-100 bg-linear-to-t via-[#000000]/70 from-[#000000] to-transparent bottom-0 z-10' />
            </section>
        </div>
    )
}

export default LandingPage



