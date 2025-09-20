const inputTestCase = "L    Z" ;
let indexInputTestCase = 0;
let spaceCount = 1;
while (inputTestCase[indexInputTestCase] !== "Z") {
    
    if(inputTestCase[indexInputTestCase] === "L"){
        indexInputTestCase = indexInputTestCase + 1;
    }

}
console.log(spaceCount);

console.log(indexInputTestCase);

console.log(inputTestCase.length);
