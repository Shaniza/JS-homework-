//6. Write a function to calculate the factorial of a number.
function factorial(x){
    if(x==1){
        return 1
    }
    else{
        return x*factorial(x-1)
    }
}
console.log(factorial(5))