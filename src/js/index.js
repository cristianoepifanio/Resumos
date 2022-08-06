/* Constantes para a construção do slide de módulos da página inicial.*/
const avancar = document.getElementById("avancar");
const voltar = document.getElementById("voltar");
const modulo = document.querySelectorAll(".modulo");
const modulojs = document.querySelectorAll(".modulojs");
let moduloAtual = 0;
 
// Botão de avançar os slides na página principal.
avancar.addEventListener("click", function (){
    if(moduloAtual === modulo.length - 1) return;
    const moduloSelecionado = document.querySelector(".selecionado");
    moduloSelecionado.classList.remove("selecionado");
    moduloAtual++;
    console.log(moduloAtual);
    modulo[moduloAtual].classList.add("selecionado");
    
});

// Botão de voltar os slides na página principal.
voltar.addEventListener("click", function (){
    if(moduloAtual === 0) return;
    const moduloSelecionado = document.querySelector(".selecionado");
    moduloSelecionado.classList.remove("selecionado");
    moduloAtual--;
    console.log(moduloAtual);
    modulo[moduloAtual].classList.add("selecionado");
        
});