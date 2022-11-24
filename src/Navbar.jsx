import React from "react";

function Navbar() {
  return (
    <div className="navbar section">
      <h2>Mentors</h2>
      <div className="nav-items">
        <a className="nav-item" href="">
          Home
        </a>
        <a className="nav-item" href="">
          About
        </a>
        <a className="nav-item" href="">
          Contact
        </a>
      </div>
      <button className="reg-btn">Register</button>
    </div>
  );
}

export default Navbar;
