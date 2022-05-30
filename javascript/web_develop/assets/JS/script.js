
let currentNum = document.getElementById('current-number');
let botao_decremento = document.getElementById('decrement');
let count = 0;

function increment(){

    if (count < 10)
    count += 1;
    currentNum.innerHTML = count; //O elemento currentNum vai mudar a cada novo click.
        if(count >= 0){
            currentNum.style.backgroundColor = 'rgb(0, 255, 0)'
    }
}

function decrement(){

    if (count > -10)
    count -= 1;
    currentNum.innerHTML = count;
        if(count < 0)
            currentNum.style.background = 'red';

}

botao_decremento.addEventListener("click", decrement);