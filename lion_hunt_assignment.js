const inputTestCase = " LZ" ;
let spaceCount = 0;

let indexInputTestCase = 0;    //change it when checking of l to l is done


if(inputTestCase[indexInputTestCase] === "L"){
    
   
}



// indexInputTestCase = 0;
while (inputTestCase[indexInputTestCase] !== "Z") {                        //different category for counting space
  
    if(inputTestCase[indexInputTestCase] === " "){
        spaceCount = spaceCount + 1;
    }

        indexInputTestCase = indexInputTestCase + 1;
    

}
console.log(spaceCount);

// console.log(indexInputTestCase);

// console.log(inputTestCase.length);
