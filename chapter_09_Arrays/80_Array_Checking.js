let result = ["pass", "fail"]
console.log(Array.isArray(result))

let result1 = "hello"
console.log(Array.isArray(result1))

//Every
let arr = [50, 90, 100]
console.log("Is every values of an array > 70 ??? ", arr.every(val => val > 70))//false


//Some
console.log("Is any value(1 or more) of an array > 70 ??? ", arr.some(val => val > 70))//true

let result2 = [200, 201, 204].every((statusCode) => statusCode >= 200 && statusCode < 300)
//200-299
console.log("Result of api is success everytime??", result2)