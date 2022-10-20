import GlobalStyle from './styles/global';
import React from 'react';
import { Header } from './components/header';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header/>
    </div>
  );
}

export default App;