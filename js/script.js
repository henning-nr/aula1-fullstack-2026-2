// Evento de clique no botão salvar
btn = document.getElementById("btnSalvar")
btn.addEventListener('click', salvar)

// Evento de clique no botão Ler
btn = document.getElementById("btnLer")
btn.addEventListener('click', ler)

// Evento de clique no botão Ler
btn = document.getElementById("btnDeletar")
btn.addEventListener('click', deletar)

// Evento de clique no botão Atualizar
btn = document.getElementById("btnAtualizar")
btn.addEventListener('click', atualizar)

function salvar() {
    name = document.getElementById("name").value
    localStorage.setItem("name", name)
}

// Função para ler dados
function ler() {
    name = localStorage.getItem("name")
    document.querySelector("p").innerText = name
}

// Função para atualizar dados
function atualizar() {
    salvar()
    ler()
}

// Função para deletar dados
function deletar() {
    localStorage.removeItem("name")
    document.querySelector("p").innerText = "deletado"
}