/**
 *  @author Levan Alimbarashvili
 */

//task1 reversive callback function, which gets 3 arguments (base, exponent, and callback operation) and performs exponentiation on the number

let arr = []
const expo = (base, exp, cb)=>{
   if (exp === 0){
      let result = eval(arr.join(''))
      arr.length = 0
      return result
   }

   return expo(cb(base), exp-1, cb)
}

let c = expo(5, 3, (base)=>{
   if(arr.length === 0) arr.push(`${base}`)
   else arr.push('*', arr[0])
})
//console.log(c)

//***remarks***
// The eval method potentially can introduce code vulnerabilities
// A variant without using eval can be achieved with the reduce() and Number() methods
/* Simple way 
    const expo = (base, exp) => base ** exp
 */

//task2 get data by fetch and make posts based on the data

const loop = (arr)=>{
   for (const post of arr) {
   const article = document.createElement('article')
   article.id = `id${post.id}`

   const arHeader = document.createElement('h1')
   arHeader.innerText = post.title

   const arBody = document.createElement('p')
   arBody.innerText = post.body

   article.append(arHeader, arBody)
   document.body.appendChild(article)
   }
}

fetch('https://jsonplaceholder.typicode.com/posts')
   .then(x=>x.json())
   .then(res=>loop(res))
   .catch(err=>console.error(err))


//task3 if the argument is an object, apply deep copy and return the result by resolve. If it isn't an object, use reject

function deepCopy(obj){
   const deepCopyObj = (obj) => JSON.parse(JSON.stringify(obj))

   return new Promise ((resolve, reject)=>{
      if(typeof obj !== 'object' || obj === null){
         reject('input isn\'t object')
      }else{
         resolve(deepCopyObj(obj))
      }
   })
}