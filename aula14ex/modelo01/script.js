function iniciar(){
    let com = window.document.getElementById("com")
    let fin = window.document.getElementById("fin")
    let pas = window.document.getElementById("pas")
    com = Number(com.value)
    fin = Number(fin.value)
    pas= Number(pas.value)
    if(pas <=0){
        window.alert("[ERROR] Passo inválido. Considerado passo=1")
        pas = 1
    }
    let result = document.querySelector("div#result")
    result.innerHTML = ""
    if (com == 0 || fin == 0){
        window.alert("[ERROR] Verifique se todos os valores estão preenchidos!")
    } else{
        for(com; com <= fin; com+=pas){
        result.innerHTML += ` 👣Passo${com} `
        }
        result.innerHTML += `<br><strong>Fim dos passos. \u{1F3C1} </strong>`
    }
    

}



