// 5. Write a program that checks if two strings are anagrams


//Two strings are anagrams 
// if they contain the same characters in the same frequency,
// // but possibly in a different order.
function strAnagrams(str1, str2){
    str1 = str1.replace(/\s/g, '').toLowerCase()
    str2 = str2.replace(/\s/g, '').toLowerCase()
    if(str1.length != str2.length){
        return false
    }

    let sortedStr1 = str1.split('').sort().join('')
    let sortedStr2 = str2.split('').sort().join('')
   

    return sortedStr1 === sortedStr2

    
}
console.log(strAnagrams('nine', 'enin'))