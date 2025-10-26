// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp?utm_source=chatgpt.com
import React from "react";
import "./NavbarProgram.css";
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
        <li><a href="/causes">Causes</a></li>
        <li><a href="/transactions">Transactions</a></li>
        <li><a href="/analytics">Analytics</a></li>
        <li><a href="/news">News</a></li>

      </ul>

      <div className="navbar-left">
        <Link to="/Account" className="login-button">Account</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
