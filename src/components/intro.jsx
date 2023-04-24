import React from "react";

export const Intro = () => {
   return (
      <div className="intro">
         <div className="container-fluid">
            <div className="intro-btn">
               <button className="btn btn-sm">Play Now</button>
            </div>
            <div className="intro-side-img">
               <div>
                  <img src="tw.png" alt="#" />
                  <img src="tg.png" alt="#" />
                  <img src="eth.png" alt="#" />
               </div>
            </div>
         </div>
      </div>
   );
};
