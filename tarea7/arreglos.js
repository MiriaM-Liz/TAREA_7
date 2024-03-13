// Función para solicitar al usuario los números para un arreglo
function solicitarNumerosArreglo() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        const numero = parseInt(prompt("Ingrese un número:"));
        numeros.push(numero);
    }
    return numeros;
}

// Función para combinar y ordenar dos arreglos de números
function combinarYOrdenarArreglos(arreglo1, arreglo2) {
    const arregloCombinado = arreglo1.concat(arreglo2);
    arregloCombinado.sort((a, b) => a - b); // Ordenar de forma ascendente
    return arregloCombinado;
}

// Solicitar al usuario los números para cada arreglo
console.log("Ingrese 5 números para el primer arreglo:");
const arreglo1 = solicitarNumerosArreglo();
console.log("Ingrese 5 números para el segundo arreglo:");
const arreglo2 = solicitarNumerosArreglo();

// Combinar y ordenar los dos arreglos
const arregloOrdenado = combinarYOrdenarArreglos(arreglo1, arreglo2);

// Mostrar el arreglo combinado y ordenado al usuario
console.log("Arreglo combinado y ordenado:", arregloOrdenado);
