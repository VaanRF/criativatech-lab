import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Aula.css'; 
import Desafio from '../../components/Desafio'; 
import BlocoCodigo from '../../components/BlocoCodigo'; // Importando o componente de bloco de código
// Se tiver imagem, importe aqui:
import circuitImg5 from '../../assets/imagens/aula5-circuit.png';
import MaterialCard from '../../components/MaterialCard'; // Importando o componente de cartão de material
export default function Aula5() {
  return (
    <div className="aula-container">
      {/* Cabeçalho da Aula */}
      <header className="aula-header">
        <div className="aula-tag">Módulo 1 • Aula 5</div>
        <h1 className="aula-titulo">Semáforo Inteligente (Sensor)</h1>
        <p className="aula-descricao">
          Nada de apertar botões! Nesta aula, vamos usar o Sensor Ultrassônico HC-SR04 para que o semáforo "enxergue" o pedestre se aproximando. Quando ele chegar perto, o sinal muda.
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
          <MaterialCard produtoId="sensorUltrassonico" />
          
        </div>
      </section>

      {/* Seção de Teoria */}
      <section className="aula-secao">
        <h2>Como o sensor funciona?</h2>
        <p>
          O Sensor Ultrassônico parece um par de olhos. Ele tem um <strong>Transmissor (Trig)</strong> que emite um som de alta frequência (que não ouvimos), e um <strong>Receptor (Echo)</strong> que espera o som bater no objeto e voltar.
        </p>
        <p>
          O Arduino mede quanto tempo o som levou para ir e voltar. Como sabemos a velocidade do som, calculamos a distância exata em centímetros.
        </p>
        
        {/* Espaço para imagem */}
        <div className="aula-imagem-container">
          <img src={circuitImg5} alt="Esquema de ligação do semáforo com sensor" className="aula-imagem" />
          <span className="aula-imagem-legenda">Esquema: Trig no Pino 9, Echo no Pino 10. LEDs nos pinos 13, 12 e 11.</span>
        </div>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código</h2>
        <p>Copie o código abaixo. A função <code>medirDistancia()</code> é a mágica que faz a conta matemática por nós:</p>
        

          <pre className="aula-codigo">
            <BlocoCodigo codigo={`const int VERMELHO = 13;
const int AMARELO = 12;
const int VERDE = 11;

// Pinos do Sensor
const int TRIG = 9;
const int ECHO = 10;

void setup() {
  pinMode(VERMELHO, OUTPUT);
  pinMode(AMARELO, OUTPUT);
  pinMode(VERDE, OUTPUT);
  
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  
  Serial.begin(9600); // Para vermos a distância no computador
}

void loop() {
  // Começa com o sinal verde para os carros
  digitalWrite(VERDE, HIGH);
  digitalWrite(AMARELO, LOW);
  digitalWrite(VERMELHO, LOW);

  // Fica verificando se alguém chegou perto (menos de 20cm)
  // Enquanto a distância for maior que 20, ele fica no verde
  while(medirDistancia() > 20) {
    delay(100); 
  }

  // Se saiu do while, alguém chegou perto!
  digitalWrite(VERDE, LOW);
  digitalWrite(AMARELO, HIGH);
  delay(2000); // Amarelo por 2s

  digitalWrite(AMARELO, LOW);
  digitalWrite(VERMELHO, HIGH);
  delay(5000); // Vermelho por 5s
  
  // O loop recomeça (volta pro verde)
}

// Função que faz a mágica da distância
float medirDistancia() {
  // Dispara o pulso ultrassônico
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  
  // Mede o tempo do retorno do som
  long duracao = pulseIn(ECHO, HIGH);
  
  // Calcula a distância (velocidade do som)
  float distancia = duracao * 0.034 / 2;
  
  return distancia;
}`}
            />
          </pre>
        
      </section>

      {/* O Desafio! */}
      <Desafio 
        titulo="Aviso no Monitor Serial"
        descricao="Se o pedestre chegar a 20cm, o sinal muda. Mas e se ele passar reto e não parar para atravessar? Tente adicionar um comando Serial.println para mostrar na tela do computador a distância exata que o sensor está lendo em tempo real."
        codigoSolucao={`// Dentro da função loop(), antes do while, adicione:
  float dist = medirDistancia();
  Serial.print("Distancia: ");
  Serial.print(dist);
  Serial.println(" cm");

  // E troque o while para usar a variável:
  while(dist > 20) {
    dist = medirDistancia(); // Atualiza a distância
    delay(100);
  }`}
      />

      {/* Navegação entre Aulas */}
      <footer className="aula-navegacao">
        <Link to="/intro/aula/4" className="btn-voltar">← Aula Anterior</Link>
        <Link to="/intro/aula/6" className="btn-proxima">Próxima Aula: Sensor LDR →</Link>
      </footer>
    </div>
  );
}