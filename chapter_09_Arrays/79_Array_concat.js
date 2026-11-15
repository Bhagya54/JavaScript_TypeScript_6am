let a = [1, 2, 3]
let b = [5, 6, 7]

//concat()
console.log("Using Concat method:", a.concat(b))

//spread - ... - modern way
let c = [...a, ...b]
console.log("Using spread operator:", c)

//join -
let result = ["pass", "fail", "skip", "pass"]
//join using a | - pass|fail|skip|pass
console.log(result.join(" | "))

let names = ["sheethal", "mohan"]
let fullName = names.join(" ")
console.log(fullName)