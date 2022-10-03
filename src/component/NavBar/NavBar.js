import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <h1 className="nomeNav">Home</h1>
      <h2 className="cryptoNav">Crypto Market Metrics</h2>
      <p className="settingsNav">⚙️</p>
    </div>
  );
}

export default NavBar;
