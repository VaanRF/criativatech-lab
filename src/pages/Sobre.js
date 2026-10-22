import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Sobre.css';

export default function Sobre() {
  return (
    <div className="sobre-container">
      
      {/* Cabeçalho da Página */}
      <header className="sobre-header">
        <div className="sobre-tag">Quem Somos</div>
        <h1 className="sobre-titulo">Muito prazer, Criativa Tech Lab</h1>
               <img 
          src="/logo.png" 
          alt="Logo Criativa Tech Lab" 
          className="sobre-logo" 
        />
        <p className="sobre-subtitulo">
          Transformando ideias em código, fios e projetos reais.
        </p>
      </header>

      {/* Seção 1: A História */}
      <section className="sobre-secao">
        <div className="sobre-texto">
          <h2>🧪 O que é a Tech Lab?</h2>
          <p>
            A Criativa Tech Lab nasceu do desejo de descomplicar a tecnologia. Muitas vezes, a eletrônica e a programação parecem "bichos de sete cabeças", mas nós acreditamos que qualquer pessoa pode criar coisas incríveis se tiver a didática certa.
          </p>
          <p>
            Não somos apenas um site de aulas. Somos um laboratório de criação. Aqui, você não vai apenas copiar códigos, vai entender como eles funcionam para construir seus próprios projetos — seja um carrinho de controle remoto, um semáforo inteligente ou um jogo interativo.
          </p>
        </div>
      </section>

      {/* Seção 2: O Criador (Vanderson) */}
      <section className="sobre-secao">
        <div className="sobre-texto">
          <h2>👨‍🏫 Quem está por trás?</h2>
          <p>
            Oi! Eu sou o <strong>Vanderson Ribeiro</strong>. Sou professor, formado em Ciências Contábeis e Análise e Desenvolvimento de Sistemas, e atualmente curso Pedagogia. 
          </p>
          <p>
            Minha paixão é ver o momento exato em que o olhar de um aluno brilha ao ver o seu primeiro LED acender ou o seu primeiro código funcionar. A Tech Lab é a materialização desse desejo de levar a cultura maker e a educação tecnológica para o maior número de pessoas possível, seja dentro ou fora da sala de aula.
          </p>
        </div>
      </section>

      {/* Seção 3: O que acreditamos */}
      <section className="sobre-secao">
        <h2>🎯 Nossos Valores</h2>
        <div className="sobre-valores-grid">
          <div className="sobre-valor-card">
            <span>🛠️</span>
            <h3>Aprender Fazendo</h3>
            <p>Nada de só olhar a teoria. O conhecimento fixa quando colocamos a mão na massa.</p>
          </div>
          <div className="sobre-valor-card">
            <span>💡</span>
            <h3>Didática Acessível</h3>
            <p>Traduzir "tecniquês" para o português claro. Sem enrolação ou complexidade desnecessária.</p>
          </div>
          <div className="sobre-valor-card">
            <span>🚀</span>
            <h3>Criatividade Sem Limites</h3>
            <p>A tecnologia é a ferramenta. O limite para o que você pode criar é a sua imaginação.</p>
          </div>
        </div>
      </section>

      {/* Call to Action (Chamada para ação) */}
      <section className="sobre-cta">
        <h2>Bora construir algo juntos?</h2>
        <p>Explore as aulas, os projetos e venha fazer parte do nosso laboratório.</p>
        <div className="sobre-cta-botoes">
          <Link to="/intro/aula/1" className="btn-primario">Começar pelo Módulo 1</Link>
          <a href="https://instagram.com/criativatech.lab" target="_blank" rel="noopener noreferrer" className="btn-secundario">Me seguir no Instagram</a>
        </div>
      </section>

    </div>
  );
}