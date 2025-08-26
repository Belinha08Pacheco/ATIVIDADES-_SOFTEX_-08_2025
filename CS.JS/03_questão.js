function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    // A condição para "FizzBuzz" deve vir primeiro,
    // pois um número múltiplo de 15 também é múltiplo de 3 e 5.
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
