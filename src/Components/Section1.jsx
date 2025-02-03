import { motion } from "motion/react";
import Lottie from "lottie-react";
import AstroPlanetFloating from "../LottieData/data.json"
import satelitFloating from "../LottieData/satelit-floating.json"

function Section1({ sectionIndex, index, isLoading }) {
    return (
        <section
            key={index}
            id="about"
            style={{ backgroundImage: 'url(/image/Section1/About-section.png)' }}
            className="sticky top-0 grid grid-cols-9 grid-rows-9 h-screen bg-cover bg-center -z-[1]"
        >
            {/* Loading Screen */}
            <div
                className={`fixed w-full h-screen bg-[#1A1A1A] top-0 left-0 z-20 transition-opacity duration-1000 ${isLoading ? "opacity-100" : "opacity-0"}`}
            />

            {/* Side Image */}
            <div className="flex col-start-1 col-end-1 row-start-4 row-end-7">
                <img
                    className="my-auto ml-4 object-cover"
                    src="/image/Section1/About.svg"
                    alt="About"
                />
            </div>

            <div className="col-start-2 col-end-2 row-start-2 row-end-2">
                <div className="absolute -top-8 -left-8 w-[40rem] -z-10">
                    <Lottie
                        animationData={satelitFloating}
                    />
                </div>
            </div>

            {/* Main Content */}
            <motion.div
                className="col-start-2 col-end-5 row-start-3 row-end-6"
                initial={{ scale: 1, translateY: 0 }}
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
                <div className="flex flex-col gap-8 ml-[6rem] roboto-font">
                    <img
                        className="w-[556px] h-full object-cover"
                        src="/image/Section1/Headline1.png"
                        alt="Headline"
                    />
                    <p className="text-2xl w-[750px] text-justify">
                        Sleeper Manz is an indie game studio passionate about creating unique games and immersive experiences. Alongside developing our own projects, we offer services like 2D/3D asset creation, character design, and animations to help bring your game ideas to life. <br />
                        <br />
                        Let’s create something amazing together!
                    </p>
                </div>
            </motion.div>

            {/* Left Content */}
            <motion.div
                className={`col-start-6 col-end-10 row-start-2 row-end-9 absolute transition-all duration-1000 ${isLoading ? "z-30 -translate-x-[64rem] -translate-y-[20rem] scale-150 duration-500 delay-0" : "-z-10 translate-x-0 scale-100 duration-500 delay-500"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5 }}
            >
                <div className="absolute w-[1214px] h-auto">
                    <Lottie
                        animationData={AstroPlanetFloating}
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default Section1;