// **Description**

// You are given two inputs stored in variables `input1` and `input2`.

// Perform the following operations and print the results one by one:

// 1. Check if `input1 == input2` (value equality).
// 2. Check if `input1 === input2` (value and type equality).
// 3. Check if `input1 != input2` (value inequality).
// 4. Check if `input1 !== input2` (value and type inequality).

// ---

// **Sample Input 1**

// ```
// 5
// "5"

// ```

// ---

// **Sample Output 1**

// ```
// true
// false
// false
// true

// ```

// ---

// **Explanation of the Test Case**

// - `input1 == input2`: Checks if the value of `input1` (5) is equal to the value of `input2` ("5"). This is `true` because type coercion happens during `==`.
// - `input1 === input2`: Checks if the value and type of `input1` (number) and `input2` (string) are equal. This is `false` because the types are different.
// - `input1 != input2`: Checks if the value of `input1` is not equal to the value of `input2`. This is `false` because their values are equal after type coercion.
// - `input1 !== input2`: Checks if the value and type of `input1` are not equal to `input2`. This is `true` because their types differ (number vs. string).



// Write Your Code Below


let input1=5
let input2="5"
console.log(input1==input2)
console.log(input1===input2)
console.log(input1!=input2)
console.log(input1!==input2)


