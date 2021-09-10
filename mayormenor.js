var num1 = prompt ('ingresar cantidad');
var num2 = prompt ('ingresar cantidad');
var num3 = prompt ('ingresar cantidad'); 

    if(num1 > num2 && num1 > num3) {
        document.write('el numero mayor es', num1);
    } else if(num1 < num2 && num2 > num3) {
        document.write('el numero mayor es', num2);
    } else if(num1 < num3 && num3 > num2) {
        document.write('el numero mayor es', num3);
    } 
