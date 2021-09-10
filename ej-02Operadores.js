var num1 = parseInt(prompt ('Ingresar primer numero'));
var num2 = parseInt(prompt ('Ingresar segundo numero'));

function Op(suma, resta, multiplicacion, division){
    var suma = num1 + num2;
    document.write('Suma: ',suma + '</br>');
    var resta = num1 - num2;
    document.write('Resta: ',resta + '</br>');
    var multiplicacion = num1 * num2;
    document.write('Multiplicacion: ',multiplicacion + '</br>');
    var division = num1 / num2;
    document.write('Division: ',division + '</br>');

}
Op()
/*
function suma(resultado) {
    var resultado = num1 + num2;
    document.write('Suma: ',resultado + '</br>');
}
suma()
function resta(resultado2) {
    var resultado2 = num1 - num2;
    document.write('Resta: ',resultado2 + '</br>');

}
resta()
function multiplicacion(resultado3) {
    var resultado3 = num1 * num2;
    document.write('Multiplicacion: ',resultado3 + '</br>');

}
multiplicacion()
function division(resultado4) {
    var resultado4 = num1 / num2;
    document.write('Division: ',resultado4 + '</br>');

}
division()
*/
