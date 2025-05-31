// 3. Write a program to find the largest of three numbers.
let a = 15
let b = 16
let c = 18

let largest = (a>b)?(a>c?a:c):(b>c?b:c)
console.log(largest)