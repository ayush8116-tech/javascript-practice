const subject1 = 90;
const subject2 = 70;
const subject3 = 101;

const maxLimit = 100;

let sum = subject1 + subject2 + subject3;
let average = sum / 3 ;

console.log(average);
let error;
if(subject1 > maxLimit || subject2 > maxLimit || subject3 > maxLimit || subject1 < minLimit || subject2 < minLimit || subject3 < minLimit ){
    error = "Invalid marks!! (marks should be less than 100 or greater than 0)"
    console.log(error);    
}
if(error !== "Invalid marks!! (marks should be less than 100 or greater than 0)"){

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
}
