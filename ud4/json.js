var busquedas = {
    '[Pais, Ranking]': [0, 1, 2, 3, 4],
    'España': ['Facebook', 'Tuenti', 'Youtube', 'Hotmail', 'Marca'],
    'Suiza': ['Facebook', 'Youtube', 'Hotmail', 'Google', 'Blick'],
    'Portugal': ['Facebook', 'Youtube', 'Hotmail', 'Jogos', 'Download']
};

for (let pais in busquedas) {
    document.write('<tr>');
    document.write('<th>' + pais + '</th>');

    busquedas[pais].forEach(busqueda => {
        document.write('<td>' + busqueda + '</td>');
    });

    document.write('</tr>');
}