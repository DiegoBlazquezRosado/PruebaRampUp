function sacarImpares(num) {
    for (let i=num; i<(num+50); i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

sacarImpares(0);