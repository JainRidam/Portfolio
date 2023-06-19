import React, { useEffect } from "react";
import avatar from "../image/org photo.png";
import Aos from "aos";
import "aos/dist/aos.css";

import "../Style/About.css";
function About() {
  Aos.init();
  return (
    <div className="Outer_div_about">
      <div style={{ textAlign: "center" }}></div>
      <div style={{ display: "flex", paddingTop: "5vw" }}>
        <div
          className="inner_first_div"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <img src={avatar} />
        </div>

        <div className="inner_second-div">
          <p>
            <h2 data-aos="fade-down" data-aos-offset="300">
              ABOUT <b style={{ color: "#5a4575" }}>ME</b>
            </h2>
            I am <b style={{ color: "#5a4575" }}>Ridam Jain</b>, a passionate
            web developer. I have always been fascinated by the digital world
            and consider myself fortunate to turn my passion into a fulfilling
            career. Each day, I wake up with a sense of purpose and enthusiasm,
            ready to embark on new web development endeavors.
          </p>
          <br />
          <p>
            Throughout my journey, I have gained extensive experience and
            knowledge in the field of web development. I have spent countless
            hours refining my skills and staying up-to-date with the latest
            technologies. My aim is not only to excel in my craft but also to
            make a positive impact by creating exceptional online experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
