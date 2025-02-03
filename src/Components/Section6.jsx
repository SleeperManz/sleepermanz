import Lottie from "lottie-react";
import { motion } from "motion/react";
import planetFloting from "../LottieData/planet-floating.json"

function Section6({ sectionIndex, index }) {
    return (
        <section
            id="faq"
            style={{ backgroundImage: 'url(/image/Section6/FAQ-section.png)' }}
            className="relative flex flex-col items-center h-screen gap-16 bg-white z-[4]"
        >
            <div className="absolute top-[46%] left-[1rem]">
                <img
                    src="/image/Section6/FAQ.svg"
                    alt="FAQ"
                />
            </div>
            <div className="text-5xl grith mt-[5rem]">
                <h1>
                    FAQ
                </h1>
            </div>
            <motion.div
                className="flex flex-col text-stroke-thin text-stroke-white font-medium text-2xl gap-8 w-[750px] h-full"
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
                <p>
                    Q : What services do you offer? <br />
                    A : We provide game design, concept art, and development for
                    indie teams and studios.
                </p>
                <p>
                    Q : Do you offer custom designs? <br />
                    A : Absolutely! All our designs are customized to match your
                    game’s theme, art style, and unique requirements
                </p>
                <p>
                    Q : Do you offer bundle deals for multiple assets? <br />
                    A : Yes, we provide discounted rates for bulk asset orders or
                    complete game asset bundles. Contact us for a custom quote.
                </p>
                <p>
                    Q : Do you assist with game concept development? <br />
                    A : Yes, we can help with game concept art and provide initial
                    sketches or mockups to refine your vision before starting
                    full asset production.
                </p>
            </motion.div>
            <motion.div
                className="absolute w-[3000px] h-full top-[20%] left-[-30%] -z-10"
                animate={{
                    y: [0, -20, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
            >
                <img
                    src="/image/Section6/section-6-planet-8.png"
                    alt="planet"
                />
            </motion.div>
        </section>
    );
}

export default Section6;