function calcularIMC(peso: number, altura: number): number {
  const alturaMetros = altura / 100; 
  const imc = peso / (alturaMetros * alturaMetros);
  return imc;
}

function interpretarIMC(imc: number): string {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}

const peso = 75; 
const altura = 180; 

const imc = calcularIMC(peso, altura);
const interpretação = interpretarIMC(imc);

console.log(`Seu IMC é ${imc.toFixed(2)} (${interpretação})`);
