const number = 97;
let check=true;
let result;
let factor = 2;
while (check === true && factor<number) {
    if (number % factor === 0) {
        check = false;
    } 
    factor = factor + 1;
}
result = (check === false)? "is a composite" : "is a prime";
console.log(number,result);



