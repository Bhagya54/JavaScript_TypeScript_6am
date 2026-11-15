let arr = [10, 20, 30, 40, 50]
//slice(startIndex,endIndex) =>(1,4)-[20,30,40]
let newArr = arr.slice(1, 3)
console.log(newArr)//[20,30]

newArr = arr.slice(2, 5)//5-1=4
console.log(newArr)//[30,40,50]

newArr = arr.slice(2)
//end index is undefined - then slice extends till the end of the array
//[30, 40, 50]
console.log(newArr)
//-2-1 =-3
newArr = arr.slice(-7, -2)//[10.20,30]
console.log(newArr)
