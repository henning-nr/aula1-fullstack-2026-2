// LÓGICA PRA SALVAR
btn = document.getElementById("btnSalvar")
btn.addEventListener('click', () => {
    name = document.getElementById("name").value
    localStorage.setItem("name", name)
})
// LÓGICA PRA LER
btn = document.getElementById("btnLer")
btn.addEventListener('click', () => {
    name = localStorage.getItem("name")
    document.querySelector("p").innerText = name
})