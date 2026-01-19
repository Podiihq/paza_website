import { FaArrowRight } from "react-icons/fa";
import { FlipLink } from "./LinkFlip";
import { Link } from "react-router-dom";

export const Button = ({ btn_link }) => {
    return (
        <Link to={btn_link}>
            <div className="flex items-center gap-2 pl-3 pr-1 py-1 bg-[#9EFF50] text-black">
                <div className="flex gap-1">
                    <FlipLink flipClass="text-md helvetica-regular">Get&nbsp;Quotation</FlipLink>
                </div>
                <div className="text-[#9EFF50] bg-black p-3">
                    <FaArrowRight />
                </div>
            </div>
        </Link>
    )
}



export const Button2 = () => {
    return (
        <div className={`px-16 py-1.5 text-[40px] leading-10 text-center duration-300
                                            ${isInSection ? "bg-[#D8FF01] text-black hover:text-[#D8FF01] hover:bg-[#000000] border hover:border-[#D8FF01]" : "bg-[#000000] text-[#D8FF01] hover:bg-[#D8FF01] hover:text-[#000000] border hover:border-[#000000]"}`}>
            <FlipLink>GET&nbsp;QUOTATION</FlipLink>
        </div>
    )
}
