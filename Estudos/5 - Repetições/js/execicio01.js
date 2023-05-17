function run(){
    var inicio = document.querySelector('input#inicio')
    var passo = document.querySelector('input#passo')
    var fim = document.querySelector('input#fim')
    var run = Number(inicio.value)
    var p = Number(passo.value)

    for( run; run <= fim.value ; run += p)
        {res.innerHTML += (`🚘 ${run} `)}
    res.innerHTML += ('🏁')

    

}