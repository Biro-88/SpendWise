SpendWise - JavaScript Foundation
Project Description

SpendWise is a budget tracking dashboard designed to help users understand and manage their monthly finances.

The project started as a visual budget tracker and has been progressively developed using HTML, CSS, Flexbox, Grid, and now JavaScript.

In Week 5, JavaScript was introduced to transform SpendWise from a static dashboard into an application that can process budgeting and expense data.

Features

The current SpendWise project includes:

Monthly budget information
Total expenses
Remaining balance calculation
Savings information
Expense categories
Add Expense form
Budget calculations
Spending percentage calculation
JavaScript user input prompts
Console output for calculated results
Reusable JavaScript functions
Responsive dashboard layout
JavaScript Concepts Implemented

The Week 5 assignment demonstrates the following JavaScript concepts:

1. Variables

Variables are used to store important application data.

Examples include:

Monthly budget
Total expenses
Savings amount
Remaining balance
Spending percentage
Currency

The project uses let for values that can change and const for values that remain constant.

Example:

let monthlyBudget = 2500;
let totalExpenses = 1250;
let savingsAmount = 750;

const currency = "Ksh";
2. Data Types

The project uses different JavaScript data types.

Numbers are used for financial calculations:

let monthlyBudget = 2500;

Strings are used for text values:

const currency = "Ksh";

Boolean-style conditions are also used when validating user input and checking budget results.

3. User Input

SpendWise collects budget information using JavaScript prompt().

The user is asked to enter:

Monthly budget
Total expenses

Example:

let userBudget = prompt(
    "Welcome to SpendWise!\n\nEnter your monthly budget:"
);

The values returned by prompt() are converted from strings into numbers using Number().

Example:

userBudget = Number(userBudget);
4. Calculations

SpendWise performs calculations using JavaScript.

The main calculation determines the remaining balance:

remainingBalance = budget - expenses;

The project also calculates the percentage of the budget that has been spent:

(expenses / budget) * 100;

For example, if the budget is Ksh 5,000 and expenses are Ksh 2,000:

Remaining Balance = Ksh 3,000
Percentage Spent = 40%
5. Functions

Functions are used to organize the JavaScript code and make calculations reusable.

The project includes a function for calculating the remaining balance:

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

It also includes a function for calculating the percentage spent:

function calculateSpendingPercentage(budget, expenses) {
    if (budget <= 0) {
        return 0;
    }

    return (expenses / budget) * 100;
}

A formatting function is also used to display money values clearly:

function formatMoney(amount) {
    return `${currency} ${amount.toFixed(2)}`;
}

Using functions keeps the code organized and allows the same logic to be reused.

6. Console Output

Calculated results are displayed in the browser console using console.log().

The console displays information such as:

Monthly budget
Total expenses
Savings
Remaining balance
Percentage spent
Newly added expenses

Example:

console.log(
    "Remaining Balance:",
    formatMoney(remainingBalance)
);
How the Application Works
The SpendWise dashboard loads in the browser.
The JavaScript file is loaded using a script tag in index.html.
Default budget information is stored in JavaScript variables.
The user is asked to enter a monthly budget.
The user is asked to enter total expenses.
The input values are converted into numbers.
JavaScript functions calculate the remaining balance and percentage spent.
The results are displayed in the browser console.
Users can also enter an expense through the Add Expense form.
The application recalculates the total expenses and remaining balance.
Files in the Project
index.html

Contains the structure and content of the SpendWise dashboard.

style.css

Contains the visual design, responsive layout, CSS Grid, Flexbox, colors, typography, cards, forms, and responsive styles.

script.js

Contains the JavaScript logic for:

Variables
User input
Data processing
Budget calculations
Functions
Expense calculations
Console output
README.md

Provides information about the SpendWise project, its features, JavaScript concepts, and how the application works.

Technologies Used
HTML5
CSS3
JavaScript
CSS Grid
Flexbox
Google Fonts
Testing

The application was tested by:

Loading the JavaScript file through the browser
Entering different budget amounts
Entering different expense amounts
Checking remaining balance calculations
Checking spending percentage calculations
Adding expenses through the form
Checking results in the browser console
Testing invalid and empty input
Conclusion

Week 5 adds the JavaScript foundation to SpendWise.

The project can now accept user input, store financial information in variables, perform budget calculations, use reusable functions, and display calculated results in the browser console.

The project will continue to be developed in future weeks as additional JavaScript functionality is introduced.
