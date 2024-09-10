import React from "react";
import style from "./Hero.module.css";

const Hero =()=>{

  return(
  <>
   <div className={style["hero-container"]}>
      <div className={style["hero-image"]}>
          <img src="/Images/hero.jpg" alt="Hero" />
      </div>  
      <div className={style["hero-text"]}>
          <h3>
             <span className="highlight">Discover </span>
                exciting events happening around you with our geolocation-based 
             <span className="highlight"> event </span>finder<span className="highlight">.</span>
          </h3>
          <p>Explore a wclassNamee range of activities and gatherings tailored to your interests and location. </p>
        </div>
   </div>
  </>
  );
    
};
export default Hero;