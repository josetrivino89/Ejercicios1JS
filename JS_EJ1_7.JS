let number1 = parseInt( prompt("Ingrese aqui su numero"));
let number2 = parseInt( prompt("Ingrese aqui otro numero"));
let number3 = parseInt( prompt("Ingrese aqui otro numero"));

if (number1 > number2 && number1>number3) {document.write("El mayor es el primero, osea el: " + number1);}
else if (number1 < number2 && number2> number3) {document.write("El mayor es el segundo, osea el: " + number2);}
else if (number3===number2 && number2===number3){document.write("Son todos iguales, no te hagas el picaro ;-) !!!")}
else {document.write("El mayor es el Tercero, osea el:  " + number3);}

