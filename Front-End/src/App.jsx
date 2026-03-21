import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import { useState } from "react"

import AppRoutes from './routes/approutes';
import NavBar from './components/navbar/navbar';
import LoginModal from './components/loginModal/loginModal';
import LoginBox from './components/loginBox/loginBox';

function App() {

  const [showLogin, setShowLogin] = useState(false);


  return (
      <Router>
      <NavBar onLoginClick={() => setShowLogin(true)}></NavBar>
      <AppRoutes></AppRoutes>

      {/*Modal login*/}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      ><LoginBox></LoginBox>
      </LoginModal>

    </Router>
    
  );
}

export default App;