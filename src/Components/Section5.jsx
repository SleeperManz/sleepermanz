import Lottie from "lottie-react";
import { motion, useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";
import mascotFloating from "../LottieData/mascot-floating-right.json";
import Rocket from "../LottieData/rocket.json";

function Section5({ sectionIndex, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    const images = [
        "/image/Section5/software/0.png",
        "/image/Section5/software/1.png",
        "/image/Section5/software/2.png",
        "/image/Section5/software/3.png",
        "/image/Section5/software/4.png",
        "/image/Section5/software/5.png",
        "/image/Section5/software/6.png",
    ]

    return (
        <section
            id="software"
            ref={ref}
            style={{ backgroundImage: "url(/image/Section5/Software-section.png)" }}
            className="relative flex flex-col h-screen bg-white bg-cover bg-center z-[5]"
        >
            <img
                className="absolute top-[10%] ml-4"
                src="/image/Section5/Software Mastering.svg"
                alt="Software Mastering"
            />
            <div className="relative">
                <div className="absolute w-[600px] top-[20rem] left-0">
                    <Lottie
                        animationData={mascotFloating}
                    />
                </div>
                {/* <img
                    className="absolute top-[25rem] left-[5rem] min-w-[350px]"
                    src="/image/Section5/Mascot.png"
                    alt="mascot"
                /> */}
            </div>
            <div className="flex flex-row justify-center items-center text-5xl grith mt-8">
                <h1>
                    Software Mastering
                </h1>
            </div>
            <motion.div
                animate={
                    sectionIndex === index
                        ? { scale: 1, translateY: 0 }
                        : sectionIndex > index
                            ? { scale: 0.8, opacity: 0, translateY: -200 }
                            : sectionIndex < index
                                ? { scale: 1, translateY: 0 }
                                : {}
                }
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <motion.div
                    className="flex flex-row justify-center items-center gap-8 mt-[10rem] mx-[15rem]"
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: {
                            opacity: 1, y: 0,
                            transition: {
                                staggerChildren: 0.25,
                            },
                        },
                    }}
                    initial="hidden"
                    animate={mainControls}
                >
                    {images.map((src, index) => (
                        <motion.img
                            key={index}
                            className={`w-36`}
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            src={src}
                            alt={`image-${index}`}
                        />
                    ))}
                </motion.div>
            </motion.div>
            <div className="relative">
                <div className="absolute top-[-10rem] right-[-10rem] -rotate-[30deg]">
                    <Lottie
                        animationData={Rocket}
                    />
                </div>
                {/* <img
                    className="absolute top-0 right-0"
                    src="/image/Section5/img-rocket.png"
                    alt="rocket"
                /> */}
            </div>
        </section>
    );
}

export default Section5;