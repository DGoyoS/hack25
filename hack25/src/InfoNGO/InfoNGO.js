import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import "./InfoNGO.css";


export default function InfoNGO() {
  return (
    <>
      <Navbar />
      <div className="info-container">
        <div className="info-table">
          <div className="row">
            <div className="col-wide">
              <h1 className="MainTitle">OMS Learn Together</h1>
            </div>
            <div className="col-narrow"></div>
          </div>

          <div className="row">
            <div className="col-wide">
              <img src={'/imgs/InfoNGO.png'}/>
            </div>

            <div className="col-narrow">
              <div className="highlights-container">
                <h2 className="highlights">Highlights</h2>

                <ul className="table-highlights">
                  <li>
                    <span className="numberData">50%</span>
                    <span className="infoData">
                      De dfsdjf saflkasfjl asdlkdlkad asdlkasdklsdjads kladsjdsk asdlkadslk
                    </span>
                  </li>
                  <li>
                    <span className="numberData">50%</span>
                    <span className="infoData">
                      De dfsdjf saflkasfjl asdlkdlkad asdlkasdklsdjads kladsjdsk asdlkadslk
                    </span>
                  </li>
                  <li>
                    <span className="numberData">50%</span>
                    <span className="infoData">
                      De dfsdjf saflkasfjl asdlkdlkad asdlkasdklsdjads kladsjdsk asdlkadslk
                    </span>
                  </li>
                  <li>
                    <span className="numberData">50%</span>
                    <span className="infoData">
                      De dfsdjf saflkasfjl asdlkdlkad asdlkasdklsdjads kladsjdsk asdlkadslk
                    </span>
                  </li>
                  <li>
                    <span className="numberData">50%</span>
                    <span className="infoData">
                      De dfsdjf saflkasfjl asdlkdlkad asdlkasdklsdjads kladsjdsk asdlkadslk
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-wide">
              <h3 className="tagName">Community</h3>
              <p className="tagParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.              </p>
            </div>
            <div className="col-narrow">
              <div className="div-donate-button">
                <Link to="/donate" className="donate-button">Donate</Link>
              </div>
            </div>
          </div>

          <div className="row image2-content">
            <img src={'/imgs/InfoNGO2.png'} alt="Program" />
          </div>

          <div className="row text-impact">
            <h3>Impact</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. </p>
          </div>

          <div className="row charts-row">
            <div className="chart-col">
              <img src={'/imgs/grafica.png'} alt="Chart 1" />
            </div>
            <div className="chart-col">
              <img src={'/imgs/grafica.png'} alt="Chart 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
