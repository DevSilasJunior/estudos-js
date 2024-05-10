let nums = []
function add(){
    let num = document.getElementById("num")
    num = Number(num.value)
    let x = 0;
    let error = false;
    while (x < nums.length) {
        if (num == nums[x])
            error = true;
        x++;
    if (num == nums[x])
        error = true;
    x++; // Incrementando x para evitar um loop infinito
    }
    if (num == 0){
        alert("[ERROR] Não há valor a ser adicionado")
    }else{
        let seltab = document.getElementById("seltab")
        if (num > 100 || num < 1){
            alert("[ERROR] por favor, adicione um valor entre 1 e 100.")
        }else if (error == true){
            alert("[ERROR] você já adicionou esse número.")
        }else{
            let item = document.createElement("option")
            item.text = `Valor ${num} adicionado!`
            seltab.append(item)
            nums.push(num)
        }
    }
} 
function finalizar(){
    let result = document.querySelector("div#result")
    result.innerHTML = ""
    if (nums.length == 0){
        alert("primeiro adcione números na tabela para finalizar.")
    }else{
        result.innerHTML = `<p><strong>Números cadastrados: ${nums.length}</strong></p>`
        nums.sort() 
        result.innerHTML += `<p><strong>O maior número inserido foi ${nums[nums.length-1]}</strong></p>`
        result.innerHTML += `<p><strong> O menor número inserido foi  ${nums[0]}</strong></p>`
        var x = 0
        var soma = Number(0)
        while(x< nums.length){
            soma += nums[x]
            x++   
        }
        result.innerHTML += `<p><strong>A soma dos números é ${soma}</strong></p>` 
        result.innerHTML += `<p><strong> A média dos números é ${soma/nums.length}</strong></p>`
    }
    
}