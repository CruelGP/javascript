// Define uma função construtora para inicializar um novo objeto Point
function Point(x,y){ // Por convenção, as construtoras começam com letras maiúsculas
    this.x=x;
    this.y=y;
}

// Usa uma função construtora com a palavra-chave "new" para criar instâncias
var p = new Point (1,1) // O ponto geométrico (1,1)
console.log(p)