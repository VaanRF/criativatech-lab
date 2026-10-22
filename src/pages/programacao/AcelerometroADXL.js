import React from 'react';
import { Link } from 'react-router-dom';
import BlocoCodigo from '../../components/BlocoCodigo';
import './styles/Programacao.css'; 

export default function AcelerometroADXL() {
  return (
    <div className="aula-container">
      {/* Cabeçalho */}
      <header className="aula-header">
        <div className="aula-tag">Programação • Código Base</div>
        <h1 className="aula-titulo">Acelerômetro ADXL345 (I2C)</h1>
        <p className="aula-descricao">
          O ADXL345 mede a aceleração nos eixos X, Y e Z. Ele é muito usado em detecção de inclinação, movimento, queda livre e vibração em robôs e drones.
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
            <span className="material-emoji">📐</span>
            <span>Módulo Acelerômetro ADXL345</span>
            <a href="https://meli.la/2kS9Ug9" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
          <div className="material-item">
            <span className="material-emoji">🔗</span>
            <span>Jumpers (Macho-Fêmea) 4x</span>
            <a href="https://meli.la/1Z2uybk" className="material-link" target="_blank" rel="noopener noreferrer">Comprar</a>
          </div>
        </div>
      </section>

      {/* Seção de Pinagem */}
      <section className="aula-secao">
        <h2>🔌 Pinagem (Comunicação I2C)</h2>
        <ul className="aula-lista">
          <li><strong>VCC:</strong> 3.3V do Arduino <em>(Evite 5V se o módulo não tiver regulador)</em></li>
          <li><strong>GND:</strong> GND do Arduino</li>
          <li><strong>SDA:</strong> Pino A4 do Arduino</li>
          <li><strong>SCL:</strong> Pino A5 do Arduino</li>
        </ul>
      </section>

      {/* Seção de Bibliotecas */}
      <section className="aula-secao">
        <h2>📚 Bibliotecas</h2>
        <ul className="aula-lista">
          <li>Adafruit ADXL345 (Instale pelo Gerenciador de Bibliotecas)</li>
          <li>Adafruit Unified Sensor (Necessária para a anterior)</li>
          <li>Wire (Já vem instalada na IDE do Arduino)</li>
        </ul>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código Base</h2>
        <p>Copie o código abaixo. Ele vai ler a aceleração em m/s² e imprimir no Monitor Serial:</p>
        
        <BlocoCodigo codigo={`#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_ADXL345_U.h>

// Cria o objeto do sensor
Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified(12345);

void setup() {
  Serial.begin(9600);

  // Tenta iniciar o sensor
  if (!accel.begin()) {
    Serial.println("ADXL345 nao detectado. Verifique as conexoes I2C.");
    while (1); // Trava o código aqui se não achar o sensor
  }

  // Configura a escala de leitura para +/- 16g
  accel.setRange(ADXL345_RANGE_16_G);
  Serial.println("ADXL345 pronto!");
}

void loop() {
  sensors_event_t event;
  accel.getEvent(&event);

  // Imprime a aceleração nos 3 eixos
  Serial.print("X: "); Serial.print(event.acceleration.x); Serial.print("  ");
  Serial.print("Y: "); Serial.print(event.acceleration.y); Serial.print("  ");
  Serial.print("Z: "); Serial.print(event.acceleration.z); Serial.println(" m/s2");

  delay(200); // Leitura a cada 0.2 segundos
}`} />

      </section>

      {/* Observações */}
      <section className="aula-secao">
        <h2>💡 Observações Importantes</h2>
        <ul className="aula-lista">
          <li><strong>⚠️ Tensão:</strong> Alimente preferencialmente em 3.3V. Em 5V, alguns módulos queimam.</li>
          <li><strong>📏 Escala:</strong> O padrão do código é ±16g, mas você pode mudar para ±2g, ±4g ou ±8g.</li>
          <li><strong>🧭 Alternativa:</strong> Também é possível usar via SPI (mais rápido, mas usa mais fios).</li>
        </ul>
      </section>

      {/* Navegação */}
      <footer className="aula-navegacao">
        <Link to="/programacao" className="btn-voltar">← Voltar para Programação</Link>
      </footer>
    </div>
  );
}