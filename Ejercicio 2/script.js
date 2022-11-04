let palabra = prompt("Introduce una palabra");
const result = document.getElementById("result")

/*if(palabra >= 5){
    result.textContent = true
}else{
    result.textContent = false 
}*/

palabra.length >= 5 ? result.textContent=true : result.textContent=false