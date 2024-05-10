function carregar(){
    var msg = window.document.querySelector("div#msg")
    var img = window.document.querySelector("img#foto")
    var date = new Date()
    //var hora = date.getHours()
    var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12 && hora > 0){
        img.src = "./IMG/manhã.jpg"
        document.body.style.background = "#049DD9"
    } else if (hora >= 12 && hora <= 18){
        img.src = "./IMG/tarde.jpg"
        document.body.style.background  = "#F28705"
    } else{
        img.src = "./IMG/noite.jpg"
        document.body.style.background = "#493959"
    }
    
}
