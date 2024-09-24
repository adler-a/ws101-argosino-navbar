
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import NavBar from './Component/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="main">
        <Routes>
          <Route path="/home" element={<Home/>}/> 
          <Route path="/about" element={<About/>}/> 
          <Route path="/contact" element={<Contact/>}/> 
        </Routes>
      </div>

    </div>
  );
}

export default App;
