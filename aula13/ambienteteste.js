/*
console.log("Olá,Mundo!")
console.log("Olá,Mundo!")
console.log("Olá,Mundo!")
console.log("Olá,Mundo!")
console.log("Olá,Mundo!")  
console.log("Olá,Mundo!")
console.log("Olá,Mundo!")  => Desnecessário
*/
/*
var rep = 1
while (rep <= 6){
    console.log(`Olá,Mundo!`)  => melhor forma, por repetição 
    rep++
}
*/

var rep = 1
do {
    console.log(`Passo ${rep}`)
    rep++
} while (rep <=6)