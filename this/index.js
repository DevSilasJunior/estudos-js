console.log(this); // No navegador, imprime o objeto `window`

function mostrarThis() {
    console.log(this);
}
mostrarThis(); // No navegador, imprime o objeto `window`

'use strict';
function mostrarThis() {
    console.log(this);
}
mostrarThis(); // Imprime `undefined`

const pessoa = {
    nome: 'João',
    dizerNome: function() {
        console.log(this.nome);
    }
};
pessoa.dizerNome(); // Imprime 'João'

const obj = {
    valor: 42,
    metodo: function() {
        setTimeout(() => {
            console.log(this.valor); // `this` refere-se ao objeto `obj`
        }, 1000);
    }
};
obj.metodo(); // Imprime 42 após 1 segundo