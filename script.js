// =========================================================
// SPENDWISE - WEEK 5
// JAVASCRIPT FOUNDATION
// =========================================================


// =========================================================
// 1. APPLICATION VARIABLES
// =========================================================

// Main budget information
let monthlyBudget = 2500;

// Expense information
let totalExpenses = 1250;

// Savings amount
let savingsAmount = 750;

// Currency used by SpendWise
const currency = "Ksh";


// =========================================================
// 2. CALCULATION FUNCTIONS
// =========================================================

/*
 * Calculate the remaining balance.
 *
 * Formula:
 * Remaining Balance = Budget - Expenses
 */
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


/*
 * Calculate the percentage of the budget that has been spent.
 */
function calculateSpendingPercentage(budget, expenses) {
    if (budget <= 0) {
        return 0;
    }

    return (expenses / budget) * 100;
}


/*
 * Format money values so they are easier to read.
 */
function formatMoney(amount) {
    return `${currency} ${amount.toFixed(2)}`;
}


// =========================================================
// 3. CALCULATE INITIAL BUDGET INFORMATION
// =========================================================

let remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);

let spendingPercentage = calculateSpendingPercentage(
    monthlyBudget,
    totalExpenses
);


// =========================================================
// 4. DISPLAY RESULTS IN THE CONSOLE
// =========================================================

console.log("======================================");
console.log("        SPENDWISE BUDGET REPORT       ");
console.log("======================================");

console.log("Monthly Budget:", formatMoney(monthlyBudget));

console.log("Total Expenses:", formatMoney(totalExpenses));

console.log("Savings:", formatMoney(savingsAmount));

console.log(
    "Remaining Balance:",
    formatMoney(remainingBalance)
);

console.log(
    "Percentage Spent:",
    spendingPercentage.toFixed(2) + "%"
);

console.log("======================================");


// =========================================================
// 5. COLLECT USER INPUT USING PROMPTS
// =========================================================

let userBudget = prompt(
    "Welcome to SpendWise!\n\nEnter your monthly budget:"
);


// Check whether the user entered a value
if (userBudget !== null && userBudget.trim() !== "") {

    // Convert the input from text to a number
    userBudget = Number(userBudget);

    // Check that the value is a valid positive number
    if (!isNaN(userBudget) && userBudget >= 0) {

        let userExpenses = prompt(
            "Enter your total expenses:"
        );

        if (
            userExpenses !== null &&
            userExpenses.trim() !== ""
        ) {

            // Convert expense input to a number
            userExpenses = Number(userExpenses);

            // Validate expense input
            if (
                !isNaN(userExpenses) &&
                userExpenses >= 0
            ) {

                // Store the user's values
                monthlyBudget = userBudget;
                totalExpenses = userExpenses;

                // Calculate the new remaining balance
                remainingBalance =
                    calculateRemainingBalance(
                        monthlyBudget,
                        totalExpenses
                    );

                // Calculate spending percentage
                spendingPercentage =
                    calculateSpendingPercentage(
                        monthlyBudget,
                        totalExpenses
                    );


                // =================================================
                // DISPLAY USER RESULTS IN CONSOLE
                // =================================================

                console.log("");
                console.log(
                    "========== YOUR SPENDWISE RESULTS =========="
                );

                console.log(
                    "Your Budget:",
                    formatMoney(monthlyBudget)
                );

                console.log(
                    "Your Expenses:",
                    formatMoney(totalExpenses)
                );

                console.log(
                    "Remaining Balance:",
                    formatMoney(remainingBalance)
                );

                console.log(
                    "Percentage Spent:",
                    spendingPercentage.toFixed(2) + "%"
                );

                console.log(
                    "============================================"
                );


                // Display a simple message in the browser
                if (remainingBalance > 0) {

                    console.log(
                        "Status: You have money remaining in your budget."
                    );

                } else if (remainingBalance === 0) {

                    console.log(
                        "Status: You have used your entire budget."
                    );

                } else {

                    console.log(
                        "Status: Your expenses are greater than your budget."
                    );
                }

            } else {

                console.log(
                    "Invalid expense amount. Please enter a valid number."
                );
            }

        } else {

            console.log(
                "No expense amount was entered. Default values will be used."
            );
        }

    } else {

        console.log(
            "Invalid budget amount. Please enter a valid number."
        );
    }

} else {

    console.log(
        "No budget was entered. Default SpendWise values will be used."
    );
}


// =========================================================
// 6. ADD EXPENSE USING THE FORM
// =========================================================

const addExpenseButton = document.querySelector(".add-button");

const expenseNameInput =
    document.querySelector("#expense-name");

const expenseAmountInput =
    document.querySelector("#expense-amount");

const expenseCategoryInput =
    document.querySelector("#expense-category");


if (addExpenseButton) {

    addExpenseButton.addEventListener(
        "click",
        function () {

            const expenseName =
                expenseNameInput.value.trim();

            const expenseAmount =
                Number(expenseAmountInput.value);

            const expenseCategory =
                expenseCategoryInput.value;


            // Validate the form
            if (expenseName === "") {

                console.log(
                    "Please enter an expense name."
                );

                return;
            }


            if (
                isNaN(expenseAmount) ||
                expenseAmount <= 0
            ) {

                console.log(
                    "Please enter a valid expense amount."
                );

                return;
            }


            // Add the new expense to total expenses
            totalExpenses += expenseAmount;


            // Recalculate remaining balance
            remainingBalance =
                calculateRemainingBalance(
                    monthlyBudget,
                    totalExpenses
                );


            // Recalculate spending percentage
            spendingPercentage =
                calculateSpendingPercentage(
                    monthlyBudget,
                    totalExpenses
                );


            // Display the new expense
            console.log("");
            console.log(
                "========== NEW EXPENSE =========="
            );

            console.log(
                "Expense Name:",
                expenseName
            );

            console.log(
                "Category:",
                expenseCategory
            );

            console.log(
                "Amount:",
                formatMoney(expenseAmount)
            );

            console.log(
                "Total Expenses:",
                formatMoney(totalExpenses)
            );

            console.log(
                "Remaining Balance:",
                formatMoney(remainingBalance)
            );

            console.log(
                "Percentage Spent:",
                spendingPercentage.toFixed(2) + "%"
            );

            console.log(
                "================================"
            );


            // Clear the form after adding the expense
            expenseNameInput.value = "";
            expenseAmountInput.value = "";
        }
    );
}