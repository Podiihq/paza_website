import { motion } from "motion/react"
import { expand, opacity } from "./pageTransitionAnimation"

const PageTransition = ({ children }) => {
    const anim = (variants, custom = null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    const nbOfColumns = 5
    return (
        <div>
            <div>
                <motion.div {...anim(opacity)} className='transition-background fixed w-full h-screen bg-[#1a1a1a] z-50 pointer-events-none top-0 left-0' />
                <div className='z-50 top-0 left-0 flex h-screen w-screen fixed pointer-events-none'>
                    {
                        [...Array(nbOfColumns)].map((_, i) => {
                            return (
                                <motion.div key={i} {...anim(expand, nbOfColumns - i)} className='relative h-full w-full bg-[#1a1a1a]' />
                            )
                        })
                    }
                </div>
                {children}
            </div>
        </div>
    )
}

export default PageTransition