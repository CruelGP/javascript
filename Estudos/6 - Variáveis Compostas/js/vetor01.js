var num = [2, 7, 3, 4]
num[4] = 1
num.push(5)
num.sort()
num.push(6)
    console.log(num)
    console.log(`O vetor tem ${num.length} posições`)
    console.log(`O primeiro valor do vetor pe ${num[0]}`)

for(var pos = 0; pos < num.length; pos++)
    {console.log(`A posição ${pos} tem o valor ${num[pos]}`)}