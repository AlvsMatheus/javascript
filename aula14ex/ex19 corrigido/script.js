function contar(){
    let ini = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('res')

    if(ini.value.length <= 0 || fim.value.length <= 0 || passo.value.length <= 0){
        res.innerHTML = 'impossível contar!'
        //alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

    if (i < f){
        //contagem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }
    } else if (i == f){
        res.innerHTML += 'Você não saiu do lugar!'

    } else{
        //contagem decrescente
        for(let c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
        res.innerHTML += `\u{1F3C1}`
    }
}
// ao clicar na função limpar, os valores receberão um valor vazio
function limpar(){
    let ini = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.querySelector('input#ipasso')
    let res = document.getElementById('res')

    ini.value = ''
    fim.value = ''
    passo.value = ''
    res.innerHTML = 'Limpo!'
}
