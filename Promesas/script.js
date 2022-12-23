const users = [{ id:1,name:"Dorian"},{id:2,name:"Laura"},{id:3,name:"Carlos"}]

const emails = [{id:1,email:"dorian@gmail.com"},{id:2,email:"laura@gmail.com"}]

const getUser = (id) =>{
    const user = users.find(user=>user.id==id)
    const promise = new Promise((resolve,reject)=>{
        if(!user) reject(`Not exist a user with id ${id}`)
        else resolve(user)
    })
    return promise 
}

const getEmail = (user)=>{
    const email = emails.find(email=>email.id==user.id)
    return promise = new Promise((resolve,reject)=>{
        if(!email) reject(`${user.name} hast email`)
        else resolve({
            id:user.id,
            name:user.name,
            email:email.email
        })
    })
}

/*getUser(1)
    .then(user=>console.log(user))
    .catch(err=>console.log(err))*/

/*getUser(1)
    .then(user=>{
     return getEmail(user)
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))*/


getUser(1)
    .then(user=>getEmail(user))
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

