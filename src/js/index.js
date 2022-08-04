{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-chrome",
            "request": "launch",
            "name": "launch Chrome against localhost",
            "url":  "http://localhost:8080",
            "webRoot": "${workspaceFolder"
        }
    ]
}
const avancar = document.getElementById("avancar");
let moduloAtual = 0;
avancar.addEventListener("click", function (){
    const modulo = document.querySelectorAll(".modulo");
    moduloAtual++;
    console.log(moduloAtual)
    modulo[moduloAtual].classList.add("selecionado");
    const moduloSelecionado = document.querySelector(".selecionado");
    
});