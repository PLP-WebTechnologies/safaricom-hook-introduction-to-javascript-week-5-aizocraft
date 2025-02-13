document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("main-heading").textContent = "JavaScript in Action!";
    
    const dynamicContent = document.getElementById("dynamic-content");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This content was added dynamically using JavaScript.";
    dynamicContent.appendChild(newParagraph);
    
    const numberList = document.getElementById("number-list");
    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = i;
        numberList.appendChild(listItem);
    }
});

function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    switch (operation) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
        default: alert("Invalid operation."); return;
    }
    alert(`Result: ${result}`);
}

function greetUser(userName) {
    return `Hello, ${userName}! Welcome to JavaScript.`;
}

function displayGreeting() {
    const userName = document.getElementById("username").value;
    const message = userName ? greetUser(userName) : "Please enter your name.";
    document.getElementById("greeting-message").innerText = message;
}

function checkVotingEligibility() {
    const userAge = parseInt(prompt("Enter your age:"));
    const message = userAge >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
    document.getElementById("vote-message").innerText = message;
}

console.log("JavaScript Basics");
const name = "John Doe";
const age = 25;
const isStudent = true;
const hobbies = ["Reading", "Gaming", "Hiking"];
const person = { firstName: "Jane", lastName: "Doe", occupation: "Engineer" };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);
