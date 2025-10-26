import React from "react";
import { Link } from "react-router-dom";


export default function Page1() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>This is Page 1</h2>
      <Link to="/"><button>Go Back Home</button></Link>
    </div>
  );
}
