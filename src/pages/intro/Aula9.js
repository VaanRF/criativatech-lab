import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Aula.css'; 
import Desafio from '../../components/Desafio'; 
import BlocoCodigo from '../../components/BlocoCodigo'; 
import circuitImg9 from '../../assets/imagens/aula9-circuit.png'; // Import da imagem do circuito
import MaterialCard from '../../components/MaterialCard'; // Importando o componente de cartão de material
export default function Aula9() {
  return (
    <div className="aula-container">
      {/* Cabeçalho da Aula */}
      <header className="aula-header">
        <div className="aula-tag">Módulo 1 • Aula 9</div>
        <h1 className="aula-titulo">Controle de Servo com Potenciômetro</h1>
        <p className="aula-descricao">
          Chegamos à última aula do módulo básico! Agora você vai controlar o mundo físico em tempo real. Vamos girar um botão (potenciômetro) e ver o servo motor se mover exatamente junto com ele.
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
        <h2>Como funciona?</h2>
        <p>
          O potenciômetro é um resistor variável. Quando você gira o botão, ele muda a tensão que o Arduino lê no pino <strong>A0</strong>. 
          O Arduino transforma essa tensão em um número de <strong>0 a 1023</strong>.
        </p>
        <p>
          O Servo Motor, por outro lado, precisa de um número de <strong>0 a 180</strong> (os graus). 
          Como o Arduino não sabe fazer essa conta sozinho, nós usamos a função <code>map()</code>, que converte a escala de 0-1023 para 0-180.
        </p>
        
        {/* Espaço para imagem */}
        <div className="aula-imagem-container">
          <img src={circuitImg9} alt="Esquema de ligação do potenciômetro e servo motor" className="aula-imagem" />
          <span className="aula-imagem-legenda">Esquema: Potenciômetro no A0 (com os pinos laterais no 5V e GND) e Servo no Pino 9.</span>
        </div>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código</h2>
        <p>Copie o código abaixo. Gire o botão do potenciômetro e veja o servo seguir o movimento:</p>
        
        <BlocoCodigo codigo={`#include <Servo.h>

Servo meuServo;
const int PINO_POT = A0; // Potenciômetro no pino A0
const int PINO_SERVO = 9; // Servo no pino 9

void setup() {
  meuServo.attach(PINO_SERVO);
  Serial.begin(9600); // Ajuda a ver os valores lidos
}

void loop() {
  // 1. Lê o potenciômetro (valor de 0 a 1023)
  int valorPot = analogRead(PINO_POT);
  
  // 2. Transforma o valor para a escala do servo (0 a 180)
  int angulo = map(valorPot, 0, 1023, 0, 180);
  
  // 3. Move o servo para o ângulo calculado
  meuServo.write(angulo);
  
  // Mostra no monitor serial (opcional, para debug)
  Serial.print("Potenciometro: ");
  Serial.print(valorPot);
  Serial.print(" | Angulo do Servo: ");
  Serial.println(angulo);
  
  delay(15); // Pequena pausa para o servo não tremer
}`} />

      </section>

      {/* O Desafio! */}
      <Desafio 
        titulo="Invertendo o Controle"
        descricao="Atualmente, quando você gira o potenciômetro para a direita, o servo também vai para a direita. Como você faria para inverter isso? Ou seja, girar o potenciômetro para a direita e o servo ir para a esquerda (0 graus)."
        codigoSolucao={`// A mágica está na função map().
// Para inverter, basta trocar a ordem dos números no final:

  // Antes: map(valorPot, 0, 1023, 0, 180);
  // Depois:
  int angulo = map(valorPot, 0, 1023, 180, 0); 

  // Assim, quando o potenciômetro estiver em 0, o servo vai para 180.
  // E quando o potenciômetro estiver em 1023, o servo vai para 0.`}
      />

      {/* Navegação entre Aulas */}
      <footer className="aula-navegacao">
        <Link to="/intro/aula/8" className="btn-voltar">← Aula Anterior</Link>
        <Link to="/" className="btn-proxima">Concluir Módulo e Voltar à Home 🎉</Link>
      </footer>
    </div>
  );
}