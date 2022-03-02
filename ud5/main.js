// OBTENIENDO TITULARES POR ETIQUETA HTML

/* var h1 = document.getElementsByTagName('h1');
var h2 = document.getElementsByTagName('h2');

alert(h1[0].firstElementChild.innerHTML);
console.log(h1[0].firstElementChild.innerHTML);

for (titular of h2) {
    alert(titular.firstElementChild.innerHTML);
    console.log(titular.firstElementChild.innerHTML);
} */

// OBTENIENDO TITULARES POR CLASE

/* var h1 = document.getElementsByClassName('ep_e');
var h2 = document.getElementsByClassName('c_t');

alert(h1[0].innerHTML);
console.log(h1[0].innerHTML);

for (titular of h2) {
    alert(titular.firstElementChild.innerHTML);
    console.log(titular.firstElementChild.innerHTML);
} */

// OBTENIENDO TITULARES POR SELECTOR

var h1 = document.querySelector('.ep_e');
var h2 = document.querySelectorAll('.c_t a');

alert(h1.innerHTML);
console.log(h1.innerHTML);

for (titular of h2) {
    alert(titular.innerHTML);
    console.log(titular.innerHTML);
}