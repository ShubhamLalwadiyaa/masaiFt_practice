// date : 02/01/2025 masai day-3

//today's topic is related to conditional operator 
//example
//-->if
//-->if...else
//nested if..else
//and if.... else if





// ## Coding Problem

// ### **Eligibility Checker**

// ---

// **Description**

// Write a program to determine if a person is eligible for certain benefits based on their age and income. The conditions are:

// 1. The person must be at least 18 years old.
// 2. The person must have an annual income greater than or equal to 250,000.

// If both conditions are met, print `"Eligible"`. Otherwise, print `"Not Eligible"`.

// ---

// **Sample Input 1**

// ```
// 25 300000

// ```

// **Sample Output 1**

// ```
// Eligible

// ```

// ---

// **Explanation of the Test Cases**

// 1. In the first test case, the age is 25 (>= 18) and the income is 300,000 (>= 250,000). Both conditions are satisfied, so the output is `"Eligible"`.

// ---

// Write your code below


let personeAge=25
let personIncome=300000

if(personeAge>=18 && personIncome>=250000){
    console.log("Eligible")
}else{
    console.log("Not Eligible")
}