import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Aula.css'; 
import Desafio from '../../components/Desafio'; 
import BlocoCodigo from '../../components/BlocoCodigo'; // Importando o componente de bloco de código
// Se tiver imagem, importe aqui:
import circuitImg6 from '../../assets/imagens/aula6-circuit.png';
import MaterialCard from '../../components/MaterialCard'; // Importando o componente de cartão de material
export default function Aula6() {
  return (
    <div className="aula-container">
      {/* Cabeçalho da Aula */}
      <header className="aula-header">
        <div className="aula-tag">Módulo 1 • Aula 6</div>
        <h1 className="aula-titulo">Poste de Rua Automático (LDR)</h1>
        <p className="aula-descricao">
          Já imaginou como os postes de rua sabem a hora de acender? Nesta aula, vamos usar um sensor de luminosidade (LDR) para criar um sistema de iluminação inteligente que acende sozinho quando escurece.
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
          <MaterialCard produtoId="ldr" />
          
        </div>
      </section>

      {/* Seção de Teoria */}
      <section className="aula-secao">
        <h2>Como funciona o LDR?</h2>
        <p>
          O LDR é um componente que muda a sua resistência de acordo com a luz. No escuro, a resistência é altíssima. Com muita luz, a resistência cai.
        </p>
        <p>
          Para o Arduino ler isso, usamos um <strong>Divisor de Tensão</strong>. Ligamos o LDR e um resistor de 10kΩ juntos. O Arduino vai ler a voltagem no meio deles. 
          Como o Arduino lê valores de 0 a 1023, quando estiver claro, ele lê um valor baixo; quando estiver escuro, lê um valor alto.
        </p>
        
        {/* Espaço para imagem */}
        <div className="aula-imagem-container">
           <img src={circuitImg6} alt="Esquema de ligação do LDR" className="aula-imagem" />
          <span className="aula-imagem-legenda">Esquema: LDR e Resistor de 10kΩ em série (divisor de tensão). O meio vai para o pino A0. O LED vai no pino 13.</span>
        </div>
      </section>

      {/* Bloco de Código */}
      <section className="aula-secao">
        <h2>O Código</h2>
        <p>Copie o código abaixo. Vamos usar o monitor serial para descobrir qual é o valor exato da leitura no seu quarto:</p>
        
          <pre className="aula-codigo">
            <BlocoCodigo codigo={`const int PINO_LDR = A0;
const int PINO_LED = 13;

void setup() {
  // LED como saída
  pinMode(PINO_LED, OUTPUT);
  
  // Inicia a comunicação serial
  Serial.begin(9600);
}

void loop() {
  // Lê o valor do sensor (0 a 1023)
  int valorLuz = analogRead(PINO_LDR);
  
  // Mostra o valor no monitor serial
  Serial.print("Leitura de luz: ");
  Serial.println(valorLuz);
  
  // Se a leitura for maior que 500, significa que está escuro
  if (valorLuz > 500) {
    digitalWrite(PINO_LED, HIGH); // Acende o LED
    Serial.println("-> Escuro: Poste ACESO");
  } else {
    digitalWrite(PINO_LED, LOW); // Apaga o LED
    Serial.println("-> Claro: Poste APAGADO");
  }
  
  delay(1000); // Espera 1 segundo para não ler rápido demais
}`}
            />
          </pre>
        
      </section>

      {/* O Desafio! */}
      <Desafio 
        titulo="Calibrando o Sensor"
        descricao="O valor 500 pode não ser o ideal para o seu ambiente. Abra o Monitor Serial e cubra o LDR com a mão. Qual número apareceu? Agora aponte a luz do celular para ele. Qual número apareceu? Tente alterar o número 500 no código para o valor exato que você achou no escuro do seu quarto."
        codigoSolucao={`// Se no escuro o valor foi 850 e na luz foi 200, 
// o número ideal no if seria algo entre eles, tipo:
  if (valorLuz > 700) {
    digitalWrite(PINO_LED, HIGH); // Acende
  } else {
    digitalWrite(PINO_LED, LOW); // Apaga
  }`}
      />

      {/* Navegação entre Aulas */}
      <footer className="aula-navegacao">
        <Link to="/intro/aula/5" className="btn-voltar">← Aula Anterior</Link>
        <Link to="/intro/aula/7" className="btn-proxima">Próxima Aula: Servo Motor →</Link>
      </footer>
    </div>
  );
}