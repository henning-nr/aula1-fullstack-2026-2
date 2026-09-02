// Função para ler dados
function ler() {
    name = localStorage.getItem("name")
    document.querySelector("p").innerText = name
}