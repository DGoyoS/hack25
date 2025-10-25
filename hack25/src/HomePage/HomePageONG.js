import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import "./HomePageONG.css";
import HomePageImage from '../assets/HomePageImage.png';



export default function HomePageONG() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-text-content">
          <h1 className="home-title">We know you care</h1>
          <p className="home-paragraph">
              We believe now is the time to revolutionize commerce globally. With this purpose in mind, we’re driven to support employees by valuing inclusion, innovation, collaboration, and wellness to ensure every person’s ability to participate in the global economy.
          </p>
        </div>

        <div class Name="home-image-content">
          <div className="home-buttons">
            <Link to="/InfoNGO"><button>Join the Program</button></Link>
          </div>
          <img className = "home-image" src={HomePageImage} width="100%" height="100%"></img>
        </div>
      </div>
    </>
  );
}
