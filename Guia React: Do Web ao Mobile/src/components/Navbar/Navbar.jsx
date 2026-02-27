// src/components/Navbar/Navbar.jsx
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Meu App</h2>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">Sobre</a>
        <a href="/contact">Contato</a>
      </div>
    </nav>
  )
}

export default Navbar