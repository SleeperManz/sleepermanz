import React, { useEffect, useRef, useState } from "react"
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Section6";
import Footer from "./Components/Footer";

function App() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);
  const [isLoading, setIsLoading] = useState(true);


  // Handle Scrolling
  const handleScroll = (e) => {
    if (isScrolling.current || !containerRef.current) {
      return;
    }

    // Determine if scrolling up or down
    const scrollDirection = Math.sign(e.deltaY);
    isScrolling.current = true;

    if (scrollDirection > 0 && currentIndex < sections.length - 1) {
      // Scroll down
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (scrollDirection < 0 && currentIndex > 0) {
      // Scroll up
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  useEffect(() => {
    if (containerRef.current) {
      const sectionHeight = containerRef.current.offsetHeight;
      containerRef.current.scrollTo({
        top: currentIndex * sectionHeight,
        behavior: "smooth",
      })
    }
  }, [currentIndex]);

  useEffect(() => {
    const preventDefault = (e) => {
      if (isScrolling.current) {
        e.preventDefault();
      }
    }

    window.addEventListener("wheel", preventDefault, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventDefault);
    }
  }, []);
  // End of Handle Scrolling


  // Loading Effect
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll")
    }
  }, [isLoading])

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  // End of Loading Effect

  const sections = [
    <Section1 isLoading={isLoading} />,
    <Section2 />,
    <Section3 />,
    <Section4 />,
    <Section5 />,
    <Section6 />,
    <Footer setCurrentIndex={setCurrentIndex} />,
  ]

  return (
    <div
      ref={containerRef}
      onWheel={handleScroll}
      className="h-screen overflow-hidden"
    >
      <Navbar isLoading={isLoading} sectionIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          {React.cloneElement(section, { sectionIndex: currentIndex, index: index })}
        </React.Fragment>
      ))}
    </div>
  );
}

export default App
