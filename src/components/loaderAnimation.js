import gsap from "gsap";

export const progressAnimation = (progressRef, progressNumberRef) => {
    const tl = gsap.timeline();

    tl.to(progressRef.current, {
        scaleX: 1,
        duration: 10,
        ease: 'power3.inOut'
    }).to(
        progressNumberRef.current,
        {
            textContent: "100%",
            duration: 10,
            roundProps: "textContent",
        },
        "<"
    )


    return tl
}