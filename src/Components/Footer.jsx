import { motion } from "motion/react";

function Footer({ setCurrentIndex }) {

    const navigation = [
        { index: 0, name: "about" },
        { index: 1, name: "services" },
        { index: 2, name: "project" },
        { index: 3, name: "game" },
        { index: 6, name: "contact" },
    ]

    const socials = [
        {
            url: "/image/Footer/Social-Media/x.png",
            link: "",
        },
        {
            url: "/image/Footer/Social-Media/instagram.png",
            link: "", 
        },
        {
            url: "/image/Footer/Social-Media/fiverr.png",
            link: "https://www.fiverr.com/sleepermanz?source=gig_page&gigs=slug%3Amake-2d-asset-full-of-fun-for-you%2Cpckg_id%3A1",  
        },
    ]

    return (
        <section id="contact" className="relative flex flex-col justify-between h-screen z-[5]">
            <img
                className="absolute top-[-6rem] left-0"
                src="/image/Footer/Footer.png"
                alt="footer"
            />
            <div className="flex flex-row justify-between mt-[20rem] mx-[10rem] z-10">

                <div className="flex flex-col gap-4">
                    <img
                        src="/image/Footer/Isolation_Mode.png"
                        alt="logo"
                    />
                    <div className="flex flex-row justify-center items-center gap-6">
                        {socials.map((src, index) => (
                            <motion.a
                                key={index}
                                href={src.link}
                                target="_blank"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: .95 }}
                            >
                                <img
                                    src={src.url}
                                    alt={`image-${index}`}
                                />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col text-white gap-4">
                    <h1 className="text-5xl grith">
                        address
                    </h1>
                    <div className="flex flex-col text-2xl gap-2 ml-12">
                        <p className="w-[450px]">
                            Jl. Kresno No.1, Polehan, Kec. Blimbing
                            Kota Malang, Jawa Timur 65146
                        </p>
                        <span className="mt-[1rem]">
                            sleepermanz102@gmail.com
                        </span>
                    </div>
                </div>

                <div className="flex flex-col text-white text-2xl gap-4">
                    {navigation.map((src, index) => (
                        <a
                            className="capitalize cursor-pointer"
                            key={index}
                            onClick={() => setCurrentIndex(src.index)}
                        >
                            {src.name}
                        </a>
                    ))}
                </div>

            </div>

            <div
                onClick={() => setCurrentIndex(0)}
                className="flex flex-row gap-8 justify-center z-10 cursor-pointer"
            >
                <img
                    className="w-[20px]"
                    src="/image/Footer/triangle.svg"
                    alt="triangle"
                />
                <div className="flex flex-col text-white justify-center items-center">
                    <h1 className="grith text-5xl">You're already at the bottom, go up</h1>
                    <p className="font-sans">Sleeper Manz 2025</p>
                </div>
                <img
                    className="w-[20px]"
                    src="/image/Footer/triangle.svg"
                    alt="triangle"
                />
            </div>

        </section>
    );
}

export default Footer;