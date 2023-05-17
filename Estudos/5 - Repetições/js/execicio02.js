function run(){
    var c = 1
    var n = window.document.querySelector(`input#n`)
    var num = Number(n.value)
        for (num;c <= 10;c++)
            {res.innerHTML += (`${num} x ${c} = ${num * c}`)}
}