import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/NavbarLogged";
import "./InfoNGO.css";


export default function InfoNGO() {
  return (
    <>
      <Navbar />
      <div className="InfoSpacer"></div>
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
                    <span className="numberData">85%</span>
                    <span className="infoData">
                      of students improved their understanding of renewable energy within 6 months
                    </span>
                  </li>
                  <li>
                    <span className="numberData">12,500</span>
                    <span className="infoData">
                      children in rural communities have accessed green energy education programs
                    </span>
                  </li>
                  <li>
                    <span className="numberData">45</span>
                    <span className="infoData">
                      solar-powered learning centers established in remote villages
                    </span>
                  </li>
                  <li>
                    <span className="numberData">320</span>
                    <span className="infoData">
                      teachers trained in sustainable energy curriculum and teaching methods
                    </span>
                  </li>
                  <li>
                    <span className="numberData">60%</span>
                    <span className="infoData">
                      reduction in carbon footprint in participating communities through renewable energy adoption
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row-tag-donate">
            <div className="col-wide">
             <div className="tagName">
                 <h3 className="tagNametext">Education & Sustainability</h3>
              </div>
              <p className="tagParagraph">
                OMS Learn Together is dedicated to empowering children in rural areas with knowledge about green energy and sustainable practices. We believe every child deserves access to quality education about renewable energy, regardless of their geographic location. Our mission is to bridge the educational gap while bringing clean energy solutions to underserved communities, creating a brighter, more sustainable future for all.
              </p>
            </div>
            <div className="col-narrow">
              <div className="div-donate-button">
                <Link to="/donate" className="donate-button">Donate</Link>
              </div>
            </div>
          </div>

          <div className="row image2-content">
            <img src={'/imgs/learn.png'} alt="Program" />
          </div>

          <div className="row text-impact">
            <h3>Impact</h3>
            <p>
              Since our founding, OMS Learn Together has transformed education in 45 rural communities across Mexico. We've installed solar panels in schools, providing reliable electricity for the first time to thousands of students. Our interactive workshops teach children about wind energy, solar power, and sustainable living practices they can implement in their own homes and communities. Students learn to build simple solar devices, understand energy efficiency, and become ambassadors for environmental change in their villages.
            </p>
            <p>
              The impact extends beyond the classroom. Families of our students have adopted renewable energy solutions, reducing their reliance on fossil fuels and lowering household expenses. Communities have seen improved air quality, increased local employment through green energy projects, and a renewed sense of hope for their environmental future. Our alumni are now pursuing careers in renewable energy, environmental science, and sustainable development—proof that education and opportunity can break cycles of poverty while protecting our planet.
            </p>
          </div>

          <div className="row charts-row">
            <div className="chart-col">
              <img src={'/imgs/grafica.png'} alt="Student Enrollment Growth" />
            </div>
            <div className="chart-col">
              <img src={'/imgs/grafica.png'} alt="Communities Reached" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
