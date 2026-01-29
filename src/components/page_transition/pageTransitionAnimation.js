export const expand = {
    initial: {
        bottom: 0
    },
    enter: (i) => ({
        bottom: "100vh",
        transition: {
            duration: 0.5,
            delay: 0.1 * i,
            ease: [0.215, 0.61, 0.355, 1],
        },
        transitionEnd: { height: "0", bottom: "0" }
    }),
    exit: (i) => ({
        height: "100vh",
        transition: {
            duration: 0.5,
            delay: 0.05 * i,
            ease: [0.215, 0.61, 0.355, 1]
        }
    })
}


export const opacity = {
    initial: {
        opacity: 0.5
    },
    enter: {
        opacity: 0
    },
    exit: {
        opacity: 0.5,

    }
}

