// let name="harry"
// console.log(name)
// name="ron"
// console.log(name)
// name="porter"
// console.log(name)


// let name="harry"
// let age=20
// console.log(name," ",age)
// console.log(typeof name," ",typeof age)


const name = "Shubham Lalwadiya";
const school = "Alpha vidhya sankul, junagadh";
const grade = "12th Grade";
const section = "A";
const rollno = "21";
const marksSubject1 = 85;
const marksSubject2 = 90;
const marksSubject3 = 88;


const totalMarks = marksSubject1 + marksSubject2 + marksSubject3;
const percentage = (totalMarks / 300) * 100;


console.log("***************************************");
console.log("             Report Card               ");
console.log("***************************************");
console.log("        School: ", school);
console.log("        Name: ", name);
console.log("        Grade: ", grade);
console.log("        Section: ", section);
console.log("        Roll No: ", rollno);
console.log("***************************************");
console.log("     Subject    |  Marks Obtained  ");
console.log("***************************************");
console.log("    Subject 1   |     ", marksSubject1);
console.log("    Subject 2   |     ", marksSubject2);
console.log("    Subject 3   |     ", marksSubject3);
console.log("***************************************");
console.log("    Total Marks |     ", totalMarks, "/ 300");
console.log("    Percentage  |     ", percentage.toFixed(2), "%");
console.log("***************************************");
console.log("        Well Done! Keep it up!         ");
console.log("***************************************");
