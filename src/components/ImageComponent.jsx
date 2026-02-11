import { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from "framer-motion"

export const ImageComponent = ({ image, imageClass, skeletonClass, }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <motion.div>
            {isLoading && <Skeleton baseColor="#1a1a1a" highlightColor="#7b7b7b" className={skeletonClass} />}
            <motion.img src={image}
                alt=""
                className={`${isLoading ? 'hidden' : ''} ${imageClass}`}
                onLoad={handleImageLoad}
            />
        </motion.div>
    )
}


export const VideoComponent = ({ video_src, videoClass, skeletonClass, }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div>
            {isLoading && <Skeleton baseColor="#1a1a1a" highlightColor="#7b7b7b" className={skeletonClass} />}
            <video
                autoPlay
                loop
                muted
                className={`${isLoading ? 'hidden' : ''} ${videoClass}`}
                onLoad={handleImageLoad}
            >
                <source src={video_src} type="video/mp4" />
            </video>
        </div>
    )
}