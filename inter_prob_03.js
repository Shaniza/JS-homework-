// 3. Write a function that removes duplicate elements from an array
function duplicateRemove(arr){
    const uniqueArray = []
    for(let i = 0; i < arr.length; i++){
        const currentElement = arr[i]
        if(uniqueArray.indexOf(currentElement) === -1){
            uniqueArray.push(currentElement)
        }
       
    }
    return uniqueArray
}

const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 1]
const result = duplicateRemove(numbers)
console.log("Original array",numbers)
console.log("Array without duplicate",result)