import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../Style/contact.css";
import profile from "../image/profile.png";
import email from "../image/email.png";
import address from "../image/address.png";
import messagesent from "../image/check-mark-button-joypixels.gif";
function Contact() {
  const [state, handleSubmit] = useForm("mgebjekr");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  const change = () => {
    setTimeout(() => {
      state.succeeded = false;
      console.log(state.succeeded);
    }, 5000);
  };
  console.log(state.succeeded);
  return (
    <div className="outer_div_contact">
      <h1 style={{ textAlign: "center", margin: "0", marginBottom: "4vw" }}>
        Contact ME!
      </h1>
      <div className="inner_div_contact">
        <div className="left_inner_div_contact">
          <p id="pickup_line_p">
            I would love to hear from you! Feel free to reach out with any
            inquiries, collaborations, or simply to say hello. Your feedback is
            very valuable 😊.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={profile}
              style={{ height: "2vw", paddingRight: "1vw" }}
            ></img>
            <p className="p_inside_left_inner_div_contact">
              Name:
              <br />
              Ridam Jain
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={address}
              style={{ height: "2vw", paddingRight: "1vw" }}
            ></img>
            <p className="p_inside_left_inner_div_contact">
              Address:
              <br />
              Jaipur, Rajasthan
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={email}
              style={{ height: "2vw", paddingRight: "1vw" }}
            ></img>
            <p className="p_inside_left_inner_div_contact">
              Email:
              <br />
              ridamjain4@gmail.com
            </p>
          </div>
        </div>
        <div className="right_inner_div_contact ">
          {state.succeeded ? (
            <div>
              <p id="Thank_you_p">Thank You For Your valuable Review </p>
              <div style={{ textAlign: "center" }}>
                <img src={messagesent} style={{ height: "6vw" }}></img>
              </div>
            </div>
          ) : (
            <div style={{ transition: "3sease-in" }}>
              <form onSubmit={handleSubmit}>
                <div>
                  <p className="Form_P">Name</p>
                  <input type="text" id="name" name="name" autoComplete="off" />
                </div>
                <div>
                  <p className="Form_P"> Email</p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <p className="Form_P"> Comment </p>
                  <textarea id="message" name="message" />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    paddingTop: "1vw",
                    paddingBottom: "1vw",
                  }}
                >
                  <button
                    style={{ cursor: "pointer" }}
                    type="submit"
                    disabled={state.submitting}
                    onClick={change}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
