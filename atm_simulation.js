const intialInput = "3";
const depositingAmount =  100;
const withdrawalAmount = 100;

let balance = 1000;
let balanceAfterDeposit = balance + depositingAmount;
let balanceAfterWithdrawal = balance - withdrawalAmount;

switch(intialInput){
    case "1": console.log(balance);
    break;   
    case "2": console.log(balanceAfterDeposit);
    balance = balanceAfterDeposit;
    break;  
    case "3": console.log(balanceAfterWithdrawal);
    balance = balanceAfterWithdrawal;
    break;
     
}
console.log(balance);







