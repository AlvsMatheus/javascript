function verificar(){
   let data = new Date() 
   let ano = data.getFullYear()
   let fano = document.getElementById('itxtano')
   let res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] verifique seus dados e tente novamente')
   } else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (fsex[0].checked){
        gênero = 'Homem'
        if (idade >= 0 && idade < 13) {
            //criança
            img.setAttribute('src','imagens/menino.png')
        } else if(idade < 21) {
            //jove
            img.setAttribute('src','imagens/adolescente-m.png')

        } else if(idade < 59){
            //adulto
            img.setAttribute('src','imagens/homem.png')
        } else {
            //velho
            img.setAttribute('src','imagens/velho.png')
        }
    } else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade >=0 && idade < 13){
            //criança
            img.setAttribute('src','imagens/menina.png')
        } else if(idade < 21) {
            //jove
            img.setAttribute('src','imagens/adolescente-f.png')
        } else if(idade < 59){
            //adulto
            img.setAttribute('src','imagens/mulher.png')
        } else {
            //velho
            img.setAttribute('src','imagens/velha.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
   } 
   
}