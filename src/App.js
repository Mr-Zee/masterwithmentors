import "./App.css";
import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Cards from "./Cards";
import SignUp from "./SignUp";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Cards />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
