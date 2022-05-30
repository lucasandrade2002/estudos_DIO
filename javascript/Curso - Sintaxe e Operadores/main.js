
/* Crie uma função que receba dois números como parâmetros
   Confira se os números são iguais
   Confira se a soma dos números é maior que 10 e menor que 20
   Retorne um string dizendo: Os números n1 e n2 não/são iguais. Sua soma é maior/menor que 10 e maior/menor que 20. */

function verificador(){
    let n1 = Number(window.prompt('Digite um número: '));
    let n2 = Number(window.prompt('Digite outro número: '));
    let soma = n1 + n2;

    if (n1 === n2 && soma > 10 && soma < 20){
        window.alert(`Os números ${n1} e ${n2} são iguais.\nSua soma é maior que 10 e menor que 20.`);
    } else if (n1 !== n2 && soma > 20){
        window.alert(`Os números ${n1} e ${n2} são diferentes.\nSua soma é maior que 10 e maior que 20.`);
    } else if (n1 !== n2 && soma < 10){
        window.alert(`Os números ${n1} e ${n2} são diferentes.\nSua soma é menor que 10 e menor que 20.`);
    } else if (n1 === n2 && soma > 20){
        window.alert(`Os números ${n1} e ${n2} são iguais.\nSua soma é maior que 10 e maior que 20.`);
    } else if (n1 === n2 && soma < 10){
        window.alert(`Os números ${n1} e ${n2} são iguais.\nSua soma é menor que 10 e menor que 20.`);
    } else if (n1 !== n2 && soma > 10 && soma < 20){
        window.alert(`Os números ${n1} e ${n2} são diferentes.\nSua soma é maior que 10 e menor que 20.`);
    } else if (n1 === n2 && soma == 10){
        window.alert(`Os números ${n1} e ${n2} são iguais.\nSua soma é igual a 10 e menor que 20.`);
    } else if (n1 === n2 && soma == 20){
        window.alert(`Os números ${n1} e ${n2} são iguais.\nSua soma é maior que 10 e igual a 20.`);
    } else if (n1 !== n2 && soma == 20){
        window.alert(`Os números ${n1} e ${n2} são diferentes.\nSua soma é maior que 10 e igual a 20.`);
    } else if (n1 !== n2 && soma == 10){
        window.alert(`Os números ${n1} e ${n2} são diferentes.\nSua soma é igual a 10 e menor que 20.`);
    }
}

verificador();