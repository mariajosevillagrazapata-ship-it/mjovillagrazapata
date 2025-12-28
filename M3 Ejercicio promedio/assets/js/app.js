let nota1 = parseFloat(prompt('Ingrese nota 1'));
let nota2 = parseFloat(prompt('Ingrese nota 2'));
let nota3 = parseFloat(prompt('Ingrese nota 3'));

let promedio = (nota1 + nota2 + nota3) / 3;
promedio = Math.round(promedio * 10) / 10

alert(promedio)

if (promedio >= 6){
    document.writeln(`Excelente! tienes un promedio ${promedio}. Felicitaciones por tu esfuerzo.`);
} else if (promedio>= 5 && promedio <6){
    document.writeln(`Tienes promedio ${promedio}, sigue adelante, puedes mejorar.`);
}
  else if (promedio>= 4 && promedio <5){
    document.writeln(`Tienes promedio ${promedio}, debes esfozarte mas.`);
}  
  else {
    document.writeln(`Tienes promedio ${promedio}, lamentablemente has reprobado.`);
}



