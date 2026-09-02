// Função para deletar dados
function deletar() {
    localStorage.removeItem("name")
    document.querySelector("p").innerText = "deletado"
}