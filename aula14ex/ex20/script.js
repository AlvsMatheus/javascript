var number = document.getElementById('inumber')
var tabuada = document.querySelector('select#tabuada')
var res = document.querySelector('select#valor1')

function gerar(){
    var number = Number(inumber.value)
    if (number === 0){
        res.innerHTML = 'Digite um número válido'
    } else {
        res.innerHTML = 'ok'
    }
    
}