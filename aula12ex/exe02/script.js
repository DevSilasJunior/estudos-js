function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var result = document.getElementById("result")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERROR] Verifique os dados e tente novamente!")
    } else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        img.style.width ="250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"
        img.style.margin = "auto"
        if (fsex[0].checked){
            genero = "Homem"
            if(idade < 10){

                img.setAttribute("src", "./IMG/criança-M.jpg")
            } else if(idade < 20){

                img.setAttribute("src", "./IMG/joven-M.jpg")
            } else if(idade < 45){

                img.setAttribute("src", "./IMG/adulto.jpg")
            } else{

                img.setAttribute("src", "./IMG/idoso.jpg")
            }
            result.style.textAlign = "center"
            result.innerHTML = `Você é ${genero} com ${idade} anos.`
            result.appendChild(img)
        } else if(fsex[1].checked){
            genero = "Mulher"
            if(idade < 10){

                img.setAttribute("src", "./IMG/criança-F.jpg")
            } else if(idade < 20){

                img.setAttribute("src", "./IMG/joven-F.jpg")
            } else if(idade < 45){

                img.setAttribute("src", "./IMG/adulta.jpg")
            } else{

                img.setAttribute("src", "./IMG/idosa.jpg")
            }
            result.style.textAlign = "center"
            result.innerHTML = `Você é ${genero} com ${idade} anos.`
            result.appendChild(img)
        } else{
            window.alert("[ERROR] Verifique os dados e tente novamente!")
        }
        
    }
}