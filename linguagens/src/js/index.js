// ------------------------------------------------
//             RESUMO DE HTML E CSS
// ------------------------------------------------


/* Constantes para a construção do slide de módulos da página inicial.*/
// Presente na página inicial de HTML e CSS

const avancar = document.getElementById("avancar");
const voltar = document.getElementById("voltar");
const avancarjs = document.getElementById("avancarjs");
const voltarjs = document.getElementById("voltarjs");
const modulo = document.querySelectorAll(".modulo");
const modulojs = document.querySelectorAll(".modulojs");
let moduloAtual = 0;
let modulojsAtual = 0;
 
// Botão de avançar os slides na página sobre HTML e CSS.
avancar.addEventListener("click", function (){
    if(moduloAtual === modulo.length - 1) return;
    const moduloSelecionado = document.querySelector(".selecionado");
    moduloSelecionado.classList.remove("selecionado");
    moduloAtual++;
    console.log(moduloAtual);
    modulo[moduloAtual].classList.add("selecionado");
    
});

// Botão de voltar os slides na página sobre HTML e CSS.
voltar.addEventListener("click", function (){
    if(moduloAtual === 0) return;
    const moduloSelecionado = document.querySelector(".selecionado");
    moduloSelecionado.classList.remove("selecionado");
    moduloAtual--;
    console.log(moduloAtual);
    modulo[moduloAtual].classList.add("selecionado");
        
});

// Botão de avançar os slides na página sobre JavaScript.
avancarjs.addEventListener("click", function (){
    if(modulojsAtual === modulojs.length - 1) return;
    const modulojsSelecionado = document.querySelector (".selecionado");
    modulojsSelecionado.classList.remove("selecionado");
    modulojsAtual++;
    console.log(modulojsAtual);
    modulojs[modulojsAtual].classList.add("selecionado");
    
});

// Botão de voltar os slides na página sobre JavaScript.
voltarjs.addEventListener("click", function (){
    if(modulojsAtual === 0) return;
    const modulojsSelecionado = document.querySelector(".selecionado");
    modulojsSelecionado.classList.remove("selecionado");
    modulojsAtual--;
    console.log(modulojsAtual);
    modulojs[modulojsAtual].classList.add("selecionado");
        
});

















// ------------------------------------------------
//             RESUMO DE JAVASCRIPT
// ------------------------------------------------

// Função para verificar a velocidade e indicar que está multado caso seja acima da velocidade permitida
// Esta presente na página: JavaScript ----> Módulo D 
