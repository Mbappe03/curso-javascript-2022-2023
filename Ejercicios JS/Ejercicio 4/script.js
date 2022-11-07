/* Escribe un program que pida un numero entero mayor que 1 y que escriba si el numero primo o no .
Un numero primo es aquel que solo es divisible por si mismo y la unidad */ 
let num = parseInt(prompt("Introduce un numero"))
let divisores=0
if(num ===1 ) console.log("El numero no es valido")
else{
for(let i=2; i<num; i++){
    if(num%i ==0){
        console.log(`${num}/${i} ==${num/i} No es primo`)
        divisores++
        break 
    }
}
}
if(divisores==0) console.log(`${num} es primo`)