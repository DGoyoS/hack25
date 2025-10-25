import { Link } from "react-router-dom";
import './Register.css';
import Navbar from "../Navigation/NavbarCapital";

export default function RegisterDonor() {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="left-section">
          <h1>Non Profit Care <br /> Program</h1>

          <form id="loginForm">
            <label for="accountName">Account Name</label>
            <input
              type="text"
              id="accountName"
              placeholder="Organization Name"
            />

            <label for="accountNumber">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              placeholder="A2489349 S92329 39220"
            />
            <small>
              Don't have an account? <a href="https://www.capitalone.com/commercial/industry-expertise/non-profit-organizations/" target="_blank">Create a bank account with Capital One</a>
            </small>

            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="*******************"
            />
            <label for="password">Confirm Password</label>
            <input
              type="password"
              id="password"
              placeholder="*******************"
            />

            <button type="submit">Join the Community</button>
            <small>
              Already part of the program? <a href="#"></a>
              <Link to="/login">Login</Link>
            </small>
          </form>
        </div>

        <div class="right-section">
          <img src={'/imgs/office.png'} alt="Wind turbine field"/>
        </div>
      </div>
    </>
  )
}