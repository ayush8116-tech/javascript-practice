const inputTestCase = "L ZL" ;
let spaceCount = 0;

let indexInputTestCase = 0;    

let distanceFromLionToZebra =0;

let firstReferenceIndex;
console.log("hello");

while ( inputTestCase[indexInputTestCase] !== "Z"  ) {  

    if(inputTestCase[indexInputTestCase] === "L"){
        firstReferenceIndex = indexInputTestCase;
    }
    indexInputTestCase = indexInputTestCase + 1;

    if(inputTestCase[indexInputTestCase] === "Z"){
        distanceFromLionToZebra = indexInputTestCase - firstReferenceIndex - 1 ;
    } 
 }
 let distanceFromZebraToLion =0;

while ( inputTestCase[indexInputTestCase] !== "L" ) {  

    if(inputTestCase[indexInputTestCase] === "Z"){
        firstReferenceIndex = indexInputTestCase;
    }
    indexInputTestCase = indexInputTestCase + 1;

    if(inputTestCase[indexInputTestCase] === "L"){
        distanceFromZebraToLion = indexInputTestCase - firstReferenceIndex - 1 ;
    }
        
    
}

const minimumDistanceBetweenLionAndZebra = (distanceFromLionToZebra < distanceFromZebraToLion)? distanceFromLionToZebra : distanceFromZebraToLion;
console.log(distanceFromLionToZebra, distanceFromZebraToLion);
console.log("Nearest hunt distance of Lion is ", minimumDistanceBetweenLionAndZebra);





// console.log(indexInputTestCase);

// console.log(inputTestCase.length);
