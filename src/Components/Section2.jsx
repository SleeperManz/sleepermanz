import { motion } from "motion/react";
import { useState } from "react";

function Section2({ sectionIndex, index }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            url: "/image/Section2/services-image/asset index_service.mp4",
            title: "I Will Design High-Quality 2D Assets For Games and Animations",
            desc: "If you're looking for stunning 2D assets to bring your game to life, take a look at my gigs, because you've come to the right place! I will create custom 2D assets for your game.",
            point: [
                <span key="1">
                    <span className="font-bold">Custom 2D Asset Design</span> : Create unique design assets for your game to match your vision.
                </span>,
                <span key="2">
                    <span className="font-bold">Game Ready Asset</span> : Delivered in the files you need for easy integration. (PNG, JPG, SVG, PSD, AI)
                </span>,
                <span key="3">
                    <span className="font-bold">Animation</span> : If you need animation for your asset, just let me know, I will make it immediately and I will make it the way you need it.
                </span>,
            ],
            link: "https://www.fiverr.com/s/NN6xEXy",
        },
        {
            url: "/image/Section2/services-image/character_17.mp4",
            title: "I Will Make Custom 2D Characters for Games and Animations",
            desc: "Need a character design for your game? I might be the right choice for you. I will create a character from your idea and I will create a character that can make your game more alive.",
            point: [
                <span key="1">
                    <span className="font-bold">Custom Character</span> : Create characters according to your needs.
                </span>,
                <span key="2">
                    <span className="font-bold">Ready For Animation</span> : The characters are ready for you to animate. (Start from Standart)
                </span>,
                <span key="3">
                    <span className="font-bold">Different Viewpoint</span> : I am able to create characters from a variety of perspectives, depending on the requirements of the project.
                </span>,
            ],
            link: "https://www.fiverr.com/s/zWP0yZE",
        },
        {
            url: "/image/Section2/services-image/index.1.mp4",
            title: "I Will Make Professional Game & Web Icon Design | High-Quality Graphics (Icon Asset)",
            desc: "Looking for unique, high-quality icons for your game or website? I can create custom designs to fit your needs, with more detail and quality to perfectly match your user interface. Let's make your project stand out with icons that catch people's eyes! I'm here to help—let's make your idea real!",
            point: [
                <span key="1">
                    <span className="font-bold">Game Icon</span> - Skill icon, inventory, power-ups, UI Elements
                </span>,
                <span key="2">
                    <span className="font-bold">Web Icon</span> - Clean and modern icon for websites or apps
                </span>,
                <span key="3">
                    <span className="font-bold">Custom Design</span> - Tailored to match your game’s theme or brand identity
                </span>,
                <span key="4">
                    <span className="font-bold">High-Quality Files</span> - Delivered in PNG, and Vector files (SVG, AI).
                </span>
            ],
            link: "https://www.fiverr.com/s/vvP0oYW",
        }
    ]

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (index) => {
        setCurrentIndex(index);
    }

    return (
        <section
            id="services"
            style={{ backgroundImage: 'url(/image/Section2/Service-section.png)', }}
            className="sticky top-0 flex flex-col h-screen bg-cover bg-center z-0"
        >
            <div className="flex flex-row justify-center items-center my-8">
                <h1 className="text-5xl grith text-white">
                    Services
                </h1>
            </div>
            <div className="absolute top-[40%] ml-4">
                <img
                    src="/image/Section2/Service.svg"
                    alt="Service"
                />
            </div>
            <div className="relative flex flex-row h-full">
                <motion.div
                    className="relative flex flex-row justify-start gap-12 my-auto py-4"
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
                    <div className="flex w-fit h-fit rounded-lg bg-transparent border-2 justify-center items-center p-4 ml-[14rem] my-auto">
                        <video
                            src={images[currentIndex].url}
                            className="w-[890px] h-[486px] object-cover object-center"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                        >
                            Your browser does not support the video tag.
                        </video>
                        {/* <img
                            className="w-[890px] h-[520px] rounded-lg object-cover"
                            src={images[currentIndex].url}
                            alt={images[currentIndex].title}
                        /> */}
                    </div>
                    <div className="flex flex-col w-[600px] h-full gap-8 py-4 mt-[1rem]">
                        <h1 className="text-white text-5xl grith">
                            {images[currentIndex].title}
                        </h1>
                        <div className="text-white text-lg font-medium">
                            <p>{images[currentIndex].desc}</p>

                            <ul className="flex flex-col gap-4 ml-6 list-disc">
                                <br />
                                <span className="font-bold">What I Offer : </span>
                                {images[currentIndex].point.map((src, index) => (
                                    <li key={index}>{src}</li>
                                ))}
                                <br />
                            </ul>

                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="flex flex-row justify-end mx-[10rem]"
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
                    delay: 0.1
                }}
            >
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: .95 }}
                    className="flex w-[190px] h-[50px] justify-center items-center bg-[#1DBF73] rounded-lg"
                    href={images[currentIndex].link}
                    target="_blank"
                >
                    <img
                        src="/image/Section2/fiverr-logo.svg"
                        alt="fiverr-logo"
                    />
                </motion.a>
            </motion.div>
            <motion.div
                className="flex flex-row justify-center items-center my-8 gap-8"
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
                    delay: 0.1
                }}
            >
                <motion.button
                    onClick={goToPrevious}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: .95 }}
                >
                    <img
                        src="/image/Section2/Arrow/Left-Arrow.png"
                        alt="Left"
                    />
                </motion.button>

                {/* Dots */}
                <div className="flex flex-row justify-around gap-3">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-4 h-4 rounded-full cursor-pointer transition-all ${currentIndex === index ? "bg-white scale-125" : "bg-gray-400"}`}
                        />
                    ))}
                </div>

                <motion.button
                    onClick={goToNext}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: .95 }}
                >
                    <img
                        src="/image/Section2/Arrow/Right-Arrow.png"
                        alt="Right"
                    />
                </motion.button>
            </motion.div>
        </section>
    );
}

export default Section2;