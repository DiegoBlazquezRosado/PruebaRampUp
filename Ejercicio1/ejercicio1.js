let frase = "Esto es un ejemplo de frase gracias.";
let letra = "E";
let contador = 0;

console.log(frase);

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === letra.toLowerCase()) {
        contador++;
    }
};

console.log("Se repite " + contador + " veces.");
