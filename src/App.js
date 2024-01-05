import React,{useRef} from "react";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";
import Intro from "./component/Intro/intro";
import Navbar from "./component/Navbar/navbar";
import Skill from "./component/skills/skill";
import Works from "./component/works/works";

function App() {

    // Create a ref for the contact section
    const contactRef = useRef(null);

  return (
    <div className="App">
      <Navbar contactRef={contactRef} />
      <Intro/>
      <Skill/>
      <Works/>
      <Contact contactRef={contactRef} />
      <Footer/>
    </div>
  );
}

export default App;
