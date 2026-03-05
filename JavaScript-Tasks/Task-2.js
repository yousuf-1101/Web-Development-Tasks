// Student Information
let studentName = "Yousuf ";
let rollNumber = 864;
let className = "10th";

// Subject Marks

let english = 85;
let urdu = 78;
let math = 92;
let science = 88;
let computer = 95;

// Total & Percentage

let totalMarks = english + urdu + math + science + computer;
let percentage = (totalMarks / 500) * 100;

// Grade (Direct Value)

let grade = "A";

// Marksheet Output

console.log("===== MARKSHEET =====");
console.log("Student Name: " + studentName);
console.log("Roll Number: " + rollNumber);
console.log("Class: " + className);

console.log("English: " + english);
console.log("Urdu: " + urdu);
console.log("Math: " + math);
console.log("Science: " + science);
console.log("Computer: " + computer);

console.log("Total Marks: " + totalMarks + " / 500");
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);