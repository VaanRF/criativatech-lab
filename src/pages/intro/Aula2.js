import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Aula.css'; // Usando o CSS global que a gente padronizou
import Desafio from '../../components/Desafio'; // Importando o componente de desafio
// Se você tiver uma imagem para a aula 2, descomente a linha abaixo e ajuste o nome:
import circuitImg2 from '../../assets/imagens/aula2-circuit.png'; // Ajuste o caminho e nome da imagem conforme necessário
import BlocoCodigo from '../../components/BlocoCodigo';
import MaterialCard from '../../components/MaterialCard'; // Importando o componente de cartão de material

export default function Aula2() {
  return (
    <div className="aula-container">
      {/* Cabeçalho da Aula */}
      <header className="aula-header">
        <div className="aula-tag">Módulo 1 • Aula 2</div>
        <h1 className="aula-titulo">Dois LEDs Alternados</h1>
        <p className="aula-descricao">
          Vamos dobrar o desafio! Agora você vai aprender a controlar dois LEDs ao mesmo tempo, fazendo com que eles pisquem de forma alternada, como um pisca-pisca de emergência.
        </p>
      </header>

      {/* Seção de Materiais */}
       <section className="aula-secao secao-materiais">
        <h2>🧩 Materiais Necessários</h2>
        <div className="materiais-grid">
          
          {/* Só chamamos o componente! */}
          <MaterialCard produtoId="arduinoUno" />
          <MaterialCard produtoId="led" />
          <MaterialCard produtoId="resistor" />
          <MaterialCard produtoId="protoboard" />
          <MaterialCard produtoId="jumpers" />
          
        </div>
      </section>

      {/* Seção de Teoria */}
      <section className="aula-secao">
        <h2>Como funciona?</h2>
        <p>
          Na aula anterior, usamos o pino 13 para controlar um LED. Agora, vamos adicionar um segundo LED no <strong>pino 12</strong>. 
          A mágica da alternância acontece no tempo: enquanto o pino 13 fica em HIGH, o pino 12 fica em LOW. Depois, invertemos.
        </p>
        
        {/* Espaço reservado para a imagem da aula 2 */}
        <div className="aula-imagem-container">
          <img src={circuitImg2} alt="Esquema de ligação de dois LEDs" className="aula-imagem" />
          <span className="aula-imagem-legenda">Esquema de ligação: Pino 13 → LED 1 e Pino 12 → LED 2 (ambos com resistores indo para o GND)</span>
        </div>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código</h2>
        <p>Copie o código abaixo e cole na sua IDE do Arduino:</p>
        

          <pre className="aula-codigo">
            <BlocoCodigo codigo={`void setup() {
  // Configura os pinos 13 e 12 como saídas
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
}

void loop() {
  // LED 1 acende, LED 2 apaga
  digitalWrite(13, HIGH);
  digitalWrite(12, LOW);
  delay(500); // Espera meio segundo
  
  // LED 1 apaga, LED 2 acende
  digitalWrite(13, LOW);
  digitalWrite(12, HIGH);
  delay(500); // Espera meio segundo
}`}
            />
          </pre>
      
      </section>

      {/* O Desafio! */}
      <Desafio 
        titulo="Ritmo de Fórmula 1"
        descricao="O pisca-pisca atual está um pouco lento. Tente alterar o código para que os LEDs pisquem super rápido, como o pisca de um carro de corrida (dica: diminua o valor do delay para 100)."
        codigoSolucao={`void setup() {
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  digitalWrite(12, LOW);
  delay(100); // Muito mais rápido!
  
  digitalWrite(13, LOW);
  digitalWrite(12, HIGH);
  delay(100); // Muito mais rápido!
}`}
      />

      {/* Navegação entre Aulas */}
      <footer className="aula-navegacao">
        <Link to="/intro/aula/1" className="btn-voltar">← Aula Anterior</Link>
        <Link to="/intro/aula/3" className="btn-proxima">Próxima Aula: Semáforo →</Link>
      </footer>
    </div>
  );
}