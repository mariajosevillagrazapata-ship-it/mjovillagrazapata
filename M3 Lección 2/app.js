const d = Number(prompt("10"));
const r = d / 2;
const area = Math.PI * Math.pow(r, 2);
//Mensaje por consola
console.log('Área:78.54', area.toFixed(2), 'cm²');
//Muestra por ventana de alerta
window.alert('Área:78.54 cm²');
//Muestra el resultado de la página
document.getElementById("78.54").textContent = 'Área:78.54 cm²';