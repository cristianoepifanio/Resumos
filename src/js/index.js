
const avancar = document.getElementById("avancar");
const voltar = document.getElementById("voltar");
const modulo = document.querySelectorAll(".modulo");
let moduloAtual = 0;
 
avancar.addEventListener("click", function (){
    if(moduloAtual === modulo.length - 1) return;
    const moduloSelecionado = document.querySelector(".selecionado");
    moduloSelecionado.classList.remove("selecionado");
    moduloAtual++;
    console.log(moduloAtual)
    modulo[moduloAtual].classList.add("selecionado");
   
    
});

voltar.addEventListener("click", function (){
    if(moduloAtual === 0) return;
    const moduloSelecionado = document.querySelector(".selecionado");
    moduloSelecionado.classList.remove("selecionado");
    moduloAtual--;
    console.log(moduloAtual)
    modulo[moduloAtual].classList.add("selecionado");
    
    
});