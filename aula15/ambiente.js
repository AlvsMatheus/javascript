//compound variables

let num = [5, 8, 2, 9, 3]
num.sort()
num.push(7)
console.log(num)
console.log(`The array has ${num.length} positions`)
console.log(`The first position of the array is ${num[0]}`)

//

for (let position = 0; position < num.length; position++) {
    console.log(`The position ${position} has the value ${num[position]}`)
}

//


