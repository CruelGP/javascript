// //Uma função é um bloco de código JavaScript nomeado e parametrizado que você define uma vez
// e, então, pode chamar repetidamente.
//var x = 0
//Define uma função chamada "plus1", com o parâmetro "x"
// function plus1(x){
// //Retorna um valor uma unidade maior do que o que foi passado
// return x+1;
// }
// console.log(x)
// console.log(plus1)

// var square = function(x){
//     return x*x;
// }
// console.log (square(plus(y)))

//Quando combinamos funções com objetos, obtemos métodos:
// Quando funções recebem as propriedades de um objeto, as chamamos de "métodos". Todos os objetos de JavaScript têm métodos:

var points = [ {x:0, y:0}, {x:1, y:1}]

var a = []
console.log(a)
//O método push() adiciona elementos em um array
a.push(1,2,3);
console.log(a)
//O método reverse(): inverte a ordem dos elementos.
a.reverse();
console.log(a)

// Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao objeto no qual o método é definido: neste caso, o array de pontos anterior.

points.dist = function what(){
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x-p1.x
    var b = p2.y-p1.y
    return Math.sqrt(a*a+b*b);
}
console.log(points.dist())

var x = 10

function abs (x){
    if (x>=20)
        {return x}
    else
        {return -x}
}

console.log(abs(x))