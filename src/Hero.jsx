import React, { forwardRef } from "react";

const Hero = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="hero section">
      <div className="left">
        <img src="./image/hero.png" alt="" />
      </div>
      <div className="right">
        <h1>MENTOR WITH MASTER</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maxime
          nesciunt nam velit, libero similique.
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.scrollToSection("about");
          }}
          className="knowmore-btn"
        >
          Know More
        </button>
      </div>
    </div>
  );
});

export default Hero;
