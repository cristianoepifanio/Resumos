
const avancar = document.getElementById("avancar");
let moduloAtual = 0;
avancar.addEventListener("click", function (){
    const modulo = document.querySelectorAll(".modulo");
    moduloAtual++;
    console.log(moduloAtual)
    modulo[moduloAtual].classList.add("selecionado");
    const moduloSelecionado = document.querySelector(".selecionado");
    
});