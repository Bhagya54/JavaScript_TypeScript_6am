let arr = [10, 20, 30]
console.log(`Array before splice: ${arr}`)
//## splice(startIndex,deleteCount,...itemsToAdd)

//console.log("Removed Elements:", arr.splice(1, 2))//20,30
//console.log(`Array after splice: ${arr}`)

arr.splice(1, 2, 45, 56, 78, 90)
console.log(arr)//[ 10, 45, 56, 78, 90 ]

arr.splice(0, 1, 67)
console.log(arr)//[67,45,56,78,90]