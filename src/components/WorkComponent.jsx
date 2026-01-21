import { Link } from "react-router-dom"
import { BiRightArrowAlt } from "react-icons/bi"

import Image1 from "../assets/images/shows/mama_duka.jpg"
import Image2 from "../assets/images/shows/Limo on the run.png"
import Image3 from "../assets/images/shows/Reckless.jpeg"
import Image4 from "../assets/images/shows/Salem.jpg"
import Image5 from "../assets/images/shows/tuki.jpg"


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
                />
            ))}
        </div>
    )
}

export default WorkComponent




export const WorkCard = ({ poster, title, link_to, work }) => {
    return (
        <div>
            <Link to={link_to}>
                <div className="flex justify-between items-center border-t border-b border-black  hover:border-[#9EFF50] group hover:text-[#9EFF50]">
                    <div className="flex items-start">
                        <img src={poster} alt="" className="w-28 h-22 object-cover border border-[#1A1A1A]" />
                        {/* <FlipLink flipClass="uppercase lg:text-9xl">{title}</FlipLink> */}
                        <p className="uppercase lg:text-9xl leading-20 pl-8 pr-3">{title}</p>
                        <div>
                            {work.map((item, index) => (
                                <p key={index} className="helvetica-regular uppercase text-[#9EFF50] group-hover:text-white leading-none">{item}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="text-9xl">
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
        poster: Image2,
        title: "Limo on the run",
        link_to: "/",
        work: [
            "Compositing",
            "Color Grading"
        ]
    },
    {
        poster: Image1,
        title: "Mama Duka Tv Show",
        link_to: "/",
        work: [
            "Visual Production & ",
            "Color Grading"
        ]
    },
    {
        poster: Image3,
        title: "Reckless TV Show",
        link_to: "/",
        work: [
            "Final Mix",
            "Composition"
        ]
    },
    {
        poster: Image4,
        title: "Salem TV Show",
        link_to: "/",
        work: [
            "Compositing",
            "Color Grading"
        ]
    },
    {
        poster: Image5,
        title: "Tuki TV Show",
        link_to: "/",
        work: [
            "Color Grading"
        ]
    },

]