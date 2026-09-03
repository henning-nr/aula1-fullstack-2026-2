function salvar() {
    name = document.getElementById("name").value
    localStorage.setItem("name", name)
    confetti();
}