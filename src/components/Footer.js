import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo e Descrição */}
        <div className="footer-brand">
          <Link to="/">
            <img src="/logo.png" alt="Criativa Tech Lab" className="footer-logo" />
          </Link>
          <p className="footer-descricao">
            Laboratório de criação com tecnologia.<br />
            Transformando ideias em código e projetos reais.
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="footer-links">
          <h4 className="footer-titulo">Navegação</h4>
          <Link to="/">Home</Link>
          <Link to="/intro/aula/1">Aulas</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/sobre">Sobre</Link>
        </div>

        {/* Redes Sociais */}
        <div className="footer-social">
          <h4 className="footer-titulo">Siga a Tech Lab</h4>
          <a href="https://instagram.com/criativatech.lab" target="_blank" rel="noopener noreferrer">
            Instagram: @criativatech.lab
          </a>
          <a href="https://tiktok.com/@criativatechlab" target="_blank" rel="noopener noreferrer">
            TikTok: @criativatechlab
          </a>
        </div>

      </div>

      {/* Linha de Copyright */}
      <div className="footer-bottom">
        <p>&copy; {anoAtual} Criativa Tech Lab. Todos os direitos reservados.</p>
        <p>Feito com 💙 e muito café.</p>
      </div>
    </footer>
  );
}