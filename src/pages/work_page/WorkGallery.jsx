import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";
import { LuArrowBigRight, LuX } from "react-icons/lu";
import { workData } from "../../assets/data/WorkData";
import { IoMdClose } from "react-icons/io";
import LocomotiveScroll from "locomotive-scroll";

const WorkGallery = () => {
    const [selectedId, setSelectedId] = useState(null);
    const selectedProject = workData.find((item) => item.title === selectedId);

    // Lock body scroll when detail view is open
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [selectedId]);

    useEffect(() => {
        let locomotive;
        if (!selectedId) {
            locomotive = new LocomotiveScroll();
        }
        return () => {
            if (locomotive) locomotive.destroy();
        };
    }, [selectedId]);

    return (
        <div className="font-sans">
            <div>
                {workData.map((project, index) => (
                    <WorkCard
                        key={index}
                        project={project}
                        setSelectedId={setSelectedId}
                        isSelected={selectedId === project.title}
                    />
                ))}
            </div>

            {/* Detail View Overlay */}
            <AnimatePresence>
                {selectedId && selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-10 bg-black/40 backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`card-container-${selectedProject.title}`}
                            className="w-full h-full overflow-hidden rounded shadow-2xl relative bg-black text-white"
                            onClick={(e) => e.stopPropagation()}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Close Button */}
                            <motion.button
                                className="absolute top-6 flex items-center right-6 z-20 py-2 px-4 bg-black hover:bg-[#9EFF50] hover:text-black backdrop-blur-md transition-colors border border-white hover:border-black"
                                onClick={() => setSelectedId(null)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.2 }}
                            >

                                <IoMdClose className="text-6xl" />
                                <p className="text-6xl pr-2">CLOSE</p>
                            </motion.button>

                            {/* Scrollable Container for Image + Content */}
                            <div className="h-full overflow-y-auto no-scrollbar">
                                {/* Hero Image - Shared Element */}
                                <motion.div
                                    className="relative w-full h-[40vh] md:h-[60vh] shrink-0"
                                >
                                    <motion.img
                                        layoutId={`card-image-${selectedProject.title}`}
                                        src={selectedProject.poster}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-t from-black to-transparent"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    />
                                    <motion.div
                                        className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <motion.h2
                                            layoutId={`card-title-${selectedProject.title}`}
                                            className="text-[80px] leading-18 lg:text-[200px] lg:leading-40 mb-2 uppercase text-[#9EFF50]"
                                        >
                                            {selectedProject.title}
                                        </motion.h2>
                                        <motion.p
                                            className="text-xl md:text-5xl uppercase"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            {selectedProject.platform}
                                        </motion.p>
                                    </motion.div>
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    className="p-6 md:p-12"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                        <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-8">
                                            <h3 className="uppercase  mb-6 helvetica-regular">Services</h3>
                                            <ul className="space-y-3">
                                                {selectedProject.work.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="text-lg font-medium flex items-center gap-2 uppercase helvetica-light"
                                                    >
                                                        <LuArrowBigRight className="text-[#9EFF50]" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-10">
                                                <h3 className="uppercase mb-4 helvetica-regular">Platform</h3>
                                                <p className="text-4xl font-serif uppercase tracking-wide">{selectedProject.platform}</p>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <h3 className="text-4xl font-bold uppercase mb-6 lg:text-5xl">About Project</h3>
                                            <p className="text-xl leading-relaxed font-light mb-8 helvetica-light">
                                                This is a placeholder description for <span className="font-semibold">{selectedProject.title}</span>.
                                                The project involved comprehensive post-production work including color grading
                                                and compositing to achieve a distinct visual style suitable for {selectedProject.platform}.
                                                This is a placeholder description for <span className="font-semibold">{selectedProject.title}</span>.
                                                The project involved comprehensive post-production work including color grading
                                                and compositing to achieve a distinct visual style suitable for {selectedProject.platform}.This is a placeholder description for <span className="font-semibold">{selectedProject.title}</span>.
                                                The project involved comprehensive post-production work including color grading
                                                and compositing to achieve a distinct visual style suitable for {selectedProject.platform}.This is a placeholder description for <span className="font-semibold">{selectedProject.title}</span>.
                                                The project involved comprehensive post-production work including color grading
                                                and compositing to achieve a distinct visual style suitable for {selectedProject.platform}.This is a placeholder description for <span className="font-semibold">{selectedProject.title}</span>.
                                                The project involved comprehensive post-production work including color grading
                                                and compositing to achieve a distinct visual style suitable for {selectedProject.platform}.This is a placeholder description for <span className="font-semibold">{selectedProject.title}</span>.
                                                The project involved comprehensive post-production work including color grading
                                                and compositing to achieve a distinct visual style suitable for {selectedProject.platform}.This is a placeholder description for <span className="font-semibold">{selectedProject.title}</span>.
                                                The project involved comprehensive post-production work including color grading
                                                and compositing to achieve a distinct visual style suitable for {selectedProject.platform}.This is a placeholder description for <span className="font-semibold">{selectedProject.title}</span>.
                                                The project involved comprehensive post-production work including color grading
                                                and compositing to achieve a distinct visual style suitable for {selectedProject.platform}.This is a placeholder description for <span className="font-semibold">{selectedProject.title}</span>.
                                                The project involved comprehensive post-production work including color grading
                                                and compositing to achieve a distinct visual style suitable for {selectedProject.platform}.This is a placeholder description for <span className="font-semibold">{selectedProject.title}</span>.
                                                The project involved comprehensive post-production work including color grading
                                                and compositing to achieve a distinct visual style suitable for {selectedProject.platform}.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const WorkCard = ({ project, setSelectedId, isSelected }) => {
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

                className="py-4 lg:py-0 flex justify-between items-center border-t border-b border-[#1a1a1a] lg:border-black hover:border-[#9EFF50] group hover:text-[#9EFF50] bg-transparent cursor-pointer relative"
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
                            className="uppercase text-6xl leading-11 tracking-wide lg:text-9xl lg:leading-20 pr-3 font-medium"
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

export default WorkGallery;
