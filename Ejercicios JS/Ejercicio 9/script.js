/*Solicitar al usuario una palabra y mostrar por consola el numero de consonantes, vocales y longitud de la palabra*/ 
const palabra = prompt("Introduce Una Palabra").toLocaleLowerCase()
let consonantes =0 
let vocales=0 
for(const letra of palabra ){
    if(letra=="a" || letra=="e" || letra=="i" || letra=="0" || letra=="u")vocales++ 
    else consonantes++
}
console.log(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total de ${palabra.length}letras`)