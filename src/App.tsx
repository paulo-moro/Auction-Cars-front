import ModalLogin from "./components/Modals/modalLogin";
import ModalSucess from "./components/Modals/modalLogin";
import ModalRegister from "./components/Modals/modalRegister";
import ModalAnnouncement from "./components/Modals/modalAnnouncement";

import HomePage from './pages/Homepage';
import GlobalStyle from './styles/global';
import { Pages } from './pages/index';

function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <Pages/>
      </div>
  );
}

export default App;