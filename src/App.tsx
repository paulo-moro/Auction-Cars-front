import { useState } from 'react';
import ModalLogin from './components/Modals/modalLogin';
import HomePage from './pages/Homepage';
import GlobalStyle from './styles/global';

function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <HomePage/>
    </div>
  );
}

export default App;