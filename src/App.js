import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
