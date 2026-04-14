import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import logo1 from "../../assets/logos/studio_logo/paza.png"
import logo2 from "../../assets/logos/studio_logo/abh.png"
import HeroImage from "../../assets/images/other/hero-loading.png"
import Image1 from "../../assets/images/backs/02.png"
import Image2 from "../../assets/images/backs/03.png"
import Image3 from "../../assets/images/backs/04.png"
import Image4 from "../../assets/images/backs/05.png"
import Image5 from "../../assets/images/backs/01.png"
import PalaceholderImage from "../../assets/images/placeholder.png"

const LoaderPage = ({ onComplete }) => {
    const progress = useMotionValue(0);
    const progressScale = useTransform(progress, (value) => value / 100);
    const [displayValue, setDisplayValue] = useState(0);
    const [realProgress, setRealProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    // 👉 Add ALL assets you want to preload here
    const assets = [
        logo1,
        logo2,
        HeroImage, Image1, Image2, Image3, Image4, Image5, PalaceholderImage
    ];

    // 🔄 Asset Loader
    useEffect(() => {
        if (assets.length === 0) {
            setIsComplete(true);
            return;
        }

        let loaded = 0;

        const updateProgress = () => {
            loaded++;
            const percent = Math.round((loaded / assets.length) * 100);
            setRealProgress(percent);

            if (loaded === assets.length) {
                setIsComplete(true);
            }
        };

        assets.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = updateProgress;
            img.onerror = updateProgress; // avoid blocking
        });
    }, []);

    // 🎯 Smooth animation toward real progress
    useEffect(() => {
        const controls = animate(progress, realProgress, {
            duration: 0.5,
            ease: "easeOut",
            onUpdate: (latest) => {
                setDisplayValue(Math.round(latest));
            },
        });

        return () => controls.stop();
    }, [realProgress]);

    // ✅ Complete ONLY when fully loaded
    useEffect(() => {
        if (isComplete) {
            const delay = 300; // small polish delay
            setTimeout(() => {
                onComplete?.();
            }, delay);
        }
    }, [isComplete, onComplete]);

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
                        {displayValue}%
                    </p>
                </div>

                <div className="h-2 w-full overflow-hidden bg-white/10">
                    <motion.div
                        className="h-full origin-left bg-[#9EFF50]"
                        style={{ scaleX: progressScale }}
                    />
                </div>

                <div className="flex items-center justify-center gap-4 pt-10">
                    <img src={logo1} alt="" className="w-12" />
                    <img src={logo2} alt="" className="h-12 border border-[#1a1a1a]" />
                </div>
            </div>
        </motion.div>
    );
};

export default LoaderPage;