//trazendo os elementos do html ao javascript
var inicioElem = document.getElementById('iinicio')
var fimElem = document.getElementById('ifim')
var passoElem = document.getElementById('ipasso')
var res = document.getElementById('res')

//criando a função para contagem
function contar() {

// selecionando os valores de dentro dos inputs
    var inicio = Number(inicioElem.value)
    var fim = Number(fimElem.value)
    var passo = Number(passoElem.value)

//se o passo inicial for maior que o final, erro
/*caso contrário, o valor inicio irá aumentar de acordo com o passo até ser igual ao valor fim */
    if (passo == 0){
        window.alert('Você não andou')
    }
     else if (inicio > fim) {
        res.innerHTML += 'Erro: o valor inicial é maior que o valor final'
    } else {
        for (; inicio <= fim; inicio += passo) {
        res.innerHTML += `${inicio} <br> `
    }}
}

// ao clicar na fiunção kimpar, os valores receberão um valor vazio
function limpar(){
    res.innerHTML = ''
    inicioElem.value = ''
    fimElem.value = ''
    passoElem.value = ''
}