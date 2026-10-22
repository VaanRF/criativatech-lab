import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ModulosList.css';

const modulos = [
  {
    id: 1,
    titulo: 'Introdução à Programação',
    descricao: 'Conceitos básicos e primeiras interações com Arduino.',
    emoji: '🤖',
    aulas: 10,
    rota: '/intro/aula/1'
  },
  // A eletrônica básica foi removida daqui
  {
    id: 3,
    titulo: 'Programação com Arduino',
    descricao: 'Repositório de códigos base para projetos reais.',
    emoji: '💻',
    aulas: 4,
    rota: '/programacao'
  },
  {
    id: 4,
    titulo: 'Sensores e Atuadores',
    descricao: 'Interação com o mundo físico e automação.',
    emoji: '📡',
    aulas: 7,
    rota: '/sensores/1' // Futuro
  },
];

export default function ModulosList() {
  return (
    <section className="modulos-container">
      <div className="modulos-header">
        <h2 className="modulos-titulo">Nossos Módulos</h2>
        <p className="modulos-subtitulo">
          Trilhas de aprendizado para você dominar a tecnologia na prática.
        </p>
      </div>

      <div className="modulos-grid">
        {modulos.map((modulo) => (
          <Link to={modulo.rota} key={modulo.id} className="modulo-card">
            <span className="modulo-emoji">{modulo.emoji}</span>
            <h3 className="modulo-card-titulo">{modulo.titulo}</h3>
            <p className="modulo-card-descricao">{modulo.descricao}</p>
            <div className="modulo-footer">
              <span className="modulo-aulas">{modulo.aulas} aulas</span>
              <span className="modulo-seta">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}