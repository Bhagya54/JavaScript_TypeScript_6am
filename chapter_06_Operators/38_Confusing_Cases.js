// NaN
console.log(NaN == NaN)//false - NaN not equal to itself
console.log(NaN === NaN)//false

// +0 and -0
console.log(0 === -0)//true

// Arrays
console.log([] == false)//true - [] => "" => 0, false => 0
console.log([] == 0)//true
console.log([] == "")//true
console.log([0] == false)//true - [0] => "0" => 0
console.log([1] == 1)//true - [1] => "1" => 1
console.log([1, 2] == "1,2")//true - [1,2] => "1,2"
console.log([] == [])//false - different references
console.log([] === [])//false
console.log([] == ![])//true - ![] => false => 0, [] => "" => 0

// Objects
console.log({} == "[object Object]")//true - {} => "[object Object]"
console.log({ x: 1 } === { x: 1 })//false - different references

// null / undefined
console.log(undefined == false)//false - undefined == only null/undefined
console.log(null == 0)//false - null not converted by ==

// Strings with spaces
console.log(" " == 0)//true - whitespace => 0
console.log("\n" == 0)//true
console.log(" 1 " == 1)//true - spaces trimmed
console.log("1a" == 1)//false - "1a" => NaN

// Booleans
console.log(2 == true)//false - true => 1
console.log("true" == true)//false - "true" => NaN
console.log("false" == false)//false - "false" => NaN
console.log("0" == false)//true - but "0" is truthy in if()
