function  contarLetras(frase, letra) {
    let contador = 0;
    for (let i=0; i<frase.length; i++) {
        if (frase[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return console.log("En la frase (" + frase + ") la letra (" + letra.toUpperCase() + ") se repite (" + contador + ") veces.");
}

contarLetras("Esto es un ejemplo de frase gracias.", "e");