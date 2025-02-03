import { motion } from "motion/react";
import { useState } from "react";

function Section4({ sectionIndex, index }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (string) => {
        setSelectedImage(string);
    }

    const closeModel = () => {
        setSelectedImage(null);
    }

    const images = [
        {
            url: [
                "/image/Section4/game-image/Emily-LastHope/Cover-01.png",
                "/image/Section4/game-image/Emily-LastHope/Emily-Cover-02.png",
                "/image/Section4/game-image/Emily-LastHope/Emily-Cover-03.png",
                "/image/Section4/game-image/Emily-LastHope/Emily-Cover-04.png",
            ],
            titles: "Block Flow",
            platform: "PC",
            genre: "Metroidvania action-adventure",
            release: "TBA",
            desc: [
                <span>
                    In a world overrun by a monstrous forest that has consumed an entire city, where dangerous creatures lurk in the shadows, two unlikely friends set out on a perilous journey. As they navigate the ruins and evade the deadly beasts, they search for something that could change the fate of their desolate world. But with hope nearly extinguished, what could they possibly be seeking? The answer lies in the heart of the forest, where a secret waits to be uncovered.
                    <br />
                    <br />
                    The idea of a world populated by animals that look like humans is always appealing, and it evokes a sense of beauty and harmony. However, this is not the context for that to happen. Things are very different now. The world of beauty and harmony is now a utopia of the past. It's a world where animals are depicted in a way that is far from appealing, and we aim to provide something unexpected while maintaining a sense of mystery.
                </span>
            ]
        },
        {
            url: [
                "/image/Section4/game-image/Block-Flow/Block-Flow-Cover-01.png",
                "/image/Section4/game-image/Block-Flow/Block-Flow-Cover-02.png",
                "/image/Section4/game-image/Block-Flow/Block-Flow-Cover-03.png",
                "/image/Section4/game-image/Block-Flow/Block-Flow-Cover-04.png",
            ],
            titles: "Block Flow",
            platform: "Android",
            genre: "2D, Block, Puzzle",
            release: "TBA",
            desc: [
                <span>
                    Destroy three blocks of the same colour within a set time limit and complete the challenges in each level. The levels are multi-tiered and get harder as you progress, so you'll need to keep your wits about you!
                </span>
            ],
        },
    ]

    const divs = [];

    for (let i = 0; i < images.length; i++) {
        divs.push(
            <div className="grid grid-cols-3 grid-rows-3 gap-2 w-[650px] h-[580px] ml-[15rem]">
                {images[i].url.map((src, index) => (
                    <div
                        key={index}
                        className={`w-full h-full bg-gray-400 rounded-lg ${index === 0 ? "col-span-3 row-span-2" : "col-span-1 row-span-1"}`}
                    >
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src={src}
                            alt={`images+${index}`}
                            onClick={() => handleImageClick(src)}
                        />
                    </div>
                ))}
            </div>
        )
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? divs.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === divs.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (index) => {
        setCurrentIndex(index);
    }

    return (
        <section
            id="game"
            style={{ backgroundImage: "url(/image/Section4/Game-section.png)" }}
            className="sticky top-0 flex flex-col h-screen bg-cover z-[2]"
        >
            <div className="flex flex-row justify-center items-center m-auto my-8">
                <h1 className="text-white text-5xl grith">
                    Game
                </h1>
            </div>
            <div className="absolute top-[40%] ml-4">
                <img
                    src="/image/Section4/Game.svg"
                    alt="Game"
                />
            </div>
            <div className="flex flex-col mt-16">
                <div className="relative flex flex-row gap-10">
                    <motion.div
                        className="relative flex flex-row gap-10"
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
                        {divs[currentIndex]}

                        <div className="flex flex-col mt-[2rem]">
                            <div className="flex flex-col gap-4 grith text-white">
                                <div className="flex flex-row gap-4">
                                    <h1 className="text-5xl self-center">
                                        {/* titles */}
                                        {images[currentIndex].titles}
                                    </h1>
                                    <span className="text-xl self-end">
                                        {/* platform */}
                                        {images[currentIndex].platform}
                                    </span>
                                </div>
                                <span className="text-2xl">
                                    {images[currentIndex].genre}
                                </span>
                                <span className="text-2xl">
                                    {/* release */}
                                    {images[currentIndex].release}
                                </span>
                                <p className="text-xl font-sans w-[592px] h-full text-justify">
                                    {images[currentIndex].desc}
                                </p>
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
                        className="flex flex-row w-[190px] h-[50px] justify-start items-center bg-[#fa5c5cea] opacity-60 rounded-lg px-4 gap-4 cursor-not-allowed"
                        href={undefined}
                        target="_blank"
                    >
                        <img
                            src="/image/Section4/Button/itch.io-logo.svg"
                            alt="itch.io-logo"
                        />
                        <img
                            src="/image/Section4/Button/itch.io.png"
                            alt="itch.io"
                        />
                    </motion.a>
                </motion.div>
                <motion.div
                    className="flex flex-row justify-center items-center m-auto gap-8"
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

                    {/* dots */}
                    <div className="flex flex-row justify-around gap-3">
                        {divs.map((_, index) => (
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
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
                    onClick={closeModel}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={closeModel}
                        >
                            ✕
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full-size view"
                            className="max-w-full max-h-screen rounded-md"
                        />
                    </div>
                </div>
            )}
        </section >
    );
}

export default Section4;