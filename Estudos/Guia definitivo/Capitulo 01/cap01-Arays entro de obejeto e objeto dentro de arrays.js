// Os arrays e objetos podem conter outros arrays e objetos:
// Um Array com 2 objetos.
var points = [ {x:4, y:5}, {g:7, p:3}]
console.log(points.length)
console.log(points)
console.log(points[0])
console.log(points[1])
console.log(points[1]["p"])

//Um objeto contendo 2 arrays
var data = {trial1: [1,2,3,4], trial2: [5,6,7,8]}
console.log(data)
console.log(data['trial1'])
console.log(data['trial1'][0])
console.log(data['trial2'])
console.log(data['trial2'][2])
data.trial3 = [9,10,11,12]
console.log(data)
data.trial1[4] = 100
console.log(data)

console.log(3+2)