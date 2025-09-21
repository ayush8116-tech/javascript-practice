/* type these instruction to perform any action
1 - deposit 
2 - withdraw
*/

const initialInput = "2";
const depositingAmount =  100;
const withdrawalAmount = 200;

let balance = 1000;

let isInvalid = false;


switch(initialInput){
    
    case "1":
        if (depositingAmount < 0 ){
            isInvalid = true;
        }
        if(isInvalid === false){

            let balanceAfterDeposit = balance + depositingAmount;
            console.log("After depositing ",depositingAmount," the balance is " ,balanceAfterDeposit);
            balance = balanceAfterDeposit;
        } else {
           console.log("Depositing amount of ",depositingAmount," is invalid");
           
        }
        
        break;
        
        case "2": 
        if (withdrawalAmount > balance || withdrawalAmount < 0){
            isInvalid = true;
        }
    if(isInvalid === false){
        let balanceAfterWithdrawal = balance - withdrawalAmount;
        console.log("After withdrawing ",withdrawalAmount," the balance is ",balanceAfterWithdrawal);
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







