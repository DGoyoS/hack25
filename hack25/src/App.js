import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./HomePageONG";
import Page1 from "./Page1";
import PageCauses from "./PageCauses/PageCauses";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/causes" element={<PageCauses />} />
      </Routes>
    </div>
  );
}

export default App;
