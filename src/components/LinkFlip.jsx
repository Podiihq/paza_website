import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, flipClass }) => {
    return (
        <>
            <motion.div
                initial="initial"
                whileHover="hovered"
                className="relative block overflow-hidden whitespace-nowrap"
                style={{
                    lineHeight: 0.95,
                }}
            >
                <div>
                    {children.split("").map((letters, index) => (
                        <motion.p
                            variants={{
                                initial: {
                                    y: 0,
                                },
                                hovered: {
                                    y: "-100%",
                                },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * index,
                            }}
                            className={`inline-block ${flipClass}`}
                            key={index}
                        >
                            {letters}
                        </motion.p>
                    ))}
                </div>
                <div className="absolute inset-0">
                    {children.split("").map((letters, index) => (
                        <motion.p
                            variants={{
                                initial: {
                                    y: "100%",
                                },
                                hovered: {
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * index,
                            }}
                            className={`inline-block ${flipClass}`}
                            key={index}
                        >
                            {letters}
                        </motion.p>
                    ))}
                </div>
            </motion.div>
        </>

    );
};