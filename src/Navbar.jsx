import React, { useRef } from "react";

function Navbar(props) {
  // const paraRef = useRef(null);
  // const executeScroll = () => {
  //   console.log("click");
  //   paraRef.current.scrollIntoView();
  // };
  return (
    <div className="navbar section">
      <h2>Mentors</h2>
      <div className="nav-items">
        {/* <a
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            props.scrollToSection();
          }}
        >
          Home
        </a> */}
        <a
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            props.scrollToSection();
          }}
        >
          About
        </a>
        {/* <a
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            props.scrollToSection();
          }}
        >
          Contact
        </a> */}
      </div>
      <button className="reg-btn">Register</button>
    </div>
  );
}

export default Navbar;
