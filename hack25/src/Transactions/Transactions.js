import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/NavbarProgram";
import "./Transactions.css";

export default function Transactions() {
  return (
    <>
      <Navbar />
      <div className="analytics-container">
        <div className="analytics-text-content">
          <h1 className="analytics-title">We know you care</h1>
          <p className="analytics-paragraph">
              We believe now is the time to revolutionize commerce globally. With this purpose in mind, we’re driven to support employees by valuing inclusion, innovation, collaboration, and wellness to ensure every person’s ability to participate in the global economy.
          </p>
        </div>

        <div className="analytics-image-content">
          <div className="analytics-buttons">
            <Link to="/InfoNGO"><button>Join the Program</button></Link>
          </div>
          <img className = "analytics-image" src={'/imgs/HomePageImage.png'} width="100%" height="100%"></img>
        </div>
      </div>
    </>
  );
}
