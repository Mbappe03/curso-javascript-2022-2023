const buttonimg = document.getElementById("button-img")
const buttonpdf = document.getElementById("button-pdf")

buttonimg.addEventListener("click",()=>{
    fetch("dog.jpg")
        .then(res => res.blob())
        .then(img=>{
            document.getElementById("img").src=URL.createObjectURL(img)
        })
})

buttonimg.addEventListener("click",()=>{
    fetch("demo.pdf")
        .then(res => res.blob())
        .then(pdf=>{
            document.getElementById("pdf").href=URL.createObjectURL(pdf)
        })
})