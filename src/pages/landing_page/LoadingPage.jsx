import gsap from 'gsap';
import React, { useState } from 'react'

const LoadingPage = () => {
    const [loaderFinished, setLoaderFinished] = useState(false);
    const [timeline, setTimeline] = useState(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => setLoaderFinished(true)
            });

            setTimeline(tl);
        });

        return () => context.revert();

    }, [])

    return (
        <div>
            {loaderFinished ? <HomePage /> : <LoaderPage timeline={timeline} />}
        </div>
    )
}

export default LoadingPage