var numero = prompt('Introduce un numero:', 0);
var primo = true;

for (let i = 2; i < numero; i++) {
    if (!primo) {
        break;
    }

    for (let j = numero; j >= 2; j--) {
        if (i * j == numero) {
            primo = false;

            break;
        }
    }
}

console.log(primo);

if (primo) {
    document.write('El numero ' + numero + ' es primo');
} else {
    document.write('El numero ' + numero + ' no es primo');
}