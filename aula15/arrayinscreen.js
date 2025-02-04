let num = [5, 8, 2, 9, 3]

//para cada posicao em num, eu mostro uma variavel chamada position
for (let position in num) {
    console.log(`The position ${position} has the value ${num[position]}`)
}
// to find position of a value in an array

let value = num.indexOf(4) 
 if(value == -1) {
    console.log (` O valor n foi encontrado`)
 } else {
    console.log(` The value 8 is in the position ${value}`)
 }