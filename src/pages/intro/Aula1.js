import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Aula.css';
import circuitImg from '../../assets/imagens/aula1-circuit.png'; // Import da imagem
import Desafio from '../../components/Desafio'; // Ajuste o caminho se salvou em outro lugar
import BlocoCodigo from '../../components/BlocoCodigo';
import MaterialCard from '../../components/MaterialCard';


export default function Aula1() {
  return (
    <div className="aula-container">
      {/* Cabeçalho da Aula */}
      <header className="aula-header">
        <div className="aula-tag">Módulo 1 • Aula 1</div>
        <h1 className="aula-titulo">Acendendo um LED</h1>
        <p className="aula-descricao">
          O "Olá, Mundo!" da eletrônica. Vamos aprender a controlar um LED usando o Arduino e entender os primeiros comandos de programação.
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
      {/* Seção de Teoria e Imagem */}
      <section className="aula-secao">
        <h2>Como funciona?</h2>
        <p>
          O LED (Diodo Emissor de Luz) só acende se a corrente elétrica passar no sentido correto (do ânodo para o cátodo). 
          Como o Arduino não pode fornecer muita corrente direto, usamos um <strong>resistor</strong> para limitar a energia e evitar que o LED queime.
        </p>
        
        {/* A Imagem de volta! */}
        <div className="aula-imagem-container">
          <img src={circuitImg} alt="Esquema de ligação do LED no Arduino" className="aula-imagem" />
          <span className="aula-imagem-legenda">Esquema de ligação: Pino 13 → Resistor → LED → GND</span>
        </div>
      </section>

      {/* Bloco de Código */}

              <section className="aula-secao">
        <h2>O Código</h2>
        <p>Copie o código abaixo e cole na sua IDE do Arduino:</p>
        
        {/* Substitua a antiga div do código por esta linha: */}
        <BlocoCodigo codigo={`void setup() {
  // Define o pino 13 como saída (OUTPUT)
  pinMode(13, OUTPUT);
}

void loop() {
  // Liga o LED (HIGH = 5V)
  digitalWrite(13, HIGH);
  delay(1000);
  
  // Desliga o LED (LOW = 0V)
  digitalWrite(13, LOW);
  delay(1000);
}`} />

      </section>



      {/* ... bloco de código original ... */}

      {/* O Desafio! */}
      <Desafio 
        titulo="Mudar o tempo do pisca"
        descricao="Agora que o LED já está piscando, tente alterar o código para que ele fique 2 segundos aceso e apenas meio segundo apagado. (Dica: você precisa mudar os valores dentro dos parênteses do delay)."
        codigoSolucao={`void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(2000); // 2 segundos aceso
  
  digitalWrite(13, LOW);
  delay(500);  // 0.5 segundos apagado
}`}
      />

      {/* Navegação entre Aulas */}
      <footer className="aula-navegacao"></footer>
      {/* Navegação entre Aulas */}
      <footer className="aula-navegacao">
        <Link to="/" className="btn-voltar">← Voltar para Home</Link>
        <Link to="/intro/aula/2" className="btn-proxima">Próxima Aula: Leds Alternando →</Link>
      </footer>
    </div>
  );
}