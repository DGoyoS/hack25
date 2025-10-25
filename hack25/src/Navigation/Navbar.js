// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp?utm_source=chatgpt.com
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => (

  <nav className="navbar">
    <div className="navbar-logo">
      <img src={'/imgs/logo.png'}/>
    </div>

    <input type="checkbox" className="nav-toggle" />
    <label htmlFor="nav-toggle" className="hamburger">
      <span></span><span></span><span></span>
    </label>

    <div className="nav-panel">
      <ul className="nav-links">
        <li><a href="/creditcards">Credit Cards</a></li>
        <li><a href="/checkings">Checkings & Savings</a></li>
        <li><a href="/auto">Auto</a></li>
        <li><a href="/business">Business</a></li>
        <li><a href="/commerical">Commercial</a></li>
        <li><a href="/benefits">Benefits & Tools</a></li>
      </ul>

      <div className="navbar-left">
        <Link to="/account" className="login-button">Log In</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
