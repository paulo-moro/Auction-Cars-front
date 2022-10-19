// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { AuctionCard } from './components/auctionCard';
import { Header } from './components/header';
import GlobalStyle from './styles/global';


function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      <AuctionCard />

    </div>
  );
}

export default App;
