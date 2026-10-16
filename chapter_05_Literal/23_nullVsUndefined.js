// null      -> dev intentionally assigns "empty / no value"
// undefined -> JS assigns it: variable declared but no value given

// 1. Declared but not initialized -> undefined
let carCount;
console.log(carCount) // undefined

// 2. Intentionally empty -> null
let selectedUser = null;
console.log(selectedUser) // null

// 3. typeof
console.log(typeof undefined) // undefined
console.log(typeof null)      // object (old JS bug, kept for compatibility)

// 4. Missing object property -> undefined
let student = { name: 'jaasritha' };
console.log(student.age) // undefined

// 5. Function with no return -> undefined
function greet() { }
console.log(greet()) // undefined

// 6. Missing function argument -> undefined
function show(a) { console.log(a) }
show() // undefined

// 7. Equality
console.log(null == undefined)  // true  (loose: both mean "no value")
console.log(null === undefined) // false (strict: different types)

// 8. Math
console.log(null + 1)      // 1   (null -> 0)
console.log(undefined + 1) // NaN (undefined -> NaN)

// 9. Default parameters kick in only for undefined, not null
function hello(name = 'Guest') { console.log('Hello ' + name) }
hello(undefined) // Hello Guest
hello(null)      // Hello null

// 10. JSON keeps null, drops undefined
console.log(JSON.stringify({ a: null, b: undefined })) // {"a":null}
