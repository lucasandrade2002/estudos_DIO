
let botao = window.document.querySelector('input#adicionar');
let tarefa = window.document.getElementById('tarefa')
let res = window.document.getElementById('resultado');

function adicionar(){
    if (tarefa.value.length == 0){
        window.alert("O campo está vazio. Preencha-o com sua tarefa.")
    } else{

      let item = document.createElement('input');
      let task = document.createElement('label');

      item.setAttribute('id','description');
      item.setAttribute('type','checkbox');
      task.setAttribute('for','description');

      task.innerHTML += `${tarefa.value}<br>`
      res.appendChild(item);
      res.append(task);
    }
}

botao.addEventListener('click', adicionar);