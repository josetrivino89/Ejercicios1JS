let number1 = parseInt(prompt("Ingrese un numero y le dire si es divisible en 2, 3,5,o7 "))
if(number1 %2===0 || number1 %3===0 || number1 %5===0 || number1 %7===0){
document.write(" El numero si es divisible resto es cero")}
else {document.write("Lo sentimos en numero no tiene resto cero ")}