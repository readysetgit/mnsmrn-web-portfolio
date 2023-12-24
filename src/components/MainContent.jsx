import React, { useState, useEffect } from "react";
import "./MainContent.scss";
import { resumeURL, coverLetterURL, linkedInURL, projectsURL } from "../MyLinks";
import charityWaterImg from "../assets/charity-water.png";
import NozImg from "../assets/noz.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export const MainContent = () => {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const textArray = ["Hi!", "Hola!"];
  const navigate = useNavigate();

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

  const openProjectPage = (project_id) => {
    return navigate(`/projects/${project_id}/`);
    // set router to something like "../projects/${projectID}"
    // the projectID would be used to fetch the Project details from a JSON by the id 
    // maybe a function like "getProjectById" on component mountain
  }

  return (
    <React.Fragment>
      <Navbar />
      <div
      className="main-content-container"
      style={{ paddingTop: `${navBarHeight}px` }}
    >
      {/* ========= LINKS TO STUFF ========== */}
      <section className="important-links">
        <button className="link-btn" onClick={() => openLinkInNewTab(resumeURL)}>
            Resume        
        </button>
        <button className="link-btn" onClick={() => openLinkInNewTab(projectsURL)}>
            Projects
        </button>
        <button className="link-btn" onClick={() => openLinkInNewTab(linkedInURL)}>
            LinkedIn
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
        <div className="img-container" onClick={() => openLinkInNewTab(projectsURL)}>
          <img src={charityWaterImg} />
        </div>
        <div className="img-container" onClick={() => openLinkInNewTab(projectsURL)}>
          <img src={NozImg} />
        </div>
      </section>
    </div>
    </React.Fragment>

  );
};
