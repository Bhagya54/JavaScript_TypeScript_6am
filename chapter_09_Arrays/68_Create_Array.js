//way 1
let a = [1, 2, 3, 4]

//way2
//array construction - single number - size of array
let b = new Array(3)
//array construction - multiple number - elements of an array
let c = new Array(12, 45, 67)
console.log(c[0])
//array construction - single value other than a number  - elements of an array
let d = new Array("king")
console.log(d[0])

//way 3 - Using of
let OfValue = Array.of(12, 45, 78)
console.log("Index 0 value", OfValue[0])
console.log("Index 0 value " + OfValue[0])
console.log(`Index 0 value:${OfValue[0]}`)

//way 4 - take a string - creating an array of its characters
let str = Array.with("hello")//["h","e","l","l","0"]
console.log(str[1])