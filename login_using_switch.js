const enteredPass = "ayush";
const success = "login successful"
const failed = "try again"
switch(enteredPass){
    case "ayush":
    console.log(success);
    break;
    case "ayushverma":
    console.log(success);
    break;
    case "ayush123":
    console.log(success);
    break;
    case "Ayush":
    console.log(success);
    break;
    default:
        console.log(failed);
}
