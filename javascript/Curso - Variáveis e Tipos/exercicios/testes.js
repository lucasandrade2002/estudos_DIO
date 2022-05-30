/* Métodos para manipular cadeia de caracteres */

let frase = 'Davi procurou a orientação de Jeová.';

let frase2 = 'O que aprendemos? Busque orientação antes de tomar decisões.';

let concatenar = frase.concat(frase2);

let split = frase.split(' ');

let inclui = frase.includes('Moisés');

let substituto = frase2.replace('O que aprendemos?', 'Que lição aprendemos?');

// console.log(substituto);

/* Numbers */

let divisao = 10/3;

// console.log(Math.floor(divisao));

let string = divisao.toString();

// console.log(typeof(string));

/* Objects */

let bro1 = {};

bro1.name = 'Lucas Andrade';

bro1['name'] = 'Lucas Cavalcante';

console.log(Object.keys(bro1));


