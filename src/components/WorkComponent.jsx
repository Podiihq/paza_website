import { Link } from "react-router-dom"
import { BiRightArrowAlt } from "react-icons/bi"

import Image1 from "../assets/images/shows/mama_duka.jpg"
import Image2 from "../assets/images/shows/Limo on the run.png"
import Image3 from "../assets/images/shows/Reckless.jpeg"
import Image4 from "../assets/images/shows/Salem.jpg"
import Image5 from "../assets/images/shows/tuki.jpg"
import Image6 from "../assets/images/shows/auntie-boss.jpg"
import { LuArrowBigRight } from "react-icons/lu"


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
    return (
        <div>
            <Link to={link_to}>
                <div className="flex justify-between items-center border-t border-b border-black  hover:border-[#9EFF50] group hover:text-[#9EFF50]">
                    <div className="flex items-start">
                        <img src={poster} alt="" className="w-28 h-22 object-cover border border-[#1A1A1A]" />
                        <p className="uppercase lg:text-9xl leading-20 pl-8 pr-3">{title}</p>
                        <div>
                            <p className="uppercase text-3xl leading-none text-[#939393] mb-1 group-hover:text-white">{platform}</p>
                            {work.map((item, index) => (
                                <p key={index} className="helvetica-regular uppercase text-[#939393] flex
                                 group-hover:text-white leading-none text-sm">
                                    <LuArrowBigRight />
                                    {item}
                                </p>
                            ))}

                        </div>
                    </div>
                    <div>
                        <div className="text-9xl group-hover:-rotate-45 duration-200">
                            <BiRightArrowAlt />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}


// &nbsp;

export const workData = [
    {
        poster: Image6,
        title: "Aunty Boss TV Show",
        link_to: "/",
        work: [
            "Compositing",
            "Color Grading"
        ],
        platform: "MMP and Showmax"
    },
    {
        poster: Image2,
        title: "Limo on the run",
        link_to: "/",
        work: [
            "Compositing",
            "Color Grading"
        ],
        platform: "Documentary"
    },
    {
        poster: Image1,
        title: "Mama Duka Tv Show",
        link_to: "/",
        work: [
            "Visual Production & ",
            "Color Grading"
        ],
        platform: "AMVCA Awards 2014"
    },
    {
        poster: Image3,
        title: "Reckless TV Show",
        link_to: "/",
        work: [
            "Final Mix",
            "Composition"
        ],
        platform: "MMP and Showmax"
    },
    {
        poster: Image4,
        title: "Salem TV Show",
        link_to: "/",
        work: [
            "Compositing",
            "Color Grading"
        ],
        platform: "MMP and Showmax"
    },
    {
        poster: Image5,
        title: "Tuki TV Show",
        link_to: "/",
        work: [
            "Color Grading"
        ],
        platform: "K24, NTV, YouTube & Community Radios"
    },

]