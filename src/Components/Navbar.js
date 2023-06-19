import React, { useState } from "react";
import "../Style/Navbar.css";
import logo from "../image/logo.png";
import lightmode from "../image/light mode.png";
import darkmode from "../image/dark mode.png";
function Navbar(props) {
  let mode = document.getElementById("navbar");
  let [checked, setchecked] = useState(true);
  function Changemode() {
    // console.log(mode.classList);
    if (checked) {
      setchecked(false);
      // props.setmodechange(false);

      // document
      //   .getElementById("navbar")
      //   .classList.toggle("light_Outer_div_navbar");
      // document
      //   .getElementById("navbar")
      //   .classList.toggle("dark_Outer_div_navbar");
    } else {
      setchecked(true);
      // props.setmodechange(true);
      // document
      //   .getElementById("navbar")
      //   .classList.toggle("light_Outer_div_navbar");
      // document
      //   .getElementById("navbar")
      //   .classList.toggle("dark_Outer_div_navbar");
    }
  }
  return (
    <div className="dark_Outer_div_navbar " id="navbar">
      <div className="navbar_img">
        <img src={logo} />
      </div>
      <ul className="navbar_ul">
        <div className="ul_inside_div">
          <li className="navbar_li">
            <a href="#Section1">Home</a>
          </li>
        </div>
        <div className="ul_inside_div">
          <li className="navbar_li">
            <a href="#Section2">About Me</a>
          </li>
        </div>
        <div className="ul_inside_div">
          <li className="navbar_li">
            <a href="#Section3">Skills</a>
          </li>
        </div>
        <div className="ul_inside_div">
          <li className="navbar_li">
            <a href="#Section4">Projects</a>
          </li>
        </div>
        <div className="ul_inside_div">
          <li className="navbar_li">
            <a href="#Section5">Contact me</a>
          </li>
        </div>
        <li className="navbar_li" id="navabar_button">
          <div className="navbar_button_div" onClick={Changemode}>
            {checked ? (
              <img src={lightmode} className=" darkmodeon" id="bground"></img>
            ) : (
              <img src={darkmode} className=" lightmodeon" id="bground"></img>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
