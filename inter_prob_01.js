//1. Write a function to find the second largest number in an array.
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case
  }

  const pivot = arr[arr.length - 1]; // Choose last element as pivot
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

// Example usage:
const numbers = [5, 3, 8, 4, 2];
let sortedArr = quickSort(numbers) // Output: [2, 3, 4, 5, 8]
console.log(sortedArr)
console.log("The 2nd largest number: "+sortedArr[sortedArr.length-2])