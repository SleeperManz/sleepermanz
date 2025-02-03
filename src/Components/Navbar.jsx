import { motion } from "motion/react";

function Navbar({ sectionIndex, setCurrentIndex, isLoading }) {

    const ReloadPage = () => {
        window.location.reload();
    }

    const navigation = [
        { index: 0, name: "about" },
        { index: 1, name: "services" },
        { index: 2, name: "project" },
        { index: 3, name: "game" },
        { index: 6, name: "contact" },
    ]


    return (
        <motion.nav
            className={`absolute top-0 w-full flex flex-row z-10 py-4 ${isLoading ? "hidden" : "block"}`}
            initial={{ scale: 1 }}
            animate={
                sectionIndex === 0
                    ? { scale: 1, translateY: 0 }
                    : sectionIndex > 0
                        ? { scale: 0.8, translateY: -200, opacity: 0 }
                        : {}
            }
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
            }}
        >
            <div className="w-full flex flex-row justify-between items-center mx-[10rem]">
                <img
                    className="cursor-pointer"
                    onClick={ReloadPage}
                    src="/image/Section1/logo-nav.png"
                    alt="logo"
                />
                <ul className="flex flex-row gap-8 justify-center items-center text-2xl grith">
                    {navigation.map((src, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: .95 }}
                        >
                            <a
                                className="capitalize cursor-pointer"
                                // href={`/#${src}`}
                                // onClick={(e) => handleSmoothScroll(e, src)}
                                onClick={() => setCurrentIndex(src.index)}
                            >
                                {src.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}

export default Navbar;