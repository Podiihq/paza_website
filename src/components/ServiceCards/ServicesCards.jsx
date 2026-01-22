'use client';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Card from './Card';
import { servicesData } from '../../assets/data/servies_data';

export default function ServicesCards() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <main ref={container} className="main">
            {
                servicesData.map((project, i) => {
                    const targetScale = 1 - ((servicesData.length - i) * 0.05);
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