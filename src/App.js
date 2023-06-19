import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import "./App.css";
function App() {
  let [moddechange, setmodechange] = useState(true);
  // useEffect(() => {
  //   if (moddechange) {
  //     document.getElementById("Section1").classList.toggle("dark");
  //     document.getElementById("Section1").classList.toggle("light");
  //   } else {
  //     document.getElementById("Section1").classList.toggle("light");
  //     document.getElementById("Section1").classList.toggle("dark");
  //   }
  // }, [moddechange]);

  return (
    <div>
      <section id="Section1" className="dark">
        <Navbar setmodechange={setmodechange} changemode={moddechange} />
        <Home />
      </section>
      <section id="Section2">
        <About />
      </section>
      <section id="Section3">
        <Skill />
      </section>
      <section id="Section4">
        <Project />
      </section>
      <section id="Section5">
        <Contact />
      </section>
    </div>
  );
}

export default App;
