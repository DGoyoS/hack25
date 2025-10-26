import React from "react";
import "./AccountDetails.css";
import Navbar from "../Navigation/NavbarLogged";

export default function AccountDetails() {
  return (
    <>
      <Navbar />
      <div className="accountSpacer"></div>
      <div className="account-container">
        {/* LEFT SIDE */}
          <div className="account-left">
            <h1 className="page-title">Account Details</h1>
            
            <div className="details">
              <div className="detail-row">
                <label>Organization Name</label>
                <p>Todos Amigos AC MX</p>
              </div>

              <div className="detail-row">
                <label>Legal Representative Name</label>
                <p>Angie Gutierrez Vega</p>
              </div>

              <div className="detail-row">
                <label>Account Number</label>
                <p>A2489349 S92329 39220</p>
              </div>

              <div className="detail-row">
                <label>Password</label>
                <p>*********</p>
              </div>

              <div className="detail-row">
                <label>Tax Certificate</label><br/>
                <a style={{cursor: "pointer"}} target="_blank" rel="noreferrer">
                  certificate.pdf
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="account-right">
            <img
              src="/imgs/wind.png"
              alt="Organization visual"
              className="account-image"
            />
            <div className="description">
              <h2 className="description-title">Description</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
            </div>
          </div>
      </div>
    </>
  );
}
