import './App.css';
import { Route,Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Films from './pages/Films';
import Books from './pages/Books';
import Spells from './pages/Spells';



function App() {
  return (
    <div className="App bg-[url('./assets/harry-potter-bg.jpg')] bg-cover bg-fixed text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/films" element={<Films />} />
        <Route path="/books" element={<Books />} />
        <Route path="/spells" element={<Spells />} />
      </Routes>
    </div>
  );
}

export default App;
