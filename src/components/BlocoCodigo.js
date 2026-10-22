import React, { useState } from 'react';
import './styles/BlocoCodigo.css';

export default function BlocoCodigo({ codigo }) {
  const [copiado, setCopiado] = useState(false);

  const copiarParaAreaDeTransferencia = () => {
    // Cria um elemento de texto temporário na tela
    const textArea = document.createElement("textarea");
    textArea.value = codigo;
    
    // Deixa ele invisível e cola no final da página
    textArea.style.position = "absolute";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    
    // Seleciona o texto (funciona no celular!)
    textArea.select();
    textArea.setSelectionRange(0, 99999); // Para iOS (iPhone)
    
    try {
      // Manda o sistema copiar
      document.execCommand('copy');
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar', err);
      alert('Não foi possível copiar automaticamente. Selecione o texto manualmente.');
    }
    
    // Remove o elemento temporário da página
    document.body.removeChild(textArea);
  };

  return (
    <div className="aula-codigo-container">
      <div className="aula-codigo-header">
        <span>C++</span>
        <button 
          className={`btn-copiar ${copiado ? 'copiado' : ''}`} 
          onClick={copiarParaAreaDeTransferencia}
        >
          {copiado ? '✅ Copiado!' : '📋 Copiar'}
        </button>
      </div>
      <pre className="aula-codigo">
        <code>{codigo}</code>
      </pre>
    </div>
  );
}