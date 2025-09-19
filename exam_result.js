const obtainedMarks = 100;
const totalMarks = 500;
let marksInPercantage = (obtainedMarks/totalMarks)*100;
let result = (marksInPercantage>33)? "Passed" : "Failed" ;
console.log(result);
