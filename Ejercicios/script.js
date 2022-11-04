const numbers = document.getElementById("numbers");
const result = document.getElementById("result"); 

let culpable =prompt("¿Eres culpable?");
if(culpable=="si"){
    result.textContent=`Iras a la carcel`;
}else if(culpable=="no"){
    result.textContent=`Iras a casa`;
}else{
    result.textContent=`La documentacion por favor`
}
