import React from "react";
import "../Style/Skill.css";
import Aos, { init } from "aos";
import "aos/dist/aos.css";
function Skill() {
  Aos.init();
  return (
    <div className="Outer_div_skill">
      <div style={{ textAlign: "center" }}>
        <h2 style={{ margin: "0" }}>My Skill</h2>{" "}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="Skill_bar_outer_div" id="first">
          {" "}
          <h3 style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ margin: "0" }}>C </h3>
            <h3 style={{ margin: "0" }}>80%</h3>
          </h3>
          <div className="Skill_bar_div">
            <div id="C" data-aos="C" data-aos-duration="4000"></div>
          </div>
        </div>
        <div className="Skill_bar_outer_div">
          {" "}
          <h3 style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ margin: "0" }}>C++</h3>
            <h3 style={{ margin: "0" }}>60%</h3>
          </h3>
          <div className="Skill_bar_div">
            <div id="Cplus" data-aos="Cplus" data-aos-duration="4000">
              {" "}
            </div>
          </div>
        </div>
        <div className="Skill_bar_outer_div">
          {" "}
          <h3 style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ margin: "0" }}>ReactJS</h3>
            <h3 style={{ margin: "0" }}>70%</h3>
          </h3>
          <div className="Skill_bar_div">
            <div id="React" data-aos="React" data-aos-duration="4000"></div>
          </div>
        </div>
        <div className="Skill_bar_outer_div">
          <h3 style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ margin: "0" }}>JavaScript</h3>
            <h3 style={{ margin: "0" }}>60%</h3>
          </h3>{" "}
          <div className="Skill_bar_div">
            <div id="JS" data-aos="JS" data-aos-duration="4000"></div>
          </div>
        </div>
        <div className="Skill_bar_outer_div">
          {" "}
          <h3 style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ margin: "0" }}>CSS</h3>
            <h3 style={{ margin: "0" }}>80%</h3>
          </h3>{" "}
          <div className="Skill_bar_div">
            <div id="CSS" data-aos="CSS" data-aos-duration="4000"></div>
          </div>
        </div>
        <div className="Skill_bar_outer_div">
          {" "}
          <h3 style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ margin: "0" }}>HTML</h3>
            <h3 style={{ margin: "0" }}>90%</h3>
          </h3>{" "}
          <div className="Skill_bar_div">
            <div id="HTML" data-aos="HTML" data-aos-duration="4000"></div>
          </div>
        </div>
        <div className="Skill_bar_outer_div">
          {" "}
          <h3 style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ margin: "0" }}>MYSQL</h3>
            <h3 style={{ margin: "0" }}>40%</h3>
          </h3>
          <div className="Skill_bar_div">
            <div id="MYSQL" data-aos="MYSQL" data-aos-duration="4000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
