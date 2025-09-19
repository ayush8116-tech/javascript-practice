const number =11;
let factorial =1; 
let count = 1;
 let countCheck = true ;
while(countCheck){
    factorial = factorial * count;
    console.log(count,factorial);
    count = count + 1;
    countCheck = count<=number;
}

