/* 
    filename: complexJavascriptCode.js
    content: Complex JavaScript code that incorporates various functionalities and techniques
*/

// Object representing a person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Function to calculate the factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Asynchronous function to fetch data from an API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Creating an instance of the Person class
const person = new Person("John", 25);
person.sayHello();

// Using the factorial function
const result = factorial(5);
console.log(`Factorial of 5: ${result}`);

// Using the fetchData function
fetchData("https://api.example.com/data")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

// Complex code block using closures and higher-order functions
const createCounter = () => {
    let count = 0;
    return () => {
        count++;
        console.log(`Current count: ${count}`);
    };
};

const counter = createCounter();
counter();
counter();
counter();

// Applying event listeners to DOM elements
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// Complex code block using promises and timeouts
const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
};

console.log("Before delay");

delay(2000)
    .then(() => {
        console.log("After delay");
    })
    .catch(error => {
        console.error(error);
    });

// More complex code including regular expressions
const emailValidationRegex = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;

const validateEmail = (email) => {
    if (emailValidationRegex.test(email)) {
        console.log(`Email "${email}" is valid.`);
    } else {
        console.log(`Email "${email}" is invalid.`);
    }
};

validateEmail("test@example.com");
validateEmail("invalidemail@com");

// ...more complex code (continue adding various functionalities as per requirements)...

// Example loop with recursion
const countDown = (num) => {
    if (num < 0) {
        console.log("Finished counting down!");
        return;
    }

    console.log(num);
    countDown(num - 1);
};

countDown(5);

// ...more complex code (continue adding various functionalities as per requirements)...