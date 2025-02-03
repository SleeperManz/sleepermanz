import Lottie from "lottie-react";
import { motion } from "motion/react";
import satelitFloating from "../LottieData/satelit-floating.json"
import { useState } from "react";

function Section3({ sectionIndex, index }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (stirng) => {
        setSelectedImage(stirng);
    }

    const closeModel = () => {
        setSelectedImage(null);
    }

    const images = [
        "/image/Section3/Project-Image/Pre-comp 12_7.gif",
        "/image/Section3/Project-Image/Pre-comp 12_8.gif",
        "/image/Section3/Project-Image/ProjectPre-viewWebsite-5.png",
        "/image/Section3/Project-Image/Pre-comp 12_10.gif",
        "/image/Section3/Project-Image/Pre-comp 12_11.gif",
        "/image/Section3/Project-Image/ProjectPre-viewWebsite-6.png",
    ]

    const divCount = 6;
    const divs = [];

    for (let i = 0; i < divCount; i++) {
        divs.push(
            <img
                key={i}
                className="col-span-1 row-span-1 bg-gray-400 rounded-lg bg-cover bg-center border-black border-2"
                src={images[i]}
                alt={`images-${i}`}
                onClick={() => setSelectedImage(images[i])}
            />
        )
    }

    return (
        <section
            id="project"
            style={{ backgroundImage: "url(/image/Section3/Project-section.png)" }}
            className="sticky top-0 flex flex-col h-screen bg-white bg-cover bg-center bg-no-repeat z-[1] overflow-hidden"
        >
            <div className="flex flex-row justify-center items-center mt-8">
                <h1 className="text-5xl grith">
                    Project
                </h1>
            </div>
            <div className="absolute top-[40%] ml-4">
                <img
                    src="/image/Section3/Project.svg"
                    alt="Project"
                />
            </div>
            <div className="relative flex flex-col gap-2">

                <motion.div
                    className="w-[1500px] h-[600px] m-auto mt-[5rem]"
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
                    <div className="grid grid-cols-3 grid-rows-2 w-full h-full gap-x-2 gap-y-3 p-8">
                        {divs}
                    </div>
                </motion.div>

                <div className="absolute top-[-15rem] right-[-10rem] -z-10">
                    <div className="-scale-x-100">
                        <Lottie
                            animationData={satelitFloating}
                        />
                    </div>
                </div>
            </div>

            {/* Model */}
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
                            className="absolute top-4 right-4 text-black text-2xl"
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

        </section>
    );
}

export default Section3;