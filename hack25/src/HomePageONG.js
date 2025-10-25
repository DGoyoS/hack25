import React from "react";
import { Link } from "react-router-dom";

export default function HomePageONG() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>HOLA!</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "40px" }}>
        <Link to="/page1"><button>Page 1</button></Link>
        <Link to="/causes"><button>Causes</button></Link>
      </div>
    </div>
  );
}
