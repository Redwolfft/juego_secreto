function calcularAreaYPerimetro(base, altura) {
    const area = base * altura;
    const perimetro = 2 * (base + altura);
    return { area, perimetro };
}

let base = prompt('Digita la base del rectángulo: ');
let altura = prompt('Digita la altura del rectángulo: ');

// Convertir las entradas a números antes de llamar a la función
base = parseFloat(base);
altura = parseFloat(altura);

if (!isNaN(base) && !isNaN(altura)) {
    const resultados = calcularAreaYPerimetro(base, altura);
    alert(`El área del rectángulo es: ${resultados.area} y el perímetro es: ${resultados.perimetro}`);
} else {
    alert('Por favor, introduce valores numéricos válidos para la base y la altura.');
}
