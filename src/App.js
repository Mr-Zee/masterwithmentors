import "./App.css";
import React, { useRef } from "react";
import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Cards from "./Cards";
import SignUp from "./SignUp";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

function App() {
  const scrollToSection = (sectionName) => {
    console.log("linked");
    aboutRef.current.scrollIntoView();
    // aboutRef.scroll();
    // contactRef.scroll();
  };
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <Hero />
      <About ref={aboutRef} />
      <Cards />
      <SignUp />
      <Testimonial />
      <Footer ref={contactRef} />
    </div>
  );
}

export default App;
