function run(){
    var c = 1
    var n = window.document.querySelector(`input#n`)
    var tab = document.querySelector('select#seltab')
    var num = Number(n.value)
        for (num;c <= 10;c++)
            {var item = document.createElement('option')
             item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)}
}