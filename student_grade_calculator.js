const subject1 = 90;
const subject2 = 30;
const subject3 = 100;

const maxLimit = 100;
const minLimit = 0;

let sum = subject1 + subject2 + subject3;
let average = sum / 3 ;

let isInvalid = false;

if(subject1 > maxLimit || subject2 > maxLimit || subject3 > maxLimit || subject1 < minLimit || subject2 < minLimit || subject3 < minLimit ){
    const errorMessage = "Invalid marks!! (marks should be less than 100 or greater than 0)"
    console.log(errorMessage);   
    isInvalid = true; 
}

if(isInvalid === false){

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
