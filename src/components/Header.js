import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        {/* Tirei o span daqui e aumentei a logo via CSS */}
        <img src="/logo.png" alt="Criativa Tech Lab" />
      </Link>

      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/intro/aula/1">Aulas</Link>
        <Link to="/programacao">Programação</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
      </nav>
    </header>
  );
}