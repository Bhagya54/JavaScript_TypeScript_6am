let fruits = ["banana", "apple", "cherry"]
fruits.sort();
console.log(fruits)

let numbers = [1, 5, 2]
console.log(numbers.sort())


let arrNum = [30, 5, 100, 20]
console.log(arrNum.sort())//[100,20,30,5]

//Ascending sort
arrNum.sort((a, b) => a - b)
console.log("Ascending sort done: ", arrNum)
//a-b -> 30-5 => +ve - swap
//a-b -> 30-5 => -ve - keep as it is

//Descending sort
arrNum.sort((a, b) => b - a)
console.log("Descending sort done: ", arrNum)
//a=30,b=5 => 5-30 = -ve => [30,5,100,20]
//5,100 => 100-5 = +ve => [30,100,5,20]
//5,20 => 20-5 = +ve => [30,100,20,5]

//30,100 =>100-30 =+ve - [100,30,20,5]
//30,20 => 20-30 = -ve - [100,30,20,5]
//20,5 => 5-20 = -ve - [100,30,20,5]