const app = document.getElementById('aplicación'); 
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentosMaximos = 3;
let numeroUsuario = [];

function numeroRepetido(num, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return true;
    }
  }
  return false;
}

for (let i = 0; i < intentosMaximos; i++) {
  let contador = i + 1;
  let numero = parseInt(prompt(`Intento ${contador}: Ingresa un número del 1 al 10`));

  if (isNaN(numero) || numero < 1 || numero > 10) {
    alert('Solo se permiten números del 1 al 10');
    i--; 
    continue;
  }

  if (numeroRepetido(numero, numeroUsuario)) {
    alert('El número ingresado ya fue usado. Intenta otro');
    i--; 
    continue;
  }

  numeroUsuario.push(numero);

  if (numero === numeroSecreto) {
    alert(`Adivina el número secreto: ${numeroSecreto}`);
    app.textContent = `Felicidades adivinaste el número secreto: ${numeroSecreto}`;
    break; 
  } else {
    let restantes = intentosMaximos - (i + 1);
    console.log(`Fallaste. Te quedan ${restantes} intento(s)`);
  }

  
  app.innerHTML = `Intentos usados: ${numeroUsuario.join(', ')} <br/>
  El número secreto era: ${numeroSecreto}`;
}

if (!numeroUsuario.includes(numeroSecreto)) {
  alert(`Sin aciertos. El número era: ${numeroSecreto}`);
}

