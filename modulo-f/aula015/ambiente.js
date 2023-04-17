let num = [5,8,4]
 num [2]= 6
 num.push(7)

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num.sort())

let pos = num.indexOf(9)
console.log(`O valor 8 está na posição na posição ${pos}`)