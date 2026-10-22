import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        
        {/* A Logo Grande com Efeito */}
        <img 
          src="/logo.png" 
          alt="Criativa Tech Lab" 
          className="hero-logo" 
        />

        <h1 className="hero-titulo">
          Laboratório de Criação com Tecnologia
        </h1>
        
        <p className="hero-subtitulo">
          Programação, eletrônica e projetos maker. Do zero ao código, construindo o futuro com as próprias mãos.
        </p>

        <div className="hero-botoes">
          <Link to="/projetos" className="btn-primario">
            Ver Projetos
          </Link>
          <Link to="/intro/aula/1" className="btn-secundario">
            Começar a Aprender
          </Link>
        </div>

      </div>
    </section>
  );
}