import './App.css';
import { Route,Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';



function App() {
  return (
    <div
      className="App bg-black text-white bg-[url('./assets/harry-potter-bg.jpg')] w-full h-screen"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
