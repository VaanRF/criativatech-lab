// src/pages/programacao/Index.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Index.css';
import Header from '../../components/Header';

const codigosBase = [
  {
    id: 'bluetooth',
    titulo: 'Comunicação Bluetooth (HC-05/HC-06)',
    descricao: 'Envie e receba comandos pelo celular via Bluetooth serial.',
    emoji: '📶',
    rota: '/programacao/bluetooth',
    dificuldade: 'Intermediário',
  },
  {
    id: 'acelerometro',
    titulo: 'Acelerômetro ADXL345',
    descricao: 'Leia os eixos X, Y e Z usando comunicação I2C.',
    emoji: '📐',
    rota: '/programacao/acelerometro',
    dificuldade: 'Intermediário',
  },
  {
    id: 'rfid',
    titulo: 'Leitor RFID (MFRC522)',
    descricao: 'Leia tags e cartões RFID com o módulo RC522 via SPI.',
    emoji: '🪪',
    rota: '/programacao/rfid',
    dificuldade: 'Avançado',
  },
  {
    id: 'ir',
    titulo: 'Controle Infravermelho (IR)',
    descricao: 'Receba e decodifique sinais de controles remotos IR.',
    emoji: '🎛️',
    rota: '/programacao/ir',
    dificuldade: 'Intermediário',
  },
];

export default function ProgramacaoIndex() {
  
  return (
  <div> <Header />   
    <div className="programacao-container">
      <header className="programacao-header">
        <h1>💻 Programação com Arduino</h1>
        <p>
          Repositório de <strong>códigos base</strong> prontos para você usar como
          ponto de partida nos seus projetos. Copie, teste, adapte e crie!
        </p>
      </header>

      <div className="codigos-grid">
        {codigosBase.map((codigo) => (
          <Link to={codigo.rota} key={codigo.id} className="codigo-card">
            <span className="codigo-emoji">{codigo.emoji}</span>
            <h2>{codigo.titulo}</h2>
            <p>{codigo.descricao}</p>
            <span className={`badge badge-${codigo.dificuldade.toLowerCase()}`}>
              {codigo.dificuldade}
            </span>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}