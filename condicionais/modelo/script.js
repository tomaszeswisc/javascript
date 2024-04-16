function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >=0 && hora < 12){
        //Bom Dia!
        img.src = 'foto_manha.png'
        document.body.style.background = '#c1d1e0'
        document.getElementsByClassName('texto')[0].style.color = 'black'
        document.getElementsByClassName('texto')[1].style.color = 'black'
    } else if (hora >= 12 && hora <=18){
        //Boa Tarde!
        img.src = 'foto_tarde.png'
        document.body.style.background = '#fe8008'
    } else {
        //Boa Noite
        img.src = 'foto_noite.png'
        document.body.style.background = '#7a5d8d'
    }
    


}