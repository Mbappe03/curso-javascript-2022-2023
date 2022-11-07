/*Solicita un nombre,la edad y muestra por consola el mensaje "Hola___,tienes ___ años y el año que viene tendras ___ años"Realiza el ejercicio con prompt y has uso de los template strings*/ 

let name =prompt("Introduzca su nombre");
let age =parseInt(prompt("Introduzca su edad"));
console.log(`Hola ${name} tienes ${age} y el año que viene tendras ${(age+1)} años`)