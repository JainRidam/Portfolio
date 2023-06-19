import React from "react";
import "../Style/Project.css";

import projects from "./projectarray";
function Project() {
  return (
    <div className="Outer_div_Project">
      <h2 style={{ textAlign: "center", margin: "0", marginBottom: "5vw" }}>
        PROJECTS
      </h2>
      {projects.map((values) => {
        return (
          <div className="Inner_div">
            <div className="left_div_inside_inner_div">
              <div className="img_div_inside_left_div">
                <img src={values.image}></img>
              </div>
            </div>
            <div className="right_div_inside_inner_div">
              <div>
                <div>
                  <p style={{ margin: "0", marginBottom: "1vw" }}>
                    {values.name}
                  </p>
                </div>
                <div>
                  <p style={{ margin: "0" }}>{values.description}</p>
                  <p>
                    {" "}
                    <img></img>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
