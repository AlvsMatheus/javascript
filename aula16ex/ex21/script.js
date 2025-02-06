var num = []
    for(var i = 1; i <= 100; i++) {
        num.push(i)
    }
function selectNumber(){
    let valor = document.getElementById('inumber')
    let result = document.getElementById('result')
    let numero = Number(valor.value)
    if(numero < 1 || numero > 100) {
       window.alert('valores inválidos')
    return result.innerHTML = 'ERRO, você deve digitar um número entre 0 e 100'
      
    } else {
        
        result.innerHTML += `${num[numero - 1]} <br>`
        return
    }
}





    

    




    
    