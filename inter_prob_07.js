//07. Write a program to implement a basic calculator using switch case
function calculator(a, b, operator) {
  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b !== 0) {
        result = a / b;
      } else {
        result = 'Error: Division by zero!';
      }
      break;
    case '%':
      result = a % b;
      break;
    default:
      result = 'Invalid operator!';
  }

  return result;
}

// Example usage:
console.log(calculator(10, 5, '+'));  // Output: 15
console.log(calculator(10, 5, '-'));  // Output: 5
console.log(calculator(10, 5, '='));  // Output: 50