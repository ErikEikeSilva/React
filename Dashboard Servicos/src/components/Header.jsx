import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={fecharMenu}>
          ⚡ Dashboard Serviços
        </Link>
        
        <button 
          className={`menu-mobile ${menuAberto ? 'ativo' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          ☰
        </button>

        <nav className={`nav-menu ${menuAberto ? 'aberto' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={fecharMenu}
          >
            Home
          </Link>
          <Link 
            to="/servicos" 
            className={`nav-link ${location.pathname === '/servicos' ? 'active' : ''}`}
            onClick={fecharMenu}
          >
            Serviços
          </Link>
          <Link 
            to="/contato" 
            className={`nav-link ${location.pathname === '/contato' ? 'active' : ''}`}
            onClick={fecharMenu}
          >
            Contato
          </Link>
          <Link 
            to="/sobre" 
            className={`nav-link ${location.pathname === '/sobre' ? 'active' : ''}`}
            onClick={fecharMenu}
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;