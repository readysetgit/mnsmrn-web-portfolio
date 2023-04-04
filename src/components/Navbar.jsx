import React, { Component, useState, useEffect  } from 'react';
import "./Navbar.scss";

function Navbar() {

    const [textSize, setTextSize] = useState(100);
    const [paddingLeft, setPaddingLeft] = useState(20);
    const [textPosition, setTextPosition] = useState("fixed");
    const [textMarginTop, setMarginTop] = useState(100);
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
        setPaddingLeft(0)
        setMarginTop(10)
        setNameText(`mnsmrn`)

      } else {

        setTextSize(100 - (window.pageYOffset)*84/maxPageOffset );
        setPaddingLeft(10 - (window.pageYOffset)*10/maxPageOffset   )
        setMarginTop(120 - (window.pageYOffset)*110/maxPageOffset   )

         
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

        return (
            <React.Fragment>
                <div className='title-box'>
                <h1 className="monse-merino" style={{ fontSize: `${textSize}px`, position: `${textPosition}`, paddingLeft: `${paddingLeft}%`, marginTop: `${textMarginTop}px` }}>
                    {nameText}
                </h1>
                {/* <div class="divider mtxl"></div> */}          
            </div>
            </React.Fragment>
            
        );
}

export default Navbar;



