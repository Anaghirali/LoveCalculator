var nome1 = document.getElementById('nome1');
var nome2 = document.getElementById('nome2');
var res = document.getElementById('resultado');
var chance = Math.ceil(Math.random() * 100);

function Calcular() {
    
    if (nome1.value.length == 0 || nome2.value.length == 0)
        res.innerHTML = "Insira os nomes";
    else
        res.innerHTML = `${chance} %`;
}

function Atualizarpag() {
    window.location.reload();
}
