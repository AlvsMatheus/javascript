function tabuada(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('ei, meu chapa, digite algo, rs')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //limpar a tabuada
        while(c <= 10){
            //criar elemento (como se fosse criar uma div no html)
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            //obs: o valor que multiplica com o n é o n, pois ele é o num convertido a numero
            //appendchild = criar um filho
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}

function limpar(){
    let num = document.querySelector('input#inum')
    let tab = document.querySelector('select#seltab')
    num.value = ''
    tab.innerHTML = ''
}