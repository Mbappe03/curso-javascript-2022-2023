/*Escribe un programa que permita ir introduciendo una serie indeterminada de numero mientras que su suma no supere 50.Cuando esto ocurra,se deb mostrar el total acumulado y el contador de cuantos numeros se han introducido */ 
let suma=0 
let cont=0 
while(suma<50){
    suma+=parseInt(prompt("Introduce un numero para añadir a la suma"))
    cont++ 
}
console.log(`La suma total es de: ${suma}`)
console.log(`El total de numeros introducidos es ${cont}`)