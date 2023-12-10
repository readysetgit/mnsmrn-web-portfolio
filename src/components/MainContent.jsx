import React, { useState, useEffect } from "react";
import "./MainContent.scss";
import { resumeURL, coverLetterURL, linkedInURL } from "../MyLinks";
import charityWaterImg from "../assets/charity-water.png";
import NozImg from "../assets/noz.png";

export const MainContent = () => {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const textArray = ["Hi!", "Hola!", "Salut!", "Ciao!"];

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".monse-merino");
      if (navbar) {
        const { height } = navbar.getBoundingClientRect();
        setNavBarHeight(height / 2);
      }
    };

    handleScroll(); // Get initial height

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000); // Change text every 2 seconds (2000 milliseconds)

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [textArray.length]);

  const openLinkInNewTab = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="main-content-container"
      style={{ paddingTop: `${navBarHeight}px` }}
    >
      {/* ========= LINKS TO STUFF ========== */}
      <section className="important-links">
        <button className="link-btn">
          <a href={resumeURL} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </button>
        <button className="link-btn">
          <a href={coverLetterURL} target="_blank" rel="noopener noreferrer">
            Cover Letter
          </a>
        </button>
        <button className="link-btn">
          <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </button>
      </section>

      {/* ========= ABOUT ME ========== */}
      <section className="about-me">
        {/* {textArray.map((text, index) => (
          <div
            key={index}
            className={`changing-text transition duration-500 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
          >
            {text}
          </div>
        ))} */}
        <p>
          <span className="changing-text-container-span">
            {textArray.map((text, index) => (
              <span
                key={index}
                className={`changing-text transition duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {text}
              </span>
            ))}
          </span>
          The earth has over 8 billion people, so I majored in{" "}
          <span className="text-highlight">Pyschology</span> to study them. And
          to help them with a pleasant user experience, I became a{" "}
          <span className="text-highlight"> UX Developer </span>.
        </p>
      </section>

      {/* ========= MY WORK ========== */}
      <section className="my-products">
        <div className="img-container" onClick={() => openLinkInNewTab("https://www.charitywater.org/")}>
          <img src={charityWaterImg} />
        </div>
        <div className="img-container" onClick={() => openLinkInNewTab("https://globaltech-monseratt-merino.myshopify.com/")}>
          <img src={NozImg} />
        </div>
      </section>
    </div>
  );
};
