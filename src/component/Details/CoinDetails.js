import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './details.css';

function CoinDetails() {
  const { id } = useParams();

  const { crypto, status } = useSelector((state) => state.crypto);
  return (
    <div className="coinDtailsContainer">
      {status === 'pending' ? (
        <div className="ring">
          Loading
          <span />
        </div>
      ) : (
        crypto.map((coin) => {
          if (coin.id === id) {
            return (
              <div key={coin.id} className="detailsContainer">
                <div className="coinHeader">
                  <div className="coinImg">
                    <div className="coinIcons">
                      <p><img src={coin.icon} alt="Coin Icon" /></p>
                    </div>
                  </div>
                  <div className="coniName">
                    <h2>
                      coin:
                      {' '}
                      {coin.name}
                    </h2>
                    Ranked at: #
                    {coin.rank}
                  </div>
                </div>

                <div className="coinInfo">
                  <div className="coinInfoName">
                    <p>Coin name</p>
                    <p>{coin.name}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Coin symbol</p>
                    <p>{coin.symbol}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Ranking</p>
                    <p>{coin.rank}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Coin Price</p>
                    <p>{coin.price}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Coin volume</p>
                    <p>{coin.volum}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Market cap</p>
                    <p>{coin.marketCap}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Price change day</p>
                    <p>{coin.priceChange1d}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Price change Hour</p>
                    <p>{coin.priceChange1h}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Price change Week</p>
                    <p>{coin.priceChange1w}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Coin total supply</p>
                    <p>{coin.totalSupply}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Coin availability Supply</p>
                    <p>{coin.availableSupply}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Twitter link</p>
                    <p>{coin.twitterUrl}</p>
                  </div>

                  <div className="coinInfoName">
                    <p>Website link</p>
                    <p>{coin.websiteUrl}</p>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })
      )}
    </div>
  );
}

export default CoinDetails;
