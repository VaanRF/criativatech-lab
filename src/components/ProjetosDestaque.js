import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ProjetosDestaque.css';

const projetos = [
  {
    id: 1,
    titulo: 'Carrinho Bluetooth',
    descricao: 'Transformando um carrinho de R$ 10,00 em um carro controlado via Bluetooth com Arduino.',
    tecnologias: ['Arduino', 'HC-06', 'L298N'],
    emoji: '🚗',
    rota: '/projetos' // Futuramente você pode criar uma página específica pra ele
  },
  {
    id: 2,
    titulo: 'Jogo do Choque',
    descricao: 'Circuito interativo com eletrônica básica e Arduino para testar reflexos e precisão.',
    tecnologias: ['Eletrônica', 'Arduino', 'Sensores'],
    emoji: '⚡',
    rota: '/projetos'
  },
  {
    id: 3,
    titulo: 'Jogo Genius',
    descricao: 'O clássico jogo de memória e sequência, com LCD, buzzers e placar via Bluetooth.',
    tecnologias: ['Arduino', 'LCD I2C', 'Bluetooth'],
    emoji: '🎮',
    rota: '/projetos'
  }
];

export default function ProjetosDestaque() {
  return (
    <section className="projetos-destaque-container">
      <div className="projetos-destaque-header">
        <h2 className="projetos-destaque-titulo">Projetos em Destaque</h2>
        <p className="projetos-destaque-subtitulo">
          Do conceito à prática. Veja o que já construímos no laboratório.
        </p>
      </div>

      <div className="projetos-destaque-grid">
        {projetos.map((projeto) => (
          <Link to={projeto.rota} key={projeto.id} className="projeto-destaque-card">
            
            {/* Ícone e Título */}
            <div className="projeto-destaque-topo">
              <span className="projeto-destaque-emoji">{projeto.emoji}</span>
              <h3 className="projeto-destaque-card-titulo">{projeto.titulo}</h3>
            </div>
            
            {/* Descrição */}
            <p className="projeto-destaque-card-descricao">{projeto.descricao}</p>
            
            {/* Tags de Tecnologias */}
            <div className="projeto-destaque-tags">
              {projeto.tecnologias.map((tec, index) => (
                <span key={index} className="projeto-destaque-tag">{tec}</span>
              ))}
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}