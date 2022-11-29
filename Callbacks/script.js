/*const getuser = (id,cb)=>{
    const user = {
        name:"Dorian",
        id:id
    }
    cb(null,user)
    if (id==2) cb("User not exist")
    else cb(null,user)
}
getuser(1,(err,user)=>{
    if(err)return console.log(err)
    console.log(`User name is ${user.name}`)
})*/ 

const users = [
    {
        id:1,
        name:"Dorian"
    },{
        id:2,
        name:"Laura"
    },{
        id:3,
        name:"Carlos"
    }
]

const emails = [
    {
        id:1,
        emails:"dorian@gmail.com"
    },{
        id:2,
        emails:"laura@gmail.com"
    },
]

const getuser = (id,cb)=>{
    const user = users.find(user=>user.id==id)
    if(!user) cb(`No exist a user with id ${id}`)
    else cb(null,user)
}
const getEmail = (user,cb)=>{
    const email = emails.find(email => email.id==user.id)
    if (!email) cb(`${user.name} hasnt email`)
    else cb(null,{
        id:user.id,
        name:user.name,
        email:email.email
    })
}
getuser(3,(err,user)=>{
    if(err) return console.log(err)

    getEmail(user,(err,res) => {
        if(err) return console.log(err)
        console.log(res)
    })
})