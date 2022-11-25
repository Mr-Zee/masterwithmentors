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
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const signUpRef = useRef(null);

  const scrollToSection = (sectionName) => {
    switch (sectionName) {
      case "home":
        homeRef.current.scrollIntoView({});
        break;
      case "about":
        aboutRef.current.scrollIntoView({});
        break;
      case "contact":
        contactRef.current.scrollIntoView({});
        break;
      case "signUp":
        signUpRef.current.scrollIntoView({});
        break;

      default:
        break;
    }
  };
  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <Hero ref={homeRef} scrollToSection={scrollToSection} />
      <About ref={aboutRef} />
      <Cards />
      <SignUp ref={signUpRef} />
      <Testimonial />
      <Footer ref={contactRef} />
    </div>
  );
}

export default App;
