const subject1 = 90;
const subject2 = 70;
const subject3 = 98;

let sum = subject1 + subject2 + subject3;
let average = sum / 3 ;

console.log(average);

if(average>=90){
    console.log("A");
}
if(average>=75 && average < 90){
    console.log("B");
    
}
if(average>=50 && average < 75){
    console.log("C"); 
}
if(average<50){
    console.log("D");
}
