/*button.addEventListener("click",() =>{
    axios({
        method:"GET",
        url:"https://jsonplaceholder.typicode.com/users"
    }).then(res =>{
        console.log(res.data)
    }).catch(err => console.log(err))
})*/ ()

button.addEventListener("click", () =>{
    axios({
        method:"GET",
        url:"https://jsonplaceholder.typicode.com/users"
    }).then(res =>{
        const list = document.getElementById("list")
        const fragment = document.createDocumentFragment()
        for (const usrInfo of res.data){
            const listItem = document.createElement("LI")
            listItem.textContent= `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }).catch(err => console.log(err))
})