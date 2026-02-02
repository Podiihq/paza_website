import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { GalleryItem } from './GalleryItem';
import NavBar from '../../components/NavBar';
import { artistData } from '../../assets/data/artist_data';
import LocomotiveScroll from 'locomotive-scroll';
import PageTransition from '../../components/page_transition/PageTransition';

const CELL_WIDTH = 320; // 300 + 20 gap
const CELL_HEIGHT = 420; // 400 + 20 gap
const BUFFER = 2; // Extra rows/cols to render outside viewport

export function ArtistGallary() {
    const containerRef = useRef(null);
    const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const locomotive = new LocomotiveScroll()
        return () => {
            locomotive.destroy()
        }
    }, [])

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
        const updateSize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    // Handle Wheel Scroll
    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            const currentX = x.get();
            const currentY = y.get();

            // Adjust sensitivity as needed
            x.set(currentX - e.deltaX);
            y.set(currentY - e.deltaY);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, [x, y]);

    // Calculate visible grid range
    const [visibleRange, setVisibleRange] = useState({ minCol: 0, maxCol: 0, minRow: 0, maxRow: 0 });

    useEffect(() => {
        const updateVisibleRange = () => {
            if (!viewportSize.width) return;

            const currentX = x.get();
            const currentY = y.get();

            // Determine the grid coordinates visible in the viewport
            // The container moves by (x, y). 
            // If x = -1000, content is shifted left. We see data at 1000.

            const minCol = Math.floor((-currentX) / CELL_WIDTH) - BUFFER;
            const maxCol = Math.floor((-currentX + viewportSize.width) / CELL_WIDTH) + BUFFER;

            const minRow = Math.floor((-currentY) / CELL_HEIGHT) - BUFFER;
            const maxRow = Math.floor((-currentY + viewportSize.height) / CELL_HEIGHT) + BUFFER;

            setVisibleRange(prev => {
                if (
                    prev.minCol === minCol &&
                    prev.maxCol === maxCol &&
                    prev.minRow === minRow &&
                    prev.maxRow === maxRow
                ) return prev;
                return { minCol, maxCol, minRow, maxRow };
            });
        }

        const unsubscribeX = x.on("change", updateVisibleRange);
        const unsubscribeY = y.on("change", updateVisibleRange);

        // Initial update
        updateVisibleRange();

        return () => {
            unsubscribeX();
            unsubscribeY();
        };
    }, [viewportSize.width, viewportSize.height, x, y]);

    // Generate items for the current visible range
    const items = [];
    for (let row = visibleRange.minRow; row <= visibleRange.maxRow; row++) {
        for (let col = visibleRange.minCol; col <= visibleRange.maxCol; col++) {
            const hash = Math.abs((row * 73856093) ^ (col * 19349663));
            const index = hash % artistData.length;
            const data = artistData[index];

            items.push({
                row,
                col,
                x: col * CELL_WIDTH,
                y: row * CELL_HEIGHT,
                url: data.poster,
                id: `${row}-${col}`,
                title: data.artist_name
            });
        }
    }




    return (
        <PageTransition>
            <div
                ref={containerRef}
                className="relative w-screen h-screen overflow-hidden bg-[#0a0a0a] cursor-grab active:cursor-grabbing text-white"
            >
                <NavBar />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />
                <motion.div
                    className="absolute top-0 left-0"
                    drag
                    dragMomentum={true}
                    style={{ x, y }}
                >
                    {items.map((item) => (
                        <GalleryItem
                            key={item.id}
                            index={item.id}
                            url={item.url}
                            title={item.title}
                            style={{
                                position: 'absolute',
                                x: item.x,
                                y: item.y,
                                left: 0,
                                top: 0
                            }}
                        />
                    ))}
                </motion.div>

                <div className="absolute bottom-8 right-8 z-50 pointer-events-none flex flex-col items-end gap-2">
                    <span className="text-white/20 font-mono text-xs">LOC: {Math.round(x.get())}, {Math.round(y.get())}</span>
                    <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-white/50 w-1/3" />
                    </div>
                </div>
            </div>
        </PageTransition>

    );
}
