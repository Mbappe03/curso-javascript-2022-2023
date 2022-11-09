/*.from 
let word = "Hola mundo"
console.log(Array.from(word))
console.log(word.split(""))*/ 

/*.sort 
const letters = ["b","c","z","a"]
const numbers = [1,8,100,300,3]
console.log(letters.sort())
console.log(numbers.sort((a,b)=>a-b))*/

/*.forEach
const numbers = [12,25,47,84,98]
numbers.forEach((number)=>console.log(number))
numbers.forEach((number,index)=>console.log(`${number} esta en la posicion ${index}`))*/ 

/*.some y every
const words = ["HTML","CSS","JavaScript","PHP"]
console.log(words.some(word => word.length>10))
console.log(words.every(word => word.length>2))*/ 

/*map
const numbers = [12,25,47,84,98]
numbers.map(number => console.log(number*2))
const numbers2 = numbers.map(number => number*2)
console.log(numbers2)*/ 

/*filter
const numbers = [12,25,47,84,98]

const numbers2 =numbers.filter(number=>number>80)
console.log(numbers2)*/ 

/*reduce*/
/*const numbers = [1,2,3,4,5]
console.log(numbers.reduce((a,b)=>a+b))*/
const users = [
    {
        name:"user 1",
        online:true
    },
    {
        name:"user 2",
        online:true
    },
    {
        name:"user 3",
        online:false
    },
    {
        name:"user 4",
        online:true
    },
    {
        name:"user 5",
        online:false
    },
    {
        name:"user 6",
        online:true
    }
    
]
const usersOnline = users.reduce((cont,user)=>{
    if(user.online) cont++
    return cont
},0)
console.log(`Hay ${usersOnline} usuarios conectados`)