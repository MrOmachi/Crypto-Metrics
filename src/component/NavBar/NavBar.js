import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <h1 className="nameNav">My Wallet</h1>
      <div className="cryptoNav">
        <h2 className="notifNav">🔔</h2>
        <p className="settingsNav">⚙️</p>
      </div>
    </div>
  );
}

export default NavBar;
