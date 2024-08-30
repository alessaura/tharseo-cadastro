// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.png" alt="Logo Tharseo" />
      <div className="buttons">
        <button className="btn access">Acessar</button>
        <button className="btn create-account">Criar minha conta</button>
      </div>
    </header>
  );
}

export default Header;
