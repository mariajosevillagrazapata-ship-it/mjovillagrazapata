let nombre = prompt("Ingresa tu nombre:");

function saludo(name) {
    const tittleElement = document.getElementById("title");
    tittleElement.textContent = "Bienvenido," + name;
}
saludo(nombre);
