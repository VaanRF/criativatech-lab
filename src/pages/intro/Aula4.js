import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Aula.css'; 
import Desafio from '../../components/Desafio'; 
import BlocoCodigo from '../../components/BlocoCodigo'; // Importando o componente de bloco de código
// Se tiver imagem, importe aqui:
import circuitImg4 from '../../assets/imagens/aula4-circuit.png';
import MaterialCard from '../../components/MaterialCard'; // Importando o componente de cartão de material
export default function Aula4() {
  return (
    <div className="aula-container">
      {/* Cabeçalho da Aula */}
      <header className="aula-header">
        <div className="aula-tag">Módulo 1 • Aula 4</div>
        <h1 className="aula-titulo">Semáforo com Botão (Pedestre)</h1>
        <p className="aula-descricao">
          O semáforo agora vai interagir com o mundo! Vamos adicionar um botão para que o pedestre possa pedir passagem. O sinal fica verde até alguém apertar o botão.
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
          <MaterialCard produtoId="pushButton" />
        </div>
      </section>

      {/* Seção de Teoria */}
      <section className="aula-secao">
        <h2>Como funciona?</h2>
        <p>
          O grande segredo desta aula é o <strong>INPUT_PULLUP</strong>. 
          Quando configuramos um pino como `INPUT`, ele fica "solto" e pode ler qualquer coisa. 
          Usando o `INPUT_PULLUP`, ativamos um resistor interno do Arduino que mantém o pino em <strong>HIGH (5V)</strong> quando o botão está solto.
        </p>
        <p>
          Quando o pedestre aperta o botão, ele liga o pino no GND, e o Arduino lê <strong>LOW (0V)</strong>. 
          É por isso que no código a gente verifica `if (digitalRead(BOTAO) == LOW)`.
        </p>
        
        {/* Espaço para imagem */}
        <div className="aula-imagem-container">
          <img src={circuitImg4} alt="Esquema de ligação do semáforo com botão" className="aula-imagem" />
          <span className="aula-imagem-legenda">Esquema: Botão ligado entre o Pino 10 e o GND (sem resistor externo, usando o Pull-Up).</span>
        </div>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código</h2>
        <p>Copie o código abaixo. Note como usamos o laço de repetição <code>while</code> para travar o semáforo no vermelho enquanto o pedestre atravessa:</p>
        
        
          <pre className="aula-codigo">
            <BlocoCodigo codigo={`// Pinos dos LEDs
const int VERMELHO = 13;
const int AMARELO = 12;
const int VERDE = 11;
// Pino do Botão
const int BOTAO = 10;

void setup() {
  pinMode(VERMELHO, OUTPUT);
  pinMode(AMARELO, OUTPUT);
  pinMode(VERDE, OUTPUT);
  
  // Usa o resistor interno do Arduino
  pinMode(BOTAO, INPUT_PULLUP);
}

void loop() {
  // Começa com o sinal aberto (Verde)
  digitalWrite(VERDE, HIGH);
  digitalWrite(AMARELO, LOW);
  digitalWrite(VERMELHO, LOW);

  // Fica no verde até o botão ser apertado (LOW)
  while(digitalRead(BOTAO) == HIGH) {
    // O código "trava" aqui esperando o botão
    delay(50); // Pequena pausa para não sobrecarregar o processador
  }

  // Se chegou aqui, o botão foi apertado!
  
  // Fecha a passagem (Amarelo)
  digitalWrite(VERDE, LOW);
  digitalWrite(AMARELO, HIGH);
  delay(2000); // 2 segundos de amarelo

  // Abre a passagem de pedestre (Vermelho)
  digitalWrite(AMARELO, LOW);
  digitalWrite(VERMELHO, HIGH);
  delay(5000); // 5 segundos para o pedestre atravessar
  
  // O loop() recomeça, apagando o vermelho e acendendo o verde de novo!
`}
            />
          </pre>
        
      </section>

      {/* O Desafio! */}
      <Desafio 
        titulo="Buzzer para Cegos"
        descricao="Pessoas com deficiência visual precisam de um aviso sonoro. Se você adicionar um buzzer no pino 9, como você faria para que ele emitisse um som contínuo (ou bipes) APENAS enquanto o sinal estiver vermelho para os carros?"
        codigoSolucao={`// Adicione no topo:
const int BUZZER = 9;
// No setup():
pinMode(BUZZER, OUTPUT);

// No bloco do vermelho, troque o delay(5000) por:
digitalWrite(VERMELHO, HIGH);
unsigned long inicio = millis();
while(millis() - inicio < 5000) { // Fica 5 segundos nesse loop
  tone(BUZZER, 1000); // Toca um bipe
  delay(200);
  noTone(BUZZER);     // Para o bipe
  delay(300);         // Pausa
}
// Não esqueça de apagar o LED vermelho e desligar o buzzer depois!`}
      />

      {/* Navegação entre Aulas */}
      <footer className="aula-navegacao">
        <Link to="/intro/aula/3" className="btn-voltar">← Aula Anterior</Link>
        <Link to="/intro/aula/5" className="btn-proxima">Próxima Aula: Semáforo Inteligente →</Link>
      </footer>
    </div>
  );
}