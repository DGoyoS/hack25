import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./HomePage/HomePageONG";
import InfoNGO from "./InfoNGO/InfoNGO";
import RegisterNGO from "./Register/RegisterNGO";
import Login from "./Login/Login";
import RegisterDonor from "./Register/RegisterDonor";
import SelectPage from "./Select/Select";
import Analytics from "./Analytics/Analytics";
import Transactions from "./Transactions/Transactions";
import PageCauses from "./PageCauses/PageCauses";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InfoNGO" element={<InfoNGO />} />
        <Route path="/register-non-profit" element={<RegisterNGO />} />
        <Route path="/register" element={<RegisterDonor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/causes" element={<PageCauses />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
