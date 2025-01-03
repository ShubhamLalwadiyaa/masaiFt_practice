// date : 03/01/2024 masai day-4



// ## Coding Problem

// ### **Sum of Multiples**

// ---

// **Description**

// Write a program that calculates the sum of all multiples of a given number `n` from `1` to `100`. Use a `while` loop to perform this task.

// ---

// **Sample Input 1**

// ```
// 3

// ```

// **Sample Output 1**

// ```
// 1683

// ```

// ---

// **Explanation of Test Case**

// - The multiples of `3` between `1` and `100` are `3, 6, 9, ..., 99`.
// - Their sum is `1683`, so the output is `1683`.

// ---

// Write the code below

// let i=0
// let n=3
// let sum=0

// while(i<=100){

//     if(i%n==0){
//         sum=sum+i
//         console.log(i)
//     }

//     i++
// }
// console.log(sum)


// let x=5
// let y=x++
// console.log(x,y)






// ## Coding

// ### **Count Even Numbers**

// ---

// **Description**

// Write a program to count the number of even numbers between two given integers, `start` and `end` (inclusive). Use a `for` loop to iterate through the range.

// ---

// **Sample Input 1**

// ```
// 1 10

// ```

// **Sample Output 1**

// ```
// 5

// ```

// **Explanation of Test Cases**

// - For the first test case, the even numbers between 1 and 10 are: 2, 4, 6, 8, 10. The count is `5`.

// ---

// Write the code below


// let count=0

// let start=1
// let end=10
// for(let i=start;i<=end;i++){

//     if(i%2==0){
// count++
//     }
// }
// console.log(count)




// function twoPrimes(a,b) {
//     //write code here
// let primea=0
//   let primeb=0
//   for(let i=1;i<=a;i++){
//     if(a%i==0){
//       primea++
//     }
//   }

//   for(let i=1;i<=b;i++){
//     if(b%i==0){
//       primeb++
//     }
//   }

// if(primea==2 && primeb==2){
//     consoleTrue
//   }else{
//     return False
//   }


// }




// ## Coding Problem

// ### **Problem Statement: Stop at a Multiple of 10**

// Write a program to print numbers from 1 to 100. Your task is to stop the loop as soon as you encounter the first number that is a multiple of 10. When you stop, print the number and display a message indicating that a multiple of 10 was found.

// ---

// ### **Sample Input and Output**

// ### **Sample Run 1:**

// When the loop runs from 1 to 100:

// **Output:**

// ```
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// Found a multiple of 10: 10

// ```

// Write the code below


// const start=1
// const end=100
// const num=10

// for(let i=start;i<=end;i++){
//     console.log(i)
// if(i%10==0){
//     break;
// }
// }



// ## Coding Problem

// ### **Problem Statement: Skip Multiples of 5**

// Write a program to print numbers from 1 to 25. Your task is to skip any number that is a multiple of 5. Instead of stopping the loop, you must continue to the next iteration without printing the skipped number.

// ---

// ### **Sample Input and Output**

// ### **Sample Run 1:**

// When the loop runs from 1 to 25:

// **Output:**

// ```
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 11
// 12
// 13
// 14
// 16
// 17
// 18
// 19
// 21
// 22
// 23
// 24

// ```

// ---

// Write the code below


// const start=1
// const end=25
// for(let i=start;i<=end;i++){
//     if(i%5==0){
//         continue
//     }else{
//         console.log(i)
//     }
// }




// Amazing question
// Problem: Print all Armstrong numbers between two numbers n1 and n2 (inclusive).

// Armstrong Number Definition:
// A number is an Armstrong number if:
// - The sum of its digits, each raised to the power of the number of digits, equals the number itself.

// Input:
// Two integers, n1 and n2, representing the range of numbers.

// Output:
// Print all Armstrong numbers between n1 and n2 (inclusive).

// Example:
// Input: n1 = 100, n2 = 999
// Output: 153, 370, 371, 407


let n1=100
let n2=999

let num=153
let curr=0



let i=n1
while(i<=n2){
    let ans=0
    let num1=i
    //step 1
    ans+=(num1%10)**3
    num1=Math.floor(num1/10)
    //console.log(curr,"ans 1 :",ans,"num1 : ",num1)
    
    //step 2
    ans+=(num1%10)**3
    num1=Math.floor(num1/10)
    //console.log(curr,"ans 1 :",ans,"num1 : ",num1)
    
    //step 3
    ans+=num1**3
    //console.log(curr,"ans 1 :",ans,"num1 : ",num1)

    if(i==ans){
    console.log(i)
    }
    ans=0
    i++
}
