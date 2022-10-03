import React from 'react';
import './App.css';
import CryptoContainer from './component/Home/CryptoContainer';
import NavBar from './component/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CryptoContainer />
    </div>
  );
}

export default App;
