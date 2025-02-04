//factorial

//factorial(6) = 6.5.4.3.2.1 = 720

function factorial(n){
    if (n == 1){
        return 1
    } else {
    for (let i = n-1; i > 0; i--){
        n *= i
    }
    return n
    }
}

console.log(factorial(6)) // 720 

//OTHER WAY TO DO IT (RECURSIVE FUNCTION)

function factorial(n){
    if (n == 1){
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(6)) // 720