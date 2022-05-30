
function calculadora(){
    var escolha = Number(window.prompt(`Operação desejada:\n\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(x)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)`));

    if(!escolha || escolha > 6 || escolha < 1){
        window.alert("Opção Inválida!");
        calculadora();
    } else{

    var n1 = Number(window.prompt(`Insira o primeiro valor: `));
    var n2 = Number(window.prompt(`Insira o segundo valor: `));

    function soma(){
        window.alert(`O resultado da soma entre ${n1} e ${n2} é igual a ${n1 + n2}`)
    }

    function subtracao(){
        window.alert(`O resultado da subtração entre ${n1} e ${n2} é igual a ${n1 - n2}`)
    }
    
    function multiplicacao(){
        window.alert(`O resultado da multiplicação entre ${n1} e ${n2} é igual a ${n1 * n2}`)
    }
    
    function divisaoReal(){
        window.alert(`O resultado da divisão real entre ${n1} e ${n2} é igual a ${(n1 / n2).toFixed(2)}`)
    }
    
    function divisaoInteira(){
        window.alert(`O resultado da divisão inteira entre ${n1} e ${n2} é igual a ${n1 % n2}`)
    }
    
    function potenciacao(){
        window.alert(`${n1} elevado a ${n2} é igual a ${n1 ** n2}`)
    }

        if(escolha == 1){
            soma();
            novaOperacao();
        } else if (escolha == 2){
            subtracao();
            novaOperacao();
        } else if (escolha == 3){
            multiplicacao();
            novaOperacao();
        } else if (escolha == 4){
            divisaoReal();
            novaOperacao();
        } else if (escolha == 5){
            divisaoInteira();
            novaOperacao();
        } else if (escolha == 6){
            potenciacao();
            novaOperacao();
        } 
    } 
    
}

calculadora();

function novaOperacao(){

    let continuar = Number(window.prompt(`Deseja realizar outra operação?\n 1 - Sim\n 2 - Não`));

        if (continuar == 1){
            calculadora();
        } else if (continuar == 2){
            window.alert("Até mais!");
        }
}