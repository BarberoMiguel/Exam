var letra = "";
var frase = "";
var num = Number;

function contadorletra(letra, frase) {
    let contador = 0; //el contador se inicializa en 0
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) { //solo cuenta si la letra es igual, sin mayusculas
            contador += 1; //cada vez que encuentra una letra igual sube en 1
        };
    }
    return contador;
}
/* Cuenta las coincidencias de las letras sin importar si son mayusculas o minusculas
function contadorletra(letra, frase) {
    let contador = 0; //el contador se inicializa en 0
    let l = downcase(letra);
    let f = downcase(frase);
    for (let i = 0; i < f.length; i++) {
        if (f[i] === l) { 
            contador += 1; //cada vez que encuentra una letra igual sube en 1
        };
    }
    return contador;
}
*/
function imprimeImpares(num) {
    for (let i = num; i < num + 51; i++) { //imprime los impares entre el número y los siguientes 50: recorre 51 números en total
        if (i % 2 == 1) {
            console.log(i);
        };  
    } 
}

console.log("Ejercicio 1:");
do {
    frase = prompt("Escribe una frase:");
} while (typeof frase !== "string");
do {
    letra = prompt("Escribe una sola letra:");
} while (typeof letra !== "string" || letra.length !== 1);
console.log(`La frase que has escrito es: "${frase}" y la letra que has escrito es: "${letra}".`);
console.log(`La letra "${letra}" se repite ${contadorletra(letra, frase)} veces en la frase.`);

console.log("Ejercicio 2:");
do {
    num = Number(prompt("Escribe un número:"));
} while (isNaN(num));
console.log("Aquí tienes la lista de los impares dentro de los siguientes 50 números: (este inclusive)");
imprimeImpares(num);