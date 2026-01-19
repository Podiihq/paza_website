// import { wrap } from "@motionone/utils";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "motion/react";
import { useRef } from "react";
import { wrap } from "@motionone/utils";

const ParallaxText = ({ children, baseVelocity = 100, textClass }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden flex flex-nowrap whitespace-nowrap">
            <motion.div className={`text-[20rem] leading-[14rem] lg:text-[40rem] lg:leading-[25rem] text-[#D8FF01] ${textClass}`} style={{ x }}>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}

export default ParallaxText;




export const ParalaxTextComponent = () => {


    return (
        <section className='text-white w-full'>
            <ParallaxText baseVelocity={-2}>Health social Financial Legal support Health social Financial Legal support</ParallaxText>
            <ParallaxText baseVelocity={2}>support Legal  Health social  Financial support Legal  Health social  Financial</ParallaxText>
            <ParallaxText baseVelocity={-2}>Health social Financial Legal support Health social Financial Legal support</ParallaxText>
            <ParallaxText baseVelocity={2}>support Legal  Health social  Financial support Legal  Health social  Financial</ParallaxText>
        </section>
    )
}