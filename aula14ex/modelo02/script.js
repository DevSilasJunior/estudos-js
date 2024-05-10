function gerar(){
    var num = window.document.querySelector("input#num")
    num = Number(num.value)
    let seltab = window.document.querySelector("select#seltab")
    if (num.length == 0){
        window.alert("Por favor, digite um número.")
    } else{
        let c = 1
        seltab.innerHTML = ""
        while(c <= 10){
            let item = document.createElement("option")
            item.text = `${num} X ${c} = ${num*c} `
            seltab.value = `seltab${c}` // <-- essa linha de código serve para a linguagem de programação entender que cada item do select tem um nome ou índice, essa linha para Java Script não é necessário, mas para outras linguagens de programação sim!.
            seltab.append(item)
            c++
        }
    }




}