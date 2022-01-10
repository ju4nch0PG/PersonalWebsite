import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 70 },
    { skill: "HTML & CSS", ratingPercentage: 93 },
    { skill: "Redux", ratingPercentage: 75 },
    { skill: "Python", ratingPercentage: 65 },
    { skill: "C#", ratingPercentage: 70 },
    { skill: "Git & Slack", ratingPercentage: 80 },
  ];


  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "React JS Drum Machine",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A Online Drum Machine created to play music in any device at any time",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "React JS Calculator",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A online Calculator with an unbrakeable code prepared for all kind of user inputs",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    // {
    //   title: "React JS Pomodoro Clock",
    //   duration: { fromDate: "2021", toDate: "2021" },
    //   description:
    //     "The Pomodoro Technique is a time management system that encourages people to work with the time they have—rather than against it. Using this method, you break your workday into 25-minute chunks separated by five-minute breaks.",
    //   subHeading: "Technologies Used: React JS, Bootstrap",
    // },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
    <ResumeHeading
      heading={"Universidad Tecnológica Nacional UTN, Tucuman"}
      subHeading={"Tecnicatura Universitaria en Programacion"}
    />
    <ResumeHeading
      heading={"HENRY BootCamp"}
      subHeading={"Full Stack Developer"}
    />
    <ResumeHeading
      heading={"Colegio Sagrado Corazon"}
      subHeading={"Bachillerato en Ciencias Naturales"}
    />
  </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
    <div className="experience-container">
      <ResumeHeading
        heading={"Hotel Marina del Faro"}
        subHeading={"System Assistant"}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          {
            "Constant maintenance of hotel systems, Helping to improve the local aplications used to get the passengers control and the booking administration"
          }
        </span>
      </div>
      <br></br>
      <ResumeHeading
        heading={"Hostel del Centro"}
        subHeading={"Recepcionist"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          {
            "Working with a team to keep order and a good enviroment in job, Constantly problem solving of different kinds"
          }
        </span>
      </div>
    </div>
  </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
    <ResumeHeading
      heading="Music"
      subHeading="I like playing instruments of all kind specializing myself in bass, guitar and trumpet."
    />
    <ResumeHeading
      heading="Motorcycles"
      subHeading="Apart from being a tech enthusiast and a code writer, I also love to work with motorcycles engines, I actually run my own repair shop during the quarantine in the 2020, then I had to quit to focus in my programming studies."
    />
    <ResumeHeading
      heading="WoodWork"
      subHeading="I like working with wood using all types of tools, I found it very relaxing and I see this type of work as an analogy of programming, just a couple of tools with which you can do everything you set your mind to."
    />
  </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
