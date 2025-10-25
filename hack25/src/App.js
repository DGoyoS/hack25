import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./HomePage/HomePageONG";
import Page1 from "./Page1";
import InfoNGO from "./InfoNGO/InfoNGO";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/InfoNGO" element={<InfoNGO />} />
      </Routes>
    </div>
  );
}

export default App;
