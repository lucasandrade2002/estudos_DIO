
/* Verifique se uma palavra é um palíndromo. */

var word = window.prompt('Digite uma palavra: ');

function verificaPalindromo(string){

    if (!string){
        return;
    }

   window.alert(string.split('').reverse().join('') === string);

   // O método join faz a união de todos os elementos splitados.
}

verificaPalindromo(word);