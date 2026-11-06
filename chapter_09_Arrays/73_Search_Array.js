let arrA = [19, 23, 45, 67, 23, 80, 45]
//includes - true/false - Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(arrA.includes(45))
console.log(arrA.includes(450))

//indexOf - Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(arrA.indexOf(23))//1
console.log(arrA.indexOf(230))//-1

//lastIndexOf-Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
console.log(arrA.lastIndexOf(23))//4
console.log(arrA.lastIndexOf(237))//-1

//normal fn
function sum(a, b) {
    return a + b;
}
//arrow fn
(a, b) => a + b

//find - Returns the value of the first element in the array where predicate is true, and undefined otherwise.
console.log(arrA.find(x => x > 40))//45
console.log(arrA.find(y => y < 10))//undefined

//findIndex- Returns the index of the first element in the array where predicate is true, and -1 otherwise.
console.log(arrA.findIndex(x => x > 40))//2
console.log(arrA.findIndex(y => y < 10))//-1

//[19,23, 45, 67, 23, 80, 45]
//findLastIndex- Returns the index of the last element in the array where predicate is true, and -1 otherwise.
console.log(arrA.findLastIndex(x => x > 40))//6
console.log(arrA.findLastIndex(y => y < 10))//-1