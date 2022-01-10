import React from "react";
import Header from './Header/Header'
import Profile from "./Profile/Profile.js";
import Footer from "./Footer/Footer";
// import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header/>
      <Profile />
      <Footer />
      
    </div>
  );
}
