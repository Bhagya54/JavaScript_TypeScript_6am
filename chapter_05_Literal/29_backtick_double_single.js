// Single quote '...' , Double quote "..." , Backtick `...`
// All three create strings. Single and double behave the same.
// Backtick (template literal) adds extra features.

//1. same string, three ways
let s1 = 'hello';
let s2 = "hello";
let s3 = `hello`;
console.log(s1 === s2, s2 === s3) // true true
console.log(typeof s1, typeof s2, typeof s3) // string string string

//2. quotes inside quotes
console.log("It's a sunny day")          // single inside double - ok
console.log('He said "hi"')              // double inside single - ok
console.log('It\'s a sunny day')         // same quote inside -> escape with \
console.log(`It's "both" without escape`) // backtick holds both freely

//3. variables: concatenation vs interpolation ${}
let name = "bhagya";
let age = 25;
console.log('Name: ' + name + ', Age: ' + age) // single -> need +
console.log("Name: " + name + ", Age: " + age) // double -> need +
console.log(`Name: ${name}, Age: ${age}`)      // backtick -> ${}
console.log('Name: ${name}')                   // ${} NOT works in quotes -> prints as-is

//4. expressions inside ${}
let a = 10, b = 20;
console.log(`Sum is ${a + b}`)                 // Sum is 30
console.log(`Status: ${age >= 18 ? "Adult" : "Minor"}`)
console.log(`Upper: ${name.toUpperCase()}`)

//5. multi-line strings
let multi1 = "Line 1\nLine 2"                  // quotes need \n
let multi2 = `Line 1
Line 2`                                         // backtick keeps real line breaks
console.log(multi1)
console.log(multi2)
// let bad = "Line 1
// Line 2"                                      // SyntaxError: Invalid or unexpected token

//6. testing example: locator
const btnText = "Login";
const xpath1 = "//button[text()='" + btnText + "']"   // messy
const xpath2 = `//button[text()='${btnText}']`         // clean
console.log(xpath1)
console.log(xpath2)

// Summary:
// ''  -> plain string, escape single quotes inside
// ""  -> plain string, escape double quotes inside (same as '')
// ``  -> template literal: ${} interpolation, expressions, multi-line, both quotes inside
