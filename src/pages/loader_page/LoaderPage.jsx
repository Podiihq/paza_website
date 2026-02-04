import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import logo1 from "../../assets/logos/studio_logo/paza.png"
import logo2 from "../../assets/logos/studio_logo/abh.png"

const LoaderPage = ({ onComplete, duration = 10 }) => {
    const progress = useMotionValue(0);
    const progressScale = useTransform(progress, (value) => value / 100);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(progress, 100, {
            duration,
            ease: "easeInOut",
            onUpdate: (latest) => {
                setDisplayValue(Math.round(latest));
            },
            onComplete: () => {
                const completeDelay = 200;
                window.setTimeout(() => {
                    onComplete?.();
                }, completeDelay);
            },
        });

        return () => controls.stop();
    }, [duration, onComplete, progress]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="w-full max-w-lg px-6">
                <div className="mb-4 flex items-end justify-between">
                    <p className="text-5xl uppercase text-[#9EFF50] animate-pulse">
                        Loading...
                    </p>
                    <p className="text-5xl uppercase text-white/60">
                        {displayValue}
                        <span className="text-5xl text-white/60">%</span>
                    </p>
                </div>
                <div className="h-2 w-full overflow-hidden bg-white/10">
                    <motion.div
                        className="h-full origin-left bg-[#9EFF50]"
                        style={{ scaleX: progressScale }}
                    />
                </div>
                <div className="">
                    <div className='flex items-center justify-center gap-4 pt-10'>
                        <img src={logo1} alt="" className='w-12' />
                        <img src={logo2} alt="" className='h-12 border border-[#1a1a1a]' />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LoaderPage;
