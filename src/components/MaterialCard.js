import React from 'react';
// Importa a lista de produtos
import { produtos } from '../data/produtos';

export default function MaterialCard({ produtoId }) {
  // Busca o produto na lista pelo ID
  const produto = produtos[produtoId];

  // Se o produto não existir na lista (erro de digitação), não mostra nada
  if (!produto) {
    console.warn(`Produto "${produtoId}" não encontrado no arquivo produtos.js`);
    return null;
  }

  return (
    <div className="material-item">
      <span className="material-emoji">{produto.emoji}</span>
      <span>{produto.nome}</span>
      <a 
        href={produto.link} 
        className="material-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Comprar
      </a>
    </div>
  );
}