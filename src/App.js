import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinDetails from './component/Details/CoinDetails';
import CryptoContainer from './component/Home/CryptoContainer';
import NavBar from './component/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CryptoContainer />} />
          <Route path="/:id" element={<CoinDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
