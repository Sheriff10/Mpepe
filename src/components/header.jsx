import React from "react";

export const Header = () => {
    const toggleMenu = () => {
        const menu = document.querySelector(".menu-btn .menu-btn-burger");
        const slide = document.querySelector(".menu-link");
        if (menu) menu.classList.toggle("open");
        if (slide) slide.classList.toggle("open");
      };
   return (
      <div className="header">
         <div className="container-fluid">
            <div className="row justify-content-center">
               <div className="col-lg-7 col-12">
                  <div className="mb-logo">
                     <div className="mb-img">
                        <img src="logo.png" alt="moon pepe" />
                     </div>
                     <div className="menu-btn" onClick={toggleMenu}>
                        <div className="menu-btn-burger"></div>
                     </div>
                  </div>
                  <div className="menu-link">
                     <a href="#" onClick={toggleMenu}>home</a>
                     <a href="#about" onClick={toggleMenu}>about</a>
                     <div className="logo">
                        <img
                           src="logo.png"
                           alt="moon pepe"
                           className="img-fluid"
                        />
                     </div>
                     <a href="#buy" onClick={toggleMenu}>how to buy</a>
                     <a href="#tokenomics" onClick={toggleMenu}>tokenomics</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
