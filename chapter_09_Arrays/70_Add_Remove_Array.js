let arr = [11, 12, 12]
//append values at the end - push
console.log("Updated length of an array:", arr.push(23, 45, 78))//6
console.log("Updated array after push", arr)

//remove 1 value at the end - pop()
console.log("Removed element:", arr.pop());//78
console.log("Updated array after pop", arr)//[ 11, 12, 13, 23, 45]

let browser=["chrome","firefox"]
//unshift-Inserts new elements at the start of an array, and returns the new length of the array.
console.log("Updated length of an array:",browser.unshift("edge","safari"))//4
console.log("Updated array after unshift:",browser)//["edge","safari","chrome","firfox"]

//shift - removes the first element from an array and returns it.
console.log("Removed element:",browser.shift())
console.log("Updated array after shift:", browser)

