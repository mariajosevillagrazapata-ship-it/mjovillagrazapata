window.alert ("Ingrese 3 números.");

let lista = [];
for (let i = 1; i < 3; i++){
    contador=i+1;
    let num = parseFloat(pompt("Ingrese número " + (i) + ":"));
    lista.push(num);
}

let n;
do{
    n = 0;
    for (let i = 1; i < lista.length; i++) {
        if (lista[i - 1] > lista[i]) {
            temp = lista (i - 1);
            lista[i - 1] = lista[i];
            lista[i] = temp;
            n = i;
        }       
    }
} while (n != 0);

if (lista[0] == lista[lista.length - 1]) {
    document.write("Los 3 números son iguales.");
} else {
    document.write("El menor número es: " + lista[0]);
    document.write("<br/>El mayor número que ingresaste es: " + lista[lista.length - 1]);
}