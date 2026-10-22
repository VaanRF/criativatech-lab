import React from 'react';
import { Link } from 'react-router-dom';
import BlocoCodigo from '../../components/BlocoCodigo';
import './styles/Programacao.css'; // Usando o CSS que a gente padronizou

export default function ControleIR() {
  return (
    <div className="aula-container">
      {/* Cabeçalho */}
      <header className="aula-header">
        <div className="aula-tag">Programação • Código Base</div>
        <h1 className="aula-titulo">Controle Infravermelho (IR)</h1>
        <p className="aula-descricao">
          Leia e decodifique sinais de controles remotos. Ideal para projetos de automação residencial, robôs controlados por controle remoto e sistemas de comando.
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
            <span className="material-emoji">📡</span>
            <span>Receptor IR (VS1838B)</span>
            <a href="https://meli.la/2kS9Ug9" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
          <div className="material-item">
            <span className="material-emoji">🎮</span>
            <span>Controle remoto qualquer</span>
            <a href="https://meli.la/1Z2uybk" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
        </div>
      </section>

      {/* Seção de Pinagem */}
      <section className="aula-secao">
        <h2>🔌 Pinagem</h2>
        <ul className="aula-lista">
          <li><strong>VCC:</strong> 5V do Arduino</li>
          <li><strong>GND:</strong> GND do Arduino</li>
          <li><strong>OUT (S):</strong> Pino 2 do Arduino</li>
        </ul>
      </section>

      {/* Seção de Bibliotecas */}
      <section className="aula-secao">
        <h2>📚 Bibliotecas</h2>
        <ul className="aula-lista">
          <li>IRremote (by Armin Joachimsmeyer) - Instale pela IDE do Arduino</li>
        </ul>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código Base</h2>
        <p>Copie o código abaixo. Ele fica escutando o ambiente e, quando você aperta um botão do controle, mostra o código HEX na tela:</p>
        
        <BlocoCodigo codigo={`#include <IRremote.hpp>

#define PINO_IR 2

void setup() {
  Serial.begin(9600);
  // Inicia o receptor no pino 2
  IrReceiver.begin(PINO_IR, ENABLE_LED_FEEDBACK);
  Serial.println("Aponte um controle remoto e pressione um botao...");
}

void loop() {
  // Se recebeu algum sinal
  if (IrReceiver.decode()) {
    Serial.print("Protocolo: ");
    Serial.print(getProtocolString(IrReceiver.decodedIRData.protocol));
    Serial.print("  |  Codigo: 0x");
    Serial.println(IrReceiver.decodedIRData.command, HEX);

    // Prepara para o proximo sinal
    IrReceiver.resume(); 
  }
}`} />

      </section>

      {/* Observações */}
      <section className="aula-secao">
        <h2>💡 Observações Importantes</h2>
        <ul className="aula-lista">
          <li>📡 Anote os códigos HEX dos botões do seu controle para usar como comandos.</li>
          <li>🔁 A biblioteca IRremote 4.x tem uma API nova. Certifique-se de usar a versão mais recente.</li>
          <li>💡 Você pode acionar LEDs, motores ou relés com base nos códigos lidos.</li>
        </ul>
      </section>

      {/* Navegação */}
      <footer className="aula-navegacao">
        <Link to="/programacao" className="btn-voltar">← Voltar para Programação</Link>
      </footer>
    </div>
  );
}