import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Aula.css'; 
import Desafio from '../../components/Desafio'; 
import BlocoCodigo from '../../components/BlocoCodigo'; 
import circuitImg7 from '../../assets/imagens/aula7-circuit.png'; // Import da imagem do circuito
import MaterialCard from '../../components/MaterialCard'; // Importando o componente de cartão de material
export default function Aula7() {
  return (
    <div className="aula-container">
      {/* Cabeçalho da Aula */}
      <header className="aula-header">
        <div className="aula-tag">Módulo 1 • Aula 7</div>
        <h1 className="aula-titulo">Movimento Básico com Servo Motor</h1>
        <p className="aula-descricao">
          O Servo Motor é diferente dos motores comuns: ele não gira sem parar, ele vai para uma posição exata! Vamos aprender a mandar o servo ir de um lado para o outro usando apenas dois comandos.
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
          <MaterialCard produtoId="servoMotor" />
          
        </div>
      </section>

      {/* Seção de Teoria */}
      <section className="aula-secao">
        <h2>Como funciona o Servo?</h2>
        <p>
          O Servo Motor tem um circuito interno que entende comandos de ângulo. Ele sabe exatamente onde está o seu eixo e se move até a posição que você mandar.
        </p>
        <p>
          Neste código simples, vamos mandar ele ir para a posição <strong>0 graus</strong> (todo para a esquerda), esperar 1 segundo, e depois ir para <strong>180 graus</strong> (todo para a direita).
        </p>
        
        {/* Espaço para imagem */}
        <div className="aula-imagem-container">
          <img src={circuitImg7} alt="Esquema de ligação do servo motor" className="aula-imagem" />
          <span className="aula-imagem-legenda">Esquema: Fio Marrom no GND, Vermelho no 5V e Laranja no Pino 9.</span>
        </div>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código</h2>
        <p>Copie o código abaixo. É o movimento mais básico que existe:</p>
        
        <BlocoCodigo codigo={`#include <Servo.h> // Inclui a biblioteca do Servo

Servo meuServo; // Cria o objeto do servo

void setup() {
  // Diz que o servo está conectado no pino 9
  meuServo.attach(9);
}

void loop() {
  // 1. Vai para 0 graus (totalmente para a esquerda)
  meuServo.write(0);
  delay(1000); // Espera 1 segundo
  
  // 2. Vai para 180 graus (totalmente para a direita)
  meuServo.write(180);
  delay(1000); // Espera 1 segundo
}`} />

      </section>

      {/* O Desafio! */}
      <Desafio 
        titulo="Movimento de 3 Posições"
        descricao="Atualmente o servo vai de 0 direto para 180. Altere o código para que ele faça três movimentos: vá para 0 graus, espere 1 segundo, vá para 90 graus (no meio), espere 1 segundo, e por fim vá para 180 graus e espere 1 segundo antes de recomeçar."
        codigoSolucao={`#include <Servo.h>

Servo meuServo;

void setup() {
  meuServo.attach(9);
}

void loop() {
  // Posição 1: Esquerda
  meuServo.write(0);
  delay(1000);
  
  // Posição 2: Centro
  meuServo.write(90);
  delay(1000);
  
  // Posição 3: Direita
  meuServo.write(180);
  delay(1000);
}`}
      />

      {/* Navegação entre Aulas */}
      <footer className="aula-navegacao">
        <Link to="/intro/aula/6" className="btn-voltar">← Aula Anterior</Link>
        <Link to="/intro/aula/8" className="btn-proxima">Próxima Aula: Movimento Suave →</Link>
      </footer>
    </div>
  );
}