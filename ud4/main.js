var palabra = [
    ['Facebook', 'Tuenti', 'Youtube', 'Hotmail', 'Marca'],
    ['Facebook', 'Youtube', 'Hotmail', 'Google', 'Blick'],
    ['Facebook', 'Youtube', 'Hotmail', 'Jogos', 'Download']
];

var pais;

for (var i = 0; i < palabra.length; i++) {
    switch (i) {
        case 0:
            pais = 'España';
            break;
        case 1:
            pais = 'Suiza';
            break;
        case 2:
            pais = 'Portugal';
            break;
    }

    document.write('<tr>');
    document.write('<th>' + pais + '</th>');
    
    for (j = 0; j < palabra[0].length; j++) {
        document.write('<td>' + palabra[i][j] + '</td>');
    }
    
    document.write('</tr>');
}