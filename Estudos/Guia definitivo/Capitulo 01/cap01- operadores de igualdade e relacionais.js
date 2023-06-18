// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.

var x = 2, y = 3;

// (==)Testa a igualdade de dois elementos (o resultado sera true ou false) se forem iguais será true se não forem igual será false.
console.log(x == y);

// (!=) Testa se os 2 elementos são diferentes um do outro. se forem iguais o resultado será "false" e se forem diferentes será "true".
console.log(x != y)

// (<) testa se o primeior elemento e menor que o segundo.
//(<=) testa se o primeiro elemento é menor ou igual o segundo.
console.log(x < y);
console.log(x <= y);

// (>) testa se o primeior elemento e maior que o segundo.
//(=>) testa se o primeiro elemento é maior ou igual o segundo.
console.log(x > y);
console.log(x >= y);

// Teste de igualdade de strings 
console.log("teste de string")
console.log ("two" == "three");

// Teste de maioridade alfabética de strings 
console.log ("two" > "three");
console.log("tw é alfabeticamente maior do que th")

// teste se falso é igual a uma operação falsa. falso = falso é verdadeiro
console.log(false == (x>y))
console.log("verdadeiro: falso é igual a falso")