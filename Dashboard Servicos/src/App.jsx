import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./sections/Home";
import Servicos from "./sections/Servicos";
import Contato from "./sections/Contato";
import Sobre from "./sections/Sobre";
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;