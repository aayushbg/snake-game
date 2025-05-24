// index.js

// 1. Simple Greeting Function
function greet(name) {
    console.log(Hello, ${name}!);
}
greet("Tushar");

// 2. Sum of Two Numbers
function sum(a, b) {
    let result = a + b;
    console.log(Sum of ${a} and ${b} is ${result});
    return result;
}
sum(10, 20);

// 3. Factorial Using Recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(Factorial of 5: ${factorial(5)});

// 4. Array Map Example
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log("Squared Numbers:", squared);

// 5. Object Example
const user = {
    name: "Tushar",
    age: 23,
    isDeveloper: true
};
console.log("User Object:", user);

// 6. Arrow Function
const multiply = (x, y) => x * y;
console.log(Multiplication of 5 and 4 is: ${multiply(5, 4)});

// 7. Async Function with Timeout
function delayedMessage() {
    setTimeout(() => {
        console.log("This message is delayed by 2 seconds");
    }, 2000);
}
delayedMessage();

// 8. Promises Example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}
fetchData().then(data => console.log(data));

// 9. Destructuring Example
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(Name: ${name}, Age: ${age});

// 10. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Spread Array:", arr2);

// 11. Default Parameters
function welcome(name = "Guest") {
    console.log(Welcome, ${name});
}
welcome();
welcome("Alice");

// 12. forEach Loop
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(Fruit: ${fruit}));

// 13. String Methods
const msg = "JavaScript is awesome!";
console.log("Uppercase:", msg.toUpperCase());
console.log("Includes 'awesome':", msg.includes("awesome"));

// 14. Date Example
const now = new Date();
console.log("Current Date and Time:", now.toString());

// 15. Try-Catch Error Handling
function divide(a, b) {
    try {
        if (b === 0) throw new Error("Division by zero");
        console.log(Result: ${a / b});
    } catch (err) {
        console.error("Error:", err.message);
    }
}
divide(10, 2);
divide(10, 0);
