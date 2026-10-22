import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Projetos.css';

const listaProjetos = [
  {
    id: 1,
    titulo: 'Carrinho Bluetooth de R$ 10',
    descricao: 'Transformamos um carrinho de brinquedo simples em um veículo controlado por celular usando Arduino e o módulo HC-06.',
    tecnologias: ['Arduino', 'HC-06', 'L298N', 'C++'],
    emoji: '🚗',
    link: '#' // Substitua pelo link do vídeo no Instagram/TikTok depois
  },
  {
    id: 2,
    titulo: 'Jogo Genius do CJ',
    descricao: 'O clássico jogo de memória e sequência. O Arduino sorteia uma sequência de cores e o jogador precisa repetir. Tem placar via Bluetooth!',
    tecnologias: ['Arduino', 'LCD I2C', 'Buzzer', 'Bluetooth'],
    emoji: '🎮',
    link: '#'
  },
  {
    id: 3,
    titulo: 'Jogo do Choque',
    descricao: 'Circuito interativo com eletrônica básica e Arduino para testar reflexos, precisão e coordenação motora.',
    tecnologias: ['Arduino', 'Eletrônica', 'Sensores'],
    emoji: '⚡',
    link: '#'
  }
];

export default function Projetos() {
  return (
    <div className="projetos-page-container">
      
      <header className="projetos-page-header">
        <h1 className="projetos-page-titulo">Nossos Projetos</h1>
        <p className="projetos-page-subtitulo">
          Uma vitrine do que construímos na Criativa Tech Lab. Do papel e fios ao código rodando.
        </p>
      </header>

      <div className="projetos-page-grid">
        {listaProjetos.map((projeto) => (
          <div key={projeto.id} className="projeto-page-card">
            
            <div className="projeto-page-topo">
              <span className="projeto-page-emoji">{projeto.emoji}</span>
              <h2>{projeto.titulo}</h2>
            </div>
            
            <p className="projeto-page-descricao">{projeto.descricao}</p>
            
            <div className="projeto-page-tags">
              {projeto.tecnologias.map((tec, index) => (
                <span key={index} className="projeto-page-tag">{tec}</span>
              ))}
            </div>

            <a href={projeto.link} className="projeto-page-btn" target="_blank" rel="noopener noreferrer">
              Ver Detalhes (Em breve)
            </a>
          </div>
        ))}
      </div>

      <div className="projetos-page-voltar">
        <Link to="/" className="btn-voltar">← Voltar para Home</Link>
      </div>

    </div>
  );
}