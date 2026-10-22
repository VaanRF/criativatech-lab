import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Aula.css'; 
import Desafio from '../../components/Desafio'; 
import BlocoCodigo from '../../components/BlocoCodigo'; 

// Se tiver imagem, importe aqui:
import circuitImg8 from '../../assets/imagens/aula8-circuit.png';
import MaterialCard from '../../components/MaterialCard'; // Importando o componente de cartão de material

export default function Aula8() {
  return (
    <div className="aula-container">
      {/* Cabeçalho da Aula */}
      <header className="aula-header">
        <div className="aula-tag">Módulo 1 • Aula 8</div>
        <h1 className="aula-titulo">Suavizando o Movimento do Servo</h1>
        <p className="aula-descricao">
          Na aula passada, o servo se movia de forma direta de um ponto a outro. Agora, vamos aprender a controlar a velocidade e a aceleração para criar movimentos suaves, como os de braços robóticos reais.
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
        <h2>O Segredo da Suavidade</h2>
        <p>
          O servo motor tem uma engrenagem e um motor DC dentro dele. Se mandarmos ele ir de 0 para 180 graus de uma vez, ele vai dar um "tranco" e pode até chacoalhar a estrutura onde está montado.
        </p>
        <p>
          Para suavizar, usamos a matemática do <strong>Incremento</strong> e <strong>Delay</strong>. 
          Em vez de mandar ir direto para 180, mandamos ir para 1, depois 2, depois 3... com um pequeno tempo de espera entre cada passo. Isso cria uma ilusão de movimento contínuo e suave.
        </p>
        
        {/* Espaço para imagem */}
        <div className="aula-imagem-container">
            <img src={circuitImg8} alt="Esquema de ligação do servo motor com suavização" className="aula-imagem" />
          <span className="aula-imagem-legenda">Esquema: O mesmo da aula anterior. Fio Marrom no GND, Vermelho no 5V e Laranja no Pino 9.</span>
        </div>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código</h2>
        <p>Copie o código abaixo. Vamos usar uma variável de controle chamada <code>velocidade</code> para ditar o ritmo do servo:</p>
        
        <BlocoCodigo codigo={`#include <Servo.h>

Servo meuServo;

// Variável que controla a velocidade (quanto maior, mais devagar)
int velocidade = 20; 

void setup() {
  meuServo.attach(9);
}

void loop() {
  // 1. Movimento Suave para a Direita (0 até 180)
  for (int angulo = 0; angulo <= 180; angulo += 1) {
    meuServo.write(angulo);
    delay(velocidade); // Usa a variável aqui!
  }
  
  // Pausa de 1 segundo no final do curso
  delay(1000); 

  // 2. Movimento Suave para a Esquerda (180 até 0)
  for (int angulo = 180; angulo >= 0; angulo -= 1) {
    meuServo.write(angulo);
    delay(velocidade); 
  }
  
  // Pausa de 1 segundo no início do curso
  delay(1000);
}`} />

      </section>

      {/* O Desafio! */}
      <Desafio 
        titulo="Aceleração (Efeito Robô Real)"
        descricao="Em vez de mover na mesma velocidade o tempo todo, como você faria para o servo começar devagar, acelerar no meio do caminho e frear no final? (Dica: em vez de usar uma variável fixa 'velocidade', você pode mudar o valor do delay dentro do laço for)."
        codigoSolucao={`// Uma das formas de fazer aceleração:
// O delay começa em 50 e vai diminuindo até 5 (acelerando),
// e depois volta a aumentar.
void loop() {
  // Acelerando (delay de 50 a 5)
  for (int angulo = 0; angulo <= 180; angulo += 1) {
    int freio = map(angulo, 0, 180, 50, 5);
    meuServo.write(angulo);
    delay(freio); 
  }
  
  // Freando (delay de 5 a 50)
  for (int angulo = 180; angulo >= 0; angulo -= 1) {
    int freio = map(angulo, 180, 0, 50, 5);
    meuServo.write(angulo);
    delay(freio);
  }
}`}
      />

      {/* Navegação entre Aulas */}
      <footer className="aula-navegacao">
        <Link to="/intro/aula/7" className="btn-voltar">← Aula Anterior</Link>
        <Link to="/intro/aula/9" className="btn-proxima">Próxima Aula: Servo com Potenciômetro →</Link>
      </footer>
    </div>
  );
}