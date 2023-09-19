import React, { useEffect, useCallback, useState } from 'react';

import './style.css';
import zke_halt_logo from './zke_halt_logo.png';
import zke_logo_negative from './zke_logo_negative.jpg';

export const Footer = () => {

  const [footerContent, setFooterContent] = useState(window.innerWidth > 630 ? "ZARAUTZ KIROL ELKARTEA - ZKE HALTEROFILIA" : "Z.K.E.");
  const [footerFontSize, setFooterFontSize] = useState(window.innerWidth > 630 ? "1rem" : "2rem");
  const [prevWindowSize, setPrevWindowSize] = useState(window.innerWidth);

  const handleWindowResize = useCallback(() => {
    let windowsize = window.innerWidth;
    if (windowsize <= 630 && prevWindowSize > 630) {
      setFooterContent("Z.K.E.");
      setFooterFontSize("2rem");
      setPrevWindowSize(windowsize);
    } else if (windowsize > 630 && prevWindowSize <= 630) {
      setFooterContent("ZARAUTZ KIROL ELKARTEA - ZKE HALTEROFILIA");
      setFooterFontSize("1rem");
      setPrevWindowSize(windowsize);
    }
  });

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    }
  }, [handleWindowResize]);

  return (
    <div className="footer">
      <img src={zke_halt_logo} className="footer-img pushRight" style={{marginLeft: "10px"}} alt="ZKE Halterofilia logo"/>
      
      <div className=" footer-center font-face-bago text-truncate" style={{fontSize: footerFontSize}}>
        {footerContent}
      </div>
      
      <img src={zke_logo_negative} className="footer-img pushLeft" style={{marginRight: "10px"}} alt="ZKE logo"/>
    </div>
  );
}