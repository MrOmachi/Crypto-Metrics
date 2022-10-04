import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <Link className="navLink" to="/">
        <h1 className="nameNav">My Wallet</h1>
      </Link>
      <div className="cryptoNav">
        <h2 className="notifNav">🔔</h2>
        <p className="settingsNav">⚙️</p>
      </div>
    </div>
  );
}

export default NavBar;
