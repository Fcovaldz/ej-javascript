// Comentario de 1 linea

/* Comentario multilinea
alert('Hola Mundo');
alert('Hollaaaa');
alert('Hola de nuevo');
*/

// Variables
// El valor puede cambiar
var nombre = "Francisco";
var apellidos = "Bañuelos Valadez";
var edad = 23;

edad = 50;

let telefono;
let colorFavorito = 'Azul';
let comidaFavorita = 'Sushi';
telefono = 12345;

// Constantes
// El valor no puede variar
const gravedad = 9.8;
//gravedad = 'no hay gravedad';
const estudiantes = 20;

// Let y var diferencias
var numero = 40;

if(true) {
    var numero = 50;
    console.log(numero); // 50
}

console.log(numero); // 50

var numero2 = 100;
numero2 = 1000;
console.log(numero2); // 100
let otronumero = 100;

if(true) {
    let numero2 = 5;
    console.log(numero2); // 5
    let numero3 = 27;
    console.log(numero3);

}

console.log(numero2); // 100
console.log(numero3);



// Tipos de datos
console.log(typeof(nombre));
console.log(typeof(edad));


//alert(nombre);
