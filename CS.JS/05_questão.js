function converterTemperatura(temp) {
  // Acessa o valor e a escala do objeto
  const valor = temp.valor;
  const escala = temp.escala.toUpperCase(); // Garante que a escala seja maiúscula para a comparação

  let valorConvertido;
  let novaEscala;

  // Usa uma estrutura condicional para converter a temperatura
  if (escala === 'C') {
    valorConvertido = valor * 1.8 + 32;
    novaEscala = 'F';
    return `${valorConvertido.toFixed(2)} °${novaEscala}`;
  } else if (escala === 'F') {
    valorConvertido = (valor - 32) / 1.8;
    novaEscala = 'C';
    return `${valorConvertido.toFixed(2)} °${novaEscala}`;
  } else {
    // Retorna uma mensagem de erro se a escala for inválida
    return "Erro: Escala de temperatura inválida. Use 'C' para Celsius ou 'F' para Fahrenheit.";
  }
}

// Exemplos de uso
const tempCelsius = {
  valor: 25,
  escala: 'C'
};

const tempFahrenheit = {
  valor: 77,
  escala: 'F'
};

const tempInvalida = {
  valor: 100,
  escala: 'K'
};

console.log(`25 °C equivalem a: ${converterTemperatura(tempCelsius)}`);
console.log(`77 °F equivalem a: ${converterTemperatura(tempFahrenheit)}`);
console.log(converterTemperatura(tempInvalida));





