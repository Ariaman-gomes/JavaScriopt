function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
      //bom dia
    img.src = 'fotos/manha.png'
    document.body.style.background = ' #f8af53'
    }
        else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fotos/tarde.png'
        document.body.style.background = '#a52a2a'
}
        else {
        //boa noite
        img.src = 'fotos/noite.png'
        document.body.style.background = '#327698'
}
    
    }
    