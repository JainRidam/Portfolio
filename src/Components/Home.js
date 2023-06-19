import React, { useEffect } from "react";
import Typed from "typed.js";
import "../Style/Home.css";
import photo from "../image/org photo.png";
import avatar from "../image/Avatar 3.png";
import linkedin from "../social/My project.png";
import instagram from "../social/instagram.png";
import github from "../social/github.png";
function Home() {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["WEB DESIGNER ^800", "PROGRAMMER ^800", "GAMER^800"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="Outer_div_home">
      <div id="Home_info_div">
        <div>
          <div className="First_info_div">
            <p id="first_p">Hello, I'm Ridam</p>
          </div>
          <div className="Second_info_div">
            <div>
              <p style={{ fontSize: "2.5vw", paddingRight: ".5vw" }}>
                And I'm a{" "}
              </p>
            </div>
            <div
              className="Typed_div"
              style={{ fontSize: "2.5vw", color: "#5a4575" }}
            >
              <span ref={el}></span>
            </div>
          </div>

          <div className="Third_info_div">
            <p id="second_p">
              Welcome to my website! I am thrilled to share my journey as a
              versatile individual who thrives in the realms of{" "}
              <b>Web Design</b>,<b>Coding</b>, and <b>Gaming</b>. Allow me to
              provide you with a brief glimpse into my world.
            </p>
          </div>
          <div className="Social_app_div">
            <div>
              <a href="https://www.linkedin.com/in/ridam-jain-53ab1422a">
                <img src={linkedin} className="social_media_app" />
              </a>
            </div>
            <div>
              <a href="https://github.com/JainRidam">
                <img src={github} className="social_media_app" />
              </a>
            </div>
            <div>
              <a href="https://instagram.com/ridamjain_04?igshid=NTc4MTIwNjQ2YQ==">
                <img src={instagram} className="social_media_app" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="Home_photo_div">
        <div className="First_div">
          <div className="First_front_div">
            <img src={photo}></img>
          </div>
          <div className="First_back_div">
            <img src={avatar}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
