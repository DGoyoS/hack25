import { Link } from "react-router-dom";
import './Login.css';

export default function LoginNGO() {
  return (
    <div class="container">
    <div class="left-section">
      <h1>Non Profit Care <br /> Program</h1>

      <form id="loginForm">
        <label for="accountNumber">Account Number</label>
        <input
          type="text"
          id="accountNumber"
          placeholder="A2489349 S92329 39220"
        />

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="*******************"
        />
        <small><a href="#">Forgot your password or account number?</a></small>

        <button type="submit">Login</button>
        <small>
          Don't have an account? <a href="#"></a>
          <Link to="/register-non-profit">Join our program</Link>
        </small>
      </form>
    </div>

    <div class="right-section">
      <img src={'/imgs/wind.png'} alt="Wind turbine field"/>
    </div>
  </div>
  )
}