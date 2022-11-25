import React, { useRef } from "react";

function Navbar() {
  const paraRef = useRef(null);
  const executeScroll = () => {
    paraRef.current.scrollIntoView();
  };
  return (
    <div className="navbar section">
      <h2 ref={paraRef}>Mentors</h2>
      <div className="nav-items">
        <a className="nav-item" href="" onClick={executeScroll}>
          Home
        </a>
        <a className="nav-item" href="" onClick={executeScroll}>
          About
        </a>
        <a className="nav-item" href="" onClick={executeScroll}>
          Contact
        </a>
      </div>
      <button className="reg-btn">Register</button>
    </div>
  );
}

export default Navbar;
