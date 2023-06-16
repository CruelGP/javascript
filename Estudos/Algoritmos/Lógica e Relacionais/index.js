var a = 2
var b = 1
var c = 10

if (a == b && b == c)
console.log ("O triangulo é equilátero")

else if (a !=b && b!=c && c!=a)
    console.log("O triangulo é escaleno")

    else
    console.log("O triangulo é bugado")


if (a < b+c &&  b< a+c && c < a+b)
    console.log("Forma um triangulo")
else
    console.log('Não forma um triangulo')