/*Escribe un programa que pueda calcular el area de 3 figuras geometricas,triangulo,rectangulo y circulo . En primer lugar pregunta de que figura se quiere calcular el area,despues solicita los datos que necesites para calcular 
triangulo= b * h/2 
rectangulo=b * h
circulo= π * r2 (pi * radio del cuadrado)*/ 

let figure =prompt("Introduce la figura geometrica de la que quieres calcular el area: triangle,rectangle,circle");
let base;
let height;
let radius;

switch(figure){
    case "triangle":
        base = prompt("Introduce la base del triangulo")
        heigth = prompt("Introduce la altura del triangulo")
        console.log(`El area del triangulo es ${(base*height)/2}`)
        break
    case "rectangle":
        base=prompt("Introduce la base del rectangulo")
        height=prompt("Introduce la altura del rectangulo")
        console.log(`Èl area del rectangulo es ${base*height}`)
        break;
    case "circle":
        radius = prompt("Introduce el radio del circulo")
        console.log(`El area del circulo es ${Math.PI*Math.pow(radius,2)}`)
    default:console.log("La figura geometrica no es valida")
}