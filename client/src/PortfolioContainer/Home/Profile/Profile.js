import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/juanchipg/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://github.com/ju4nch0PG">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/paezjuan/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/paezjuan/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Juan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Dev",
                    1200,
                    "Enthusiastic Dev",
                    1200,
                    //  tiempo en cambiar de animacion
                    "React/Js Dev",
                    1200,
                    "Front-end",
                    1200,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire me{" "}
            </button>
            <a
              href="Paez Juan Cruz Front End CV.pdf"
              download="Paez Juan Cruz Front End CV.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
