const inputTestCase = "L    Z" ;
let spaceCount = 0;

let indexInputTestCase = 0;
while (inputTestCase[indexInputTestCase] !== "Z") {
  
    if(inputTestCase[indexInputTestCase] === " "){
        spaceCount = spaceCount + 1;
    }

        indexInputTestCase = indexInputTestCase + 1;
    

}
console.log(spaceCount);

console.log(indexInputTestCase);

console.log(inputTestCase.length);
 
