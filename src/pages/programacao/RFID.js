import React from 'react';
import { Link } from 'react-router-dom';
import BlocoCodigo from '../../components/BlocoCodigo';
import './styles/Programacao.css'; 

export default function RFID() {
  return (
    <div className="aula-container">
      {/* Cabeçalho */}
      <header className="aula-header">
        <div className="aula-tag">Programação • Código Base</div>
        <h1 className="aula-titulo">Leitor RFID MFRC522</h1>
        <p className="aula-descricao">
          Este código lê o UID (identificador único) de tags e cartões RFID. É a base para projetos de controle de acesso, catracas, presença e autenticação.
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
            <span className="material-emoji">🪪</span>
            <span>Módulo RFID RC522</span>
            <a href="https://meli.la/2kS9Ug9" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
          <div className="material-item">
            <span className="material-emoji">📇</span>
            <span>Tags ou Cartões RFID (13.56 MHz)</span>
            <a href="https://meli.la/1Z2uybk" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
          <div className="material-item">
            <span className="material-emoji">🔗</span>
            <span>Jumpers (Macho-Fêmea)</span>
            <a href="https://meli.la/2XCst25" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
        </div>
      </section>

      {/* Seção de Pinagem */}
      <section className="aula-secao">
        <h2>🔌 Pinagem (Comunicação SPI)</h2>
        <ul className="aula-lista">
          <li><strong>3.3V:</strong> 3.3V do Arduino <em>(NUNCA use 5V!)</em></li>
          <li><strong>RST:</strong> Pino 9</li>
          <li><strong>GND:</strong> GND do Arduino</li>
          <li><strong>MISO:</strong> Pino 12</li>
          <li><strong>MOSI:</strong> Pino 11</li>
          <li><strong>SCK:</strong> Pino 13</li>
          <li><strong>SDA (SS):</strong> Pino 10</li>
          <li><strong>IRQ:</strong> Não conectado</li>
        </ul>
      </section>

      {/* Seção de Bibliotecas */}
      <section className="aula-secao">
        <h2>📚 Bibliotecas</h2>
        <ul className="aula-lista">
          <li>MFRC522 (by GithubCommunity) - Instale pelo Gerenciador de Bibliotecas da IDE do Arduino</li>
        </ul>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código Base</h2>
        <p>Copie o código abaixo. Aproxime uma tag do leitor e o código UID aparecerá no Monitor Serial:</p>
        
        <BlocoCodigo codigo={`#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN  10
#define RST_PIN 9

MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init();
  Serial.println("Aproxime uma tag RFID do leitor...");
}

void loop() {
  // Verifica se há novo cartão
  if (!rfid.PICC_IsNewCardPresent()) return;
  if (!rfid.PICC_ReadCardSerial()) return;

  Serial.print("UID da tag: ");
  for (byte i = 0; i < rfid.uid.size; i++) {
    Serial.print(rfid.uid.uidByte[i] < 0x10 ? " 0" : " ");
    Serial.print(rfid.uid.uidByte[i], HEX);
  }
  Serial.println();

  // Finaliza a leitura do cartão
  rfid.PICC_HaltA();
  rfid.PCD_StopCrypto1();
}`} />

      </section>

      {/* Observações */}
      <section className="aula-secao">
        <h2>💡 Observações Importantes</h2>
        <ul className="aula-lista">
          <li><strong>⚠️ ATENÇÃO:</strong> O RC522 funciona SOMENTE em 3.3V. Se você ligar no pino de 5V do Arduino, o módulo queima na hora.</li>
          <li>📇 Tags comuns: cartão de ônibus, chaveiros, adesivos NTAG.</li>
          <li>💾 Guarde os UIDs lidos para comparar em projetos de controle de acesso.</li>
        </ul>
      </section>

      {/* Navegação */}
      <footer className="aula-navegacao">
        <Link to="/programacao" className="btn-voltar">← Voltar para Programação</Link>
      </footer>
    </div>
  );
}