import React, { useRef } from "react";

function Navbar(props) {
  return (
    <div className="navbar section">
      <h2>Mentors</h2>
      <div className="nav-items">
        <a
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            props.scrollToSection("home");
          }}
        >
          Home
        </a>
        <a
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            props.scrollToSection("about");
          }}
        >
          About
        </a>
        <a
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            props.scrollToSection("contact");
          }}
        >
          Contact
        </a>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.scrollToSection("signUp");
        }}
        className="reg-btn"
      >
        Register
      </button>
    </div>
  );
}

export default Navbar;
