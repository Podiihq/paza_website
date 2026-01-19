'use client';
import { services } from './servies_data';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Card from './Card';

export default function ServicesCards() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <main ref={container} className="main">
            {
                services.map((project, i) => {
                    const targetScale = 1 - ((services.length - i) * 0.05);
                    return <Card
                        key={`p_${i}`}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * .25, 1]}
                        targetScale={targetScale} />
                })
            }
        </main>
    )
}