import { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ImageComponent = ({ image, imageClass, skeletonClass, }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div>
            {isLoading && <Skeleton baseColor="#1a1a1a" highlightColor="#7b7b7b" className={skeletonClass} />}
            <img src={image}
                alt=""
                className={`${isLoading ? 'hidden' : ''} ${imageClass}`}
                onLoad={handleImageLoad}
            />
        </div>
    )
}