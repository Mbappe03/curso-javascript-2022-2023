const button = document.getElementById("button")
const input = document.getElementById("input")
const box = document.getElementById("box")
/*click
button.addEventListener("click",()=>{
    console.log("CLICK")
})*/

/*dblclick
button.addEventListener("dblclick",()=>{
    console.log("DOBLE CLICK")
})*/

/*mouseenter
box.addEventListener("mouseenter",()=>{
    box.classList.replace("red","green")
})

box.addEventListener("mouseleave",()=>{
    box.classList.replace("green","red")
})*/

/*mousedown y mouseup
box.addEventListener("mousedown",()=>{
    console.log("Has pulsado en la caja")
})

box.addEventListener("mouseup",()=>{
    console.log("has soltado el boton izquierdo de la caja")
})*/

/*mousemove
box.addEventListener("mousemove",()=>{
    console.log("Estas moviendo el raton en la caja")
})*/ 

/*Keydown,Keyup y keypress*/
input.addEventListener("keydown",()=>{
    console.log("has pulsado una tecla")
})

input.addEventListener("keyup",()=>{
    console.log("has soltado una tecla")
})

input.addEventListener("keypress",()=>{
    console.log("estas pulsado una tecla")
})