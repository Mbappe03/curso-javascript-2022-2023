/*Dado un array que contiene ["azul","amarillo","rojo","verde","rosa"] determinar si un color introducido por el usuario a traves de un prompt se encuentra dentro del array o no */ 
const colors =["azul","amarillo","rojo","verde","rosa"]
const color = prompt("Introduce un color").toLocaleLowerCase()
if(colors.indexOf(color) !==-1){
    console.log("Tu color se encuentra en el array")
}else{
    console.log("Tu color no esta definido")
}