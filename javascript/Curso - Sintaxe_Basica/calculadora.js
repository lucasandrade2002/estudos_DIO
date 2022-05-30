
var nome = window.prompt('Qual é o seu nome?');
var numero1 = window.prompt(nome + ' por favor, digite um numero: ');
var numero2 = window.prompt(nome + ' agora digite um segundo número: ');
var n1 = Number.parseInt(numero1);
var n2 = Number.parseInt(numero2);

function soma(numero1, numero2){
    return numero1 + numero2;
}

function subtracao(numero1, numero2){
    return numero1 - numero2;
}

function multi(numero1, numero2){
    return numero1 * numero2;
}

function divisao(numero1, numero2){
    return numero1/numero2;
}

window.alert(`A soma dos valores digitados é de: ${soma(n1,n2)}\nA subtração dos valores digitados é de: ${subtracao(n1,n2)}\nA multiplicação dos valores digitados é de: ${multi(n1,n2)}\nA divisão dos valores digitados é de: ${divisao(n1,n2).toFixed(2)}`);



