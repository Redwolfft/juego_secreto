const numero = prompt('Digita un número: ');
const factorialResultado = calcularFactorial(numero);

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

alert(`El factorial de ${numero} es: ${factorialResultado}`);
