import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';

function CryptoCoins() {
  const { crypto, status } = useSelector((state) => state.crypto);

  return (
    <div>
      <div className="hero">
        <div className="heroDetails">
          <p>BTC Market cap</p>
          {crypto.map((btc) => {
            if (btc.id === 'bitcoin') {
              return (
                <div key={btc.id}>
                  <h2>{btc.marketCap}</h2>
                  <div>
                    <p>BTC Market Price</p>
                    <h2>
                      $
                      {btc.price}
                    </h2>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className="coinIcons">
        <p>💰</p>
        <p>₿ </p>
        <p>🪙</p>
      </div>
      <div className="cardsContain">
        {status === 'pending' ? (
          <div className="ring">
            Loading
            <span />
          </div>
        ) : (
          crypto.map((coin) => (
            <div key={coin.id} className="conisCard">
              <div className="coinIcon">
                <img src={coin.icon} alt="CoinIcon" />
              </div>
              <div className="coinDetails">
                <p className="coinRank">
                  #
                  {coin.rank}
                </p>
                <h3>{coin.name}</h3>
                <h2>{coin.symbol}</h2>
                <p className="price">
                  $
                  {coin.price}
                </p>
              </div>
              <Link className="enterIcon" to={`${coin.id}`}>
                <div className="arrowForward">
                  <p>➡</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CryptoCoins;
