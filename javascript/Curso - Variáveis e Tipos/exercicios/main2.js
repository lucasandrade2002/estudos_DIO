/* Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1. */

let lista = [1, 3, 4, 6, 80, 33, 23, 90];
let lista2 = [2,3,5,7,11,13,17,19,23];

function trocar(array){

    if (!array.length){
        console.log(-1);
    } else {

        let p = 0;

        while (p < array.length){
            if (array[p] % 2 === 0 && array[p] !== 0){
                console.log(`Substituindo ${array[p]} por 0.`)
                array[p] = 0;
            }
            p += 1;
        }

    }

    return array;
}

console.log(trocar(lista2));