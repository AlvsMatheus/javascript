function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Now is exactly ${hora} on clock.`
    
    if (hora >= 0 && hora < 12) {
        img.src = "morning.png"      
        document.body.style.background = '#daa5ab'
    } else if (hora >= 12 && hora <= 18) {
        img.src = "afternoon.png"
        document.body.style.background = '#1c4865'
    } else {
        img.src = "night.png"
        document.body.style.background = '#061c3a'
    }
}