function run(){
    var inicio = document.querySelector('input#inicio')
    var passo = document.querySelector('input#passo')
    var fim = document.querySelector('input#fim')
    var f = Number(fim.value)
    var run = Number(inicio.value)
    var p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
        {res.innerHTML = 'Impossivel contar'}
    else
        if (run < f) {
        for( run; run <= f; run += p)
        {res.innerHTML += (`🚘 ${run} `)}
         res.innerHTML += ('🏁')}

        else
        {for(run; run >= f; run-= p)
        {res.innerHTML += (`🚘 ${run} `)}   
         res.innerHTML += ('🏁')}

        
            
       

    

}