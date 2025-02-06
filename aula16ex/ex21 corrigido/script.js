//pegando os valores do html em forma global, ou seja, abrangendo todos os códigos
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//função para verificar se é um número entre 1 e 100
//essa função receberá apenas um parâmetro (n), que criaremos para representar um número qualquer
//essa função é como se criassemos uma fórmula, ela será usada depois, e não agora
function isNumero(n){

// se o valor do número qualquer for maior que um e menor que 100, é verdadeiro
    if(Number(n) >= 1 && Number(n) <= 100) {

        return true
    } else {

        return false
    }
        
} 

//função para verificar se o número está na lista
//essa função receberá 2 parâmetros, um que já fizemos e outro para representar a let lista
//essa função é como se criassemos uma fórmula, ela será usada depois, e não agora
function inList(n,l){
//indexOf = procurar valor na variável composta
//quando procuramos um valor que não está na lista, a posição encontrada é -1
//se procurarmos na lista o valor (n) e ele não for -1, verdadeiro
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

//Agora usaremos as fórmulas que criamos aqui nessa função
//Alteraremos as icógnitas criadas (n e l) por valores existentes que criamos (num.value e valores)
function adicionar(){
/*
a função adicionar só acontecerá caso num.value passar pela função isNumero e num.value e valores
não estiver em inList 
*/
    if(isNumero(num.value) && !inList(num.value, valores)){
//os valores que não estão na lista vão ser mostrados       
        valores.push(Number(num.value))
//criando o option no html pelo js
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()

/*
quando realizarmos a função (clicarmos no botão adicionar) o valor do input sumirá automaticamente, e o input entrará em foco, para adicionarmos outro valor
*/  
    
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        //variavel para o total receberá o número de espaço dos valores
        let total = valores.length
        //maior e menor valor
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
/*Se os valores na posição [pos] for maior do que o let maior, o maior valor se torna o valores[pos]**/
        for(let pos in valores) {
            soma += valores[pos] // para somar todos os valores
            if (valores[pos] > maior)
                maior = valores[pos]
/*Se os valores na posição [pos] for menor do que o let menor , o menor valor se torna o valores[pos]**/
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/total // para descobrir a média
        //para zerar
        res.innerHTML = '' 
        res.innerHTML += `<p>ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}`
        res.innerHTML += `<p>A média é ${media}`
    }
}




    

    




    
    