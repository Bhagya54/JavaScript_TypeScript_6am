//Type 4 Fn
// function sum(a,b){
//     return a+b;
// }

// let a=sum(10,20)
// console.log(a)

//Arrow Fn
/*
1. Remove function keyword
2. {} remove when only 1 line of code is written
3. Remove return keyword

*/

const add = (a, b) => a + b
let a1 = add(10, 20);
console.log(a1)

const greet1 = (name) => `Hi ${name}`
console.log(greet1('Giri'))

const triple = (num) => num ** 3//
console.log(triple(5))//5*5*5

const printAge=(age)=>console.log("Your age is :" ,age)
printAge(23)