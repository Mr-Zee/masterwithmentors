import "./App.css";
import React from "react";
import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Cards from "./Cards";
import SignUp from "./SignUp";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Cards />
      <SignUp />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
