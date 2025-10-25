import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./HomePageONG";
import Page1 from "./Page1";
import RegisterNGO from "./Register/RegisterNGO";
import LoginNGO from "./Login/LoginNGO";
import LoginDonor from "./Login/LoginDonor";
import RegisterDonor from "./Register/RegisterDonor";
import SelectPage from "./Select/Select";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/register-non-profit" element={<RegisterNGO />} />
        <Route path="/register" element={<RegisterDonor />} />
        <Route path="/login-non-profit" element={<LoginNGO />} />
        <Route path="/login" element={<LoginDonor />} />
        <Route path="/selection" element={<SelectPage />} />
      </Routes>
    </div>
  );
}

export default App;
