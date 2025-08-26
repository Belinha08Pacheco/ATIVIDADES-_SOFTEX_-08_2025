function calculadora(a, b, operacao) {
  // Trata a divisão por zero antes de qualquer operação.
  if (operacao === '/' && b === 0) {
    return "Erro: Divisão por zero não é permitida.";
  }

  // Usa switch-case para escolher a operação.
  switch (operacao) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return "Operação inválida.";
  }
}

// Exemplos de uso
console.log(calculadora(10, 5, '+'));  // Saída: 15
console.log(calculadora(10, 5, '-'));  // Saída: 5
console.log(calculadora(10, 5, '*'));  // Saída: 50
console.log(calculadora(10, 5, '/'));  // Saída: 2
console.log(calculadora(10, 0, '/'));  // Saída: Erro: Divisão por zero não é permitida.
console.log(calculadora(10, 5, '%'));  // Saída: Operação inválida.



function calculadora(a, b, operacao) {
  // Trata a divisão por zero antes de qualquer operação.
  if (operacao === '/' && b === 0) {
    return "Erro: Divisão por zero não é permitida.";
  }

  // Usa switch-case para escolher a operação.
  switch (operacao) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return "Operação inválida.";
  }
}   
