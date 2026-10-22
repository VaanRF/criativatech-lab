import React, { useState } from 'react';
import './styles/Desafio.css';

export default function Desafio({ titulo, descricao, codigoSolucao }) {
  const [mostrarSolucao, setMostrarSolucao] = useState(false);

  return (
    <div className="desafio-container">
      <div className="desafio-header">
        <span className="desafio-icone">🏆</span>
        <h3>Desafio: {titulo}</h3>
      </div>
      
      <p className="desafio-descricao">{descricao}</p>

      <button 
        className={`desafio-btn ${mostrarSolucao ? 'ativo' : ''}`}
        onClick={() => setMostrarSolucao(!mostrarSolucao)}
      >
        {mostrarSolucao ? 'Esconder Solução 🔒' : 'Ver Solução 🔓'}
      </button>

      {/* Se mostrarSolucao for true, ele renderiza a caixa de código */}
      {mostrarSolucao && (
        <div className="desafio-solucao">
          <div className="aula-codigo-container">
            <div className="aula-codigo-header">
              <span>C++</span>
              <span>Solução do Desafio</span>
            </div>
            <pre className="aula-codigo">
              <code>{codigoSolucao}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}