console.log("" == 0)//true
console.log(0 == "0")//true
//a==b , b==c , a==c - transitive
console.log("" == "0")//false - transitivity fails
console.log(5 == false)//false
console.log(null == 0)//false
console.log(null == "")//false
console.log(null == false)//false
console.log(undefined == 0)//false
console.log(null == undefined)//true
console.log(null === undefined)//false

console.log(5 === -5)
console.log(5 == -5)
console.log(0 === -0)
