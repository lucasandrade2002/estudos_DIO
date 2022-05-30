
var lista = [1,2,3,5,8,10,25,48,92];

var i = 0;

function numerospares(lista){ //Função que retorna números pares de uma lista.

    let pares = [];

    while(i < lista.length){
        i += 1;
        if(lista[i] % 2 == 0){
            pares.push(lista[i])
        }
    } 
        return pares;
}

console.log(numerospares(lista));