import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";
import { LuArrowBigRight } from "react-icons/lu";
import { workData } from "../../assets/data/WorkData";
import { IoMdClose } from "react-icons/io";
import LocomotiveScroll from "locomotive-scroll";
import { ImageComponent } from "../../components/ImageComponent";

const WorkDetailOverlay = ({ selectedProject, onClose }) => {
    if (!selectedProject) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    layoutId={`card-container-${selectedProject.title}`}
                    className="w-full h-full overflow-hidden rounded shadow-2xl relative bg-black text-white"
                    onClick={(e) => e.stopPropagation()}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {/* Close Button */}
                    <motion.button
                        className="cursor-pointer absolute group top-5 right-5 lg:top-10 lg:right-10 z-20 py-2 px-2
              bg-black hover:bg-[#9EFF50] hover:text-black border border-white hover:border-black flex items-center"
                        onClick={onClose}
                    >
                        <IoMdClose className="text-4xl lg:text-5xl group-hover:rotate-90 duration-300" />
                        <p className="text-4xl lg:text-5xl pr-3">CLOSE</p>
                    </motion.button>

                    {/* Scroll Content */}
                    <div className="h-full overflow-y-auto no-scrollbar">
                        {/* Hero */}
                        <motion.div className="relative w-full h-[40vh] md:h-[60vh]">
                            <motion.img
                                layoutId={`card-image-${selectedProject.title}`}
                                src={selectedProject.poster}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent" />

                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                                <motion.h2
                                    layoutId={`card-title-${selectedProject.title}`}
                                    className="text-[80px] leading-15 lg:text-[200px] lg:leading-40 uppercase text-[#9EFF50] wrap-break-word tracking-wide"
                                >
                                    {selectedProject.title}
                                </motion.h2>
                                <p className="text-4xl md:text-5xl uppercase">
                                    {selectedProject.platform}
                                </p>
                            </div>
                        </motion.div>

                        {/* Body */}
                        <div className="p-6 md:p-12 grid md:grid-cols-3 gap-10">
                            <div className="md:border-r border-gray-200 pr-8">
                                <h3 className="uppercase mb-6 text-4xl tracking-wide">Services</h3>
                                <ul className="space-y-3">
                                    {selectedProject.work.map((item, i) => (
                                        <li key={i} className="flex gap-2 uppercase helvetica-light items-center">
                                            <LuArrowBigRight className="text-[#9EFF50] text-xl" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="md:col-span-2">
                                <h3 className="text-4xl uppercase mb-6 tracking-wide">About Project</h3>
                                <p className="text-xl helvetica-light">
                                    Placeholder description for{" "}
                                    <span className="uppercase tracking-wide helvetica-regular">
                                        {selectedProject.title}
                                    </span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const WorkGalleryBase = ({ limit }) => {
    const [selectedId, setSelectedId] = useState(null);

    const projects = limit ? workData.slice(0, limit) : workData;
    const selectedProject = workData.find(p => p.title === selectedId);

    // Lock scroll
    useEffect(() => {
        document.body.style.overflow = selectedId ? "hidden" : "unset";
    }, [selectedId]);

    // Locomotive
    useEffect(() => {
        if (selectedId) return;
        const locomotive = new LocomotiveScroll();
        return () => locomotive.destroy();
    }, [selectedId]);

    return (
        <>
            <div>
                {projects.map((project, index) => (
                    <WorkCard
                        key={index}
                        project={project}
                        setSelectedId={setSelectedId}
                        isSelected={selectedId === project.title}
                    />
                ))}
            </div>

            <WorkDetailOverlay
                selectedProject={selectedProject}
                onClose={() => setSelectedId(null)}
            />
        </>
    );
};




export const WorkCard = ({ project, setSelectedId, isSelected }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!isSelected) {
            setIsHovering(false);
        }
    }, [isSelected]);

    const handleMouseMove = (e) => {
        setMousePos({
            x: e.clientX,
            y: e.clientY
        });
    };

    return (
        <>
            <AnimatePresence>
                {isHovering && (
                    <motion.img
                        layoutId={`card-image-${project.title}`}
                        src={project.poster}
                        alt=""
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{
                            left: mousePos.x + -200,
                            top: mousePos.y + 50
                        }}
                        className="fixed w-100 h-70 object-cover pointer-events-none z-50 shadow-xl ring ring-[#1a1a1a] hidden lg:block"
                    />
                )}
            </AnimatePresence>

            <motion.div
                layoutId={`card-container-${project.title}`}
                onClick={() => setSelectedId(project.title)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => !isSelected && setIsHovering(false)}
                onMouseMove={handleMouseMove}

                className="py-4 lg:py-4 flex justify-between items-center border-t border-b border-[#1a1a1a] lg:border-[#1a1a1a] hover:border-[#9EFF50] group hover:text-[#9EFF50] bg-transparent cursor-pointer relative"
            >
                <div className="flex items-start gap-4">
                    {/* Tiny thumbnail for layoutId continuity if header image is hidden on hover */}
                    <motion.img
                        layoutId={isHovering ? undefined : `card-image-${project.title}`}
                        src={project.poster}
                        alt=""
                        className="w-20 h-18 lg:w-28 lg:h-22 object-cover border border-[#1A1A1A] lg:opacity-100 opacity-100"
                    />
                    <div className="flex flex-col lg:flex-row">
                        <motion.h2
                            layoutId={`card-title-${project.title}`}
                            className="uppercase text-6xl leading-11 tracking-wide lg:text-9xl lg:leading-24 pr-3 font-medium"
                        >
                            {project.title}
                        </motion.h2>
                        <div>
                            <p className="py-2 lg:py-0 uppercase tracking-wide text-3xl leading-6 text-[#939393] group-hover:text-white lg:mb-2 font-medium">
                                {project.platform}
                            </p>
                            {project.work.map((item, index) => (
                                <p key={index} className="helvetica-regular py-0.5 uppercase text-[#939393] flex group-hover:text-white leading-none text-xs">
                                    <LuArrowBigRight />
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="text-5xl lg:text-9xl group-hover:-rotate-45 duration-200">
                    <BiRightArrowAlt />
                </div>
            </motion.div>
        </>
    );
};


const WorkGallery = () => {
    return <WorkGalleryBase />;
};

export const HomeWorkDisplay = () => {
    return <WorkGalleryBase limit={6} />;
};

export default WorkGallery;

