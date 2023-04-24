import React from "react";

export const Contact = () => {
   return (
      <div className="contact text-center" id="contact">
         <div className="container">
            <div className="c-head">
               <h1>Contact</h1>
               <img src="logo.png" alt="$MPEPE" />
            </div>
            <div className="c-body">
               <div className="c-mail">
                  <small>email: moonpepe@moonpepe.xyz</small>
               </div>
               <div className="c-social">
                  <img src="tw.png" alt="twitter" />
                  <img src="tw.png" alt="telegram" />
               </div>
               <div className="c-cap">
                  <span>
                     $mpepe coin has no association with Matt Furie or his
                     creation Pepe the Frog. <br /> This token is simply paying
                     homage to a meme we all love and recognize.
                  </span>
               </div>
            </div>
         </div>
         <div className="c-copy">
            <span>© 2023 by MPEPE. All rights reserved!</span>
         </div>
      </div>
   );
};
