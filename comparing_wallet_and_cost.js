let costOfItem=1000;
let wallet=100;

let balNeed= costOfItem-wallet;
let decision=(costOfItem<=wallet)?"you can spend Rs "+ wallet:"Insufficient Balance!!, you need Rs "+balNeed+" more to spend";
console.log(decision); 
