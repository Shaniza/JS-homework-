// 8. Write a function that checks if a string is a palindrome.
function palinDromeCheck(aString){
    let splitString = aString.split('')
    // console.log(splitString)   //[ 'm', 'e', 'r', 'e', 'm' ]
    let reverseString = splitString.reverse()
    // console.log(reverseString)   //[ 'm', 'e', 'r', 'e', 'm' ]
    let joinString = reverseString.join('')
    // console.log(joinString)  //merem
    if(aString == joinString){
        console.log("Palindrome")
    }
    else{
        console.log("Not Palindrome")
    }
}

palinDromeCheck("merem")