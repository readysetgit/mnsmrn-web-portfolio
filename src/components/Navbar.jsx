import React, { Component, useState, useEffect  } from 'react';
import "./Navbar.scss";

function Navbar() {

    const [textSize, setTextSize] = useState(100);
    // const [paddingLeft, setPaddingLeft] = useState(20);
    const [textPosition, setTextPosition] = useState("fixed");
    const [textPaddingTop, setPaddingTop] = useState(100);

    const [nameText, setNameText] = useState("monse merino");
    const maxPageOffset = 100;

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > maxPageOffset) {
        setTextSize(16);
        // setPaddingLeft(0)
        // setPaddingTop(10)
        setNameText(`mnsmrn`)

      } else {

        setTextSize(100 - (window.pageYOffset)*84/maxPageOffset );
        // setPaddingLeft(10 - (window.pageYOffset)*10/maxPageOffset   )
        // setPaddingTop(120 - (window.pageYOffset)*110/maxPageOffset   )

         
        if (window.pageYOffset > 0.8*maxPageOffset) {
            setNameText(`mns mrno`)
        } else if (window.pageYOffset > 0.6*maxPageOffset) {
            setNameText(`mns mrino`)
        } else if (window.pageYOffset > 0.4*maxPageOffset) {
            setNameText(`mns merino`)
        } else if (window.pageYOffset > 0.3*maxPageOffset) {
            setNameText(`mnse merino`)
        } else if (window.pageYOffset > 0) {
            setNameText(`monse merino`)
        } 

      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

        return (
    <div className="navbar-container">
      <div className='title-box'>
        <h1
          className="monse-merino"
          style={{ fontSize: `${textSize}px`, position: `${textPosition}`, margin: 'auto', }}
          onClick={scrollToTop}
        >
          {nameText}
        </h1>
      </div>
    </div>
            
        );
}

export default Navbar;



