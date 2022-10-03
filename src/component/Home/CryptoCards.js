import React from "react";
import { useSelector } from "react-redux";
import coinIcon from "../../logo.svg";
import "./home.css";

function CryptoCoins() {
  const coins = useSelector((state) => state.crypto);
  return (
    <div className="cardsContain">
      {coins.map((coin) => (
        <div key={coin.id} className="conisCard">
          <div className="coinIcon">
            <img src={coin.icon} alt="CoinIcon" />
          </div>
          <div className="coinDetails">
            <p>#1</p>
            <h3>Bitcoin</h3>
            <h2>BTC</h2>
            <p className="price">$2893789867686834</p>
          </div>
          <div className="arrowForward">
            <p>➡</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CryptoCoins;
