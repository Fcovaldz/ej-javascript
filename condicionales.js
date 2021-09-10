/* Preguntrle al usuario su edad. Despues hacer una condicional if con las siguientes situaciones, 
si el usuario es mayor de 18 y menos de 29 años 
mostrar mensaje Felicidades has sido aceptado en el boot camp de generation, 
en caso contrario mostrar mensaje : No cumpres con los requisitos del programa*/

var edad = prompt('¿Cual es tu edad?');

if( edad >= 18 && edad <= 29) {
     console.log('Felicidades has sido aceptado en el boot camp de generation');
   //document.write('Eres mayor de edad');
} else {
    console.log('No cumples con los requisitos del programa'); //Mensajes en consola
   // document.write('Eres menor de edad'); Mensajes en pagina 
}


