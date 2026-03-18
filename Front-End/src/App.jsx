import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './routes/approutes';
import NavBar from './components/navbar/navbar';

function App() {
  return (
      <Router>
      <NavBar></NavBar>
      <AppRoutes></AppRoutes>
    </Router>
    
  );
}

export default App;