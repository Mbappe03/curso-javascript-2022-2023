const button = document.getElementById("button")
button.addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( res => res.ok ? Promise.resolve(res):Promise.reject(res))
        .then( res=> res.json())
        .then(res => console.log(res))
})
    /*if(window.fetch != undefined) console.log("Fetch ok")
    else console.log("fetch not works")
})*/ 