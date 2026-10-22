import React from 'react';
import { Link } from 'react-router-dom';
import BlocoCodigo from '../../components/BlocoCodigo'; // Importando o botão de copiar

// Importe o CSS da aula se ele for compartilhado, ou crie um específico depois
// import '../intro/styles/Aula.css'; 
import './styles/Programacao.css'; 

export default function Bluetooth() {
  return (
    <div className="aula-container">
      {/* Cabeçalho */}
      <header className="aula-header">
        <div className="aula-tag">Programação • Código Base</div>
        <h1 className="aula-titulo">Comunicação Bluetooth (HC-05/06)</h1>
        <p className="aula-descricao">
          Este código permite enviar e receber dados entre o Arduino e um celular via Bluetooth. 
          Use o Monitor Serial para testar e enviar comandos para acender um LED.
        </p>
      </header>

      {/* Seção de Materiais */}
      <section className="aula-secao secao-materiais">
        <h2>🧩 Materiais Necessários</h2>
        <div className="materiais-grid">
          <div className="material-item">
            <span className="material-emoji">🔌</span>
            <span>Arduino Uno</span>
            <a href="https://meli.la/2RggVPo" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
          <div className="material-item">
            <span className="material-emoji">📶</span>
            <span>Módulo Bluetooth HC-05 ou HC-06</span>
            <a href="https://meli.la/2kS9Ug9" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
          <div className="material-item">
            <span className="material-emoji">💡</span>
            <span>LED + Resistor 220Ω</span>
            <a href="https://meli.la/1gSceXs" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
          <div className="material-item">
            <span className="material-emoji">⚡</span>
            <span>Divisor de Tensão (1kΩ e 2kΩ)</span>
            <a href="https://meli.la/1Z2uybk" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
        </div>
      </section>

      {/* Seção de Pinagem */}
      <section className="aula-secao">
        <h2>🔌 Pinagem</h2>
        <ul className="aula-lista">
          <li><strong>VCC do módulo:</strong> 5V do Arduino</li>
          <li><strong>GND do módulo:</strong> GND do Arduino</li>
          <li><strong>TX do módulo:</strong> Pino 10 (RX virtual)</li>
          <li><strong>RX do módulo:</strong> Pino 11 (TX virtual) via Divisor de Tensão</li>
        </ul>
        
        <div className="aula-imagem-container">
          <span className="aula-imagem-legenda">⚠️ Cuidado: O RX do HC-06 suporta apenas 3.3V. Use um divisor de tensão para não queimar o módulo!</span>
        </div>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código Base</h2>
        <p>Copie o código abaixo. Ele cria uma porta serial virtual nos pinos 10 e 11:</p>
        
        <BlocoCodigo codigo={`#include <SoftwareSerial.h>

// Pinos 10 (RX) e 11 (TX) para o Bluetooth
SoftwareSerial bluetooth(10, 11); 

void setup() {
  Serial.begin(9600);       // Monitor Serial (USB)
  bluetooth.begin(9600);    // Módulo Bluetooth
  
  pinMode(13, OUTPUT);      // LED embutido no pino 13
  Serial.println("Bluetooth iniciado. Aguardando comandos...");
}

void loop() {
  // Envia dados do computador para o celular
  if (Serial.available()) {
    bluetooth.write(Serial.read());
  }

  // Recebe dados do celular
  if (bluetooth.available()) {
    char comando = bluetooth.read();
    
    // Mostra no Monitor Serial o que chegou
    Serial.print("Recebido: ");
    Serial.println(comando);

    // Exemplo: liga/desliga LED
    if (comando == '1') {
      digitalWrite(13, HIGH);
      bluetooth.println("LED LIGADO");
    } else if (comando == '0') {
      digitalWrite(13, LOW);
      bluetooth.println("LED DESLIGADO");
    }
  }
}`} />

      </section>

      {/* Observações */}
      <section className="aula-secao">
        <h2>💡 Observações Importantes</h2>
        <ul className="aula-lista">
          <li>Use o app <strong>"Serial Bluetooth Terminal"</strong> (Android) para testar.</li>
          <li>A senha padrão do módulo geralmente é <strong>1234</strong> ou <strong>0000</strong>.</li>
          <li>Você pode digitar "1" ou "0" no app para acender e apagar o LED.</li>
        </ul>
      </section>

      {/* Navegação */}
      <footer className="aula-navegacao">
        <Link to="/programacao" className="btn-voltar">← Voltar para Programação</Link>
      </footer>
    </div>
  );
}