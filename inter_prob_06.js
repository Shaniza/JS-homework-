//6. Write a function that finds the intersection of two arrays.
//which means taking the common elelments of two arrays
function interSection(arr1, arr2){
    return arr1.filter(element => arr2.includes(element))

}
console.log(interSection([1,2,3], [2,3]))