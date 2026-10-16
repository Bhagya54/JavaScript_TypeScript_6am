console.log(v)//hoisted to the top - declare the value var v=undefined
console.log("Hey")
console.log("Hey")
console.log("Hey")
console.log(str)//const str - declared but not initialized 
console.log(c)//hoisted - declared but not initialized - 
//ReferenceError: Cannot access 'c' before initialization
console.log("Hey")
console.log("Hey")
console.log("Hey")
console.log("Hey")


let c = 889;
const str = "hello"
var v = true;