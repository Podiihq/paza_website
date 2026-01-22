import { Link } from "react-router-dom"
import { BiRightArrowAlt } from "react-icons/bi"
import { LuArrowBigRight } from "react-icons/lu"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { workData } from "../assets/data/WorkData"


const WorkComponent = () => {
    return (
        <div>
            {workData.map((card, index) => (
                <WorkCard
                    key={index}
                    poster={card.poster}
                    title={card.title}
                    link_to={card.link_to}
                    work={card.work}
                    platform={card.platform}
                />
            ))}
        </div>
    )
}

export default WorkComponent


export const WorkCard = ({ poster, title, link_to, work, platform }) => {
    const [isHovering, setIsHovering] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        setMousePos({
            x: e.clientX,
            y: e.clientY
        })
    }

    return (
        <>
            <AnimatePresence>
                {isHovering && (
                    <motion.img
                        src={poster}
                        alt=""
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{
                            left: mousePos.x + -200,
                            top: mousePos.y + 50
                        }}
                        className="fixed w-100 h-70 object-cover pointer-events-none z-50 shadow-xl ring ring-[#1a1a1a]"
                    />
                )}
            </AnimatePresence>

            <Link to={link_to}>
                <div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onMouseMove={handleMouseMove}
                    className="py-4 lg:py-0 flex justify-between items-center border-t border-b border-[#1a1a1a] lg:border-black hover:border-[#9EFF50] group hover:text-[#9EFF50]"
                >
                    <div className="flex items-start gap-4">
                        <img
                            src={poster}
                            alt=""
                            className="w-20 h-18 lg:w-28 lg:h-22 object-cover border border-[#1A1A1A]"
                        />
                        <div className="flex flex-col lg:flex-row">
                            <p className="uppercase text-6xl leading-11 tracking-wide lg:text-9xl lg:leading-20 pr-3">
                                {title}
                            </p>
                            <div>
                                <p className="py-2 lg:py-0 uppercase tracking-wide text-3xl leading-6 text-[#939393] group-hover:text-white lg:mb-2">
                                    {platform}
                                </p>
                                {work.map((item, index) => (
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
                </div>
            </Link>
        </>
    )
}
