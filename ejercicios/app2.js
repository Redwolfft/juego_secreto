function dolaraPesoMexicano(dolares) {
    const tipoCambio = 17.11;
    const pesosMexicanos = dolares * tipoCambio;
    return pesosMexicanos;
}

let dolares = prompt('Digita los dólares a convertir: ');

// Convertir la entrada a un número antes de llamar a la función
dolares = parseFloat(dolares);

if (!isNaN(dolares)) {
    const resultadoConversion = dolaraPesoMexicano(dolares);
    alert(`La conversión de ${dolares} ${(dolares === 1) ? 'dólar' : 'dólares'} a pesos mexicanos es de: ${resultadoConversion.toFixed(2)} pesos mexicanos`);
} else {
    alert('Por favor, introduce un valor numérico válido.');
}

