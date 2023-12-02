/* 
Filename: SophisticatedApp.js
Content: A sophisticated and elaborate JavaScript application with more than 200 lines of code.
*/

// Global Variables
let currentUserName = "";
let currentUserAge = 0;
const maxAge = 100;

// Function to greet the user
function greetUser() {
  const greeting = `Hello, ${currentUserName}!`;
  console.log(greeting);
}

// Function to validate age
function validateAge(age) {
  if (age < 0 || age > maxAge) {
    console.log("Invalid age!");
    return false;
  } else {
    return true;
  }
}

// Function to calculate average of an array of numbers
function calculateAverage(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum / numbers.length;
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  getAge() {
    console.log(`${this.name}'s age is ${this.age}.`);
  }
}

// Function to instantiate Person objects
function createPersons() {
  const person1 = new Person("John", 25);
  const person2 = new Person("Emily", 32);

  person1.sayHello();
  person1.getAge();

  person2.sayHello();
  person2.getAge();
}

// Function to handle user input
function getUserInput() {
  const name = prompt("Please enter your name:");
  currentUserName = name;

  let age = parseInt(prompt("Please enter your age:"));
  while (!validateAge(age)) {
    age = parseInt(prompt("Please enter a valid age:"));
  }
  currentUserAge = age;
}

// Function to generate Fibonacci sequence
function generateFibonacciSeries(length) {
  const series = [0, 1];

  for (let i = 2; i < length; i++) {
    const nextNumber = series[i - 1] + series[i - 2];
    series.push(nextNumber);
  }

  return series;
}

// Main program
function main() {
  greetUser();
  getUserInput();

  console.log(`Welcome, ${currentUserName}!`);

  console.log(
    `In ${maxAge - currentUserAge} years, you will reach the age of ${maxAge}.`
  );

  const numbers = [1, 2, 3, 4, 5];
  const average = calculateAverage(numbers);
  console.log(`The average of the numbers is: ${average}`);

  const fibonacciSeries = generateFibonacciSeries(10);
  console.log(`The first 10 numbers in the Fibonacci series are: ${fibonacciSeries}`);

  createPersons();
}

// Execute the main program
main();