import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Aula.css'; 
import Desafio from '../../components/Desafio'; // Caminho ajustado
import BlocoCodigo from '../../components/BlocoCodigo'; // Importando o componente de bloco de código
// Se tiver imagem, importe aqui:
import circuitImg3 from '../../assets/imagens/aula3-circuit.png';
import MaterialCard from '../../components/MaterialCard'; // Importando o componente de cartão de material

export default function Aula3() {
  return (
    <div className="aula-container">
      {/* Cabeçalho da Aula */}
      <header className="aula-header">
        <div className="aula-tag">Módulo 1 • Aula 3</div>
        <h1 className="aula-titulo">Semáforo de Trânsito</h1>
        <p className="aula-descricao">
          Hora de levar a eletrônica para as ruas! Nesta aula, vamos usar três LEDs (verde, amarelo e vermelho) e criar uma sequência lógica para simular o funcionamento de um semáforo real.
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
          A lógica de um semáforo é baseada em <strong>estados</strong>. 
          Apenas uma luz fica acesa por vez (ou duas no caso do amarelo de transição). 
          Vamos usar os pinos 13, 12 e 11 para controlar o Vermelho, Amarelo e Verde, respectivamente.
        </p>
        <p>
          O segredo aqui é o tempo. O sinal verde fica aberto por mais tempo (ex: 5 segundos), 
          o amarelo dá uma piscada rápida de aviso (2 segundos) e o vermelho fecha o trânsito (5 segundos).
        </p>
        
        {/* Espaço para imagem */}
        <div className="aula-imagem-container">
          <img src={circuitImg3} alt="Esquema de ligação do semáforo" className="aula-imagem" />
          <span className="aula-imagem-legenda">Esquema: Pino 13 (Vermelho), Pino 12 (Amarelo), Pino 11 (Verde). Todos passam por um resistor e vão para o GND.</span>
        </div>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código</h2>
        <p>Copie o código abaixo. Para não nos perdermos na lógica, criamos funções para cada cor:</p>
        
       
          <pre className="aula-codigo">
            <BlocoCodigo codigo={`// Define os pinos
const int VERMELHO = 13;
const int AMARELO = 12;
const int VERDE = 11;

void setup() {
  // Configura todos como saída
  pinMode(VERMELHO, OUTPUT);
  pinMode(AMARELO, OUTPUT);
  pinMode(VERDE, OUTPUT);
}

void loop() {
  // 1. Abre o sinal (Verde)
  digitalWrite(VERDE, HIGH);
  digitalWrite(AMARELO, LOW);
  digitalWrite(VERMELHO, LOW);
  delay(5000); // 5 segundos aberto
  
  // 2. Atenção (Amarelo)
  digitalWrite(VERDE, LOW);
  digitalWrite(AMARELO, HIGH);
  digitalWrite(VERMELHO, LOW);
  delay(2000); // 2 segundos de atenção
  
  // 3. Fecha o sinal (Vermelho)
  digitalWrite(VERDE, LOW);
  digitalWrite(AMARELO, LOW);
  digitalWrite(VERMELHO, HIGH);
  delay(5000); // 5 segundos fechado
`}
            />
          </pre>
        
      </section>

      {/* O Desafio! */}
      <Desafio 
        titulo="Modo Noturno (Pisca Amarelo)"
        descricao="Em muitas cidades, durante a madrugada, o semáforo fica piscando apenas a luz amarela. Tente alterar o código para que, após o vermelho, o LED amarelo pisque 3 vezes antes de voltar para o verde."
        codigoSolucao={`// Dica: dentro do loop, adicione este bloco antes de voltar para o verde:
  // Pisca amarelo 3 vezes
  for(int i = 0; i < 3; i++) {
    digitalWrite(AMARELO, HIGH);
    delay(500);
    digitalWrite(AMARELO, LOW);
    delay(500);
  }
  // Depois é só voltar para o "digitalWrite(VERDE, HIGH);"`}
      />

      {/* Navegação entre Aulas */}
      <footer className="aula-navegacao">
        <Link to="/intro/aula/2" className="btn-voltar">← Aula Anterior</Link>
        <Link to="/intro/aula/4" className="btn-proxima">Próxima Aula: LED com Botão →</Link>
      </footer>
    </div>
  );
}