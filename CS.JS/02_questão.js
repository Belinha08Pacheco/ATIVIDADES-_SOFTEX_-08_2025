function verificarIdade(nome, idade) {
  console.log(`Verificando a idade de ${nome}, ${idade}:`);
  if (idade >= 18) {
    return `${nome} é maior de idade.`;
  } else {
    return `${nome} é menor de idade.`;
  }
}

const nome = "João";
const idade = 17;

console.log(verificarIdade(nome, idade));
// Output: Verificando a idade de João, 17: 
// João é menor de idade.javascript
// Testando a função com um objeto

console.log( verificarIdade( "João", 17) );

verificarIdade("pessoa", 17) {
  const pessoa = { nome: "João", idade: 17 };
  console.log(`Verificando a idade de ${pessoa.nome}, ${pessoa.idade}:`);
  if (pessoa.idade >= 18) {
    return `${pessoa.João} é maior de idade.`;
  } else {
    return `${pessoa.João} é menor de idade.`;
  }
}