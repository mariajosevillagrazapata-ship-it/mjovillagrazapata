const app = document.getElementById("app");
const mensaje = document.createElement("p");
const nota1 = parseFloat(prompt("Ingresa nota 1"));
const nota2 = parseFloat(prompt("Ingresa nota 2"));
const nota3 = parseFloat(prompt("Ingresa nota 3"));

app.innerHTML = `
    <h1>Calcular promedio de 3 notas</h1>
    <p>Nota número 1 ingresada: ${nota1}</p>
    <p>Nota número 2 ingresada: ${nota2}</p>
    <p>Nota número 3 ingresada: ${nota3}</p>
`;
function Promedio() {
    if (
        !isNaN(nota1) && nota1 >=0 && nota1 <=7 &&
        !isNaN(nota2) && nota2 >=0 && nota2 <=7 &&
        !isNaN(nota3) && nota3 >=0 && nota3 <=7 ) {
        let resultado = (nota1 + nota2 + nota3) / 3;

        if (resultado > 6) {   
            mensaje.style.color = "blue";
            mensaje.textContent = `! Excelente! Tienes promedio ${resultado.toFixed(1)}.`;
            app.append(mensaje);
            console.log(mensaje.textContent);
            alert(mensaje.textContent);
            return;
        } else if (resultado >= 5 && resultado <= 6) {  
            mensaje.style.color = "brown";
            mensaje.textContent = `Tienes promedio: ${resultado.toFixed(1)}. Puedes mejorar.`;
            app.append(mensaje);
            console.log(mensaje.textContent)
            alert(mensaje.textContent)
            return;
        } else if (resultado >= 4 && resultado < 5) {    
            mensaje.style.color = "green";
            mensaje.textContent = `Tienes promedio: ${resultado.toFixed(1)}. Debes esforzarte más.`;
            app.append(mensaje);
            console.log(mensaje.textContent)
            alert(mensaje.textContent)
            return;
        } else {
            mensaje.style.color = "red";
            mensaje.textContent = `Tienes el siguiente promedio: ${resultado.toFixed(1)}. Reprobaste el curso.`;
            app.append(mensaje);
            console.log(mensaje.textContent)
            alert(mensaje.textContent)
            return;
        } 
    } else {   
        alert("Ingrese solo números entre 0 y 7");
    }
    }
Promedio();


