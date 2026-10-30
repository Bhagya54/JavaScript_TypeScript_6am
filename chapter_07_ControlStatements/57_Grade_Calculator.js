let score=95;
/*
score>=90 -> Grade A
score<90 && score>=80 -> Grade B
score<80 && score>=70 -> Grade C
score<70 && score>=60 -> Grade D
score<60 -> Grade Fail
*/

if(score>=90){
    console.log("A")
}
else if(score<90 && score>=80){
    console.log("B")
}
else if(score<80 && score>=70){
    console.log("C")
}
else if(score<70 && score>=60){
    console.log("D")
}
else if(score<60){
    console.log("Fail")
}
// else{
//     console.log("Fail")  
// }