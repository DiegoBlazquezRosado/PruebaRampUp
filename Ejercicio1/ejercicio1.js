function  cuentaLetras() {
    let frase = "Esto es un ejemplo de frase gracias.";
    let letra = "e";
    let contador = 0;

    for (let i=0; i<frase.length; i++) {
        if (frase[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return console.log("La letra " + letra.toUpperCase() + " se repite " + contador + " veces.");
}

cuentaLetras();