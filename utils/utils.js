// Returns the sum of two numbers
function add(a, b) {
    return a + b;
}

// Returns the difference of two numbers
function subtract(a, b) {
    return a - b;
}

// Returns the product of two numbers
function multiply(a, b) {
    return a * b;
}

// Returns the quotient of two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

// Checks if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Checks if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// Returns the maximum of two numbers
function max(a, b) {
    return a > b ? a : b;
}