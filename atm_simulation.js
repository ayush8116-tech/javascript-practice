/* type these instruction to perform any action
1 - deposit 
2 - withdraw
*/

const initialInput = "2";
const depositingAmount =  100;
const withdrawalAmount = 200;

let balance = 1000;

let isInvalid = false;

if (withdrawalAmount > balance){
    isInvalid = true;
}

switch(initialInput){
      
    case "1":
    let balanceAfterDeposit = balance + depositingAmount;
     console.log(balanceAfterDeposit);
    balance = balanceAfterDeposit;

    break;

    case "2": 
    if(isInvalid === false){
        let balanceAfterWithdrawal = balance - withdrawalAmount;
        console.log(balanceAfterWithdrawal);
        balance = balanceAfterWithdrawal;
    } else{
        const errorMessage = "Insufficient Balance!!"
        console.log(errorMessage);
    }

    break;
    
    default:
     console.log("Invalid Instruction (Type 1-2)");
     break;
}







