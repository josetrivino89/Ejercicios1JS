let number1 = parseInt(prompt("Ingrese un numero y le dire si es divisible en 2,3,5,o 7 "))
if(number1 %2===0 ) {
document.write(" El numero ingresado es divisible por 2 y su resto es cero")}
else if( number1%3===0 )
{document.write("El numero ingresado es divisible por 3 y su resto es cero")}
else if( number1%5===0 )
{document.write("El numero ingresado es divisible por 5 y su resto es cero")}
else if( number1%7===0 )
{document.write("El numero ingresado es divisible por 7 y su resto es cero")}
else {document.write("El numero no  es divisible por 2,3,5,7tiene resto cero")}