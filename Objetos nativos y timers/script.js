const button = document.getElementById("button")
/*Objeto window
alert
alert("hola")
addEventListener("scroll",(e)=>{
    console.log(e)
})*/

/*Prompt 
let name = prompt("Escriba su nombre")
console.log(name)*/

/* Confirm 
if(confirm("acepta")){
    console.log("El usuario aacepto")
}else{
    console.log("El usuario no acepto")
}*/ 

/*Objeto Consola*/
/*console.log()
console.log(button)*/

/*console.dir()
console.dir(button)*/

/*console.error()
console.error(error)*/

/*console.table()
const person = {
    name:"Dorian",
    age:30,
    email:"dorian@gmail.com"
}
console.table(person)*/

/*Objeto location
console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.hash)
location.reload()*/

/*objeto history
back()
forward()
go(n| -n)*/ 

/*Objeto date 
const date = new date()
console.log(date.getdate())*/ 

/*Timers 
button.addEventListener("click",()=>{
    /*setTimeout(saludar,3000)
    const timeout = setTimeout(()=>{
        console.log("Adios")
    },3000)
    clearTimeout(timeout)
}) 
const saludar = () => {
    console.log("Hola")
}*/

/*SetInterval*/
const saludar = () =>{
    console.log("Hola")
}
let cont = 0
/*const interval = setInterval(saludar,3000)*/
const interval= setInterval(()=>{
    console.log(cont)
    cont++
},1000)
button.addEventListener("click",()=>{
    clearInterval(interval)
})