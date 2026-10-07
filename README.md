# SpendWise - Week 6: Make SpendWise Interactive

SpendWise is a professional personal budgeting dashboard that helps users record expenses, monitor their monthly budget, understand spending by category, and make better financial decisions.

## Improvements Made This Week

This week's work transforms the Week 5 JavaScript foundation into an interactive web application.

### Main improvements

- Added an interactive expense form.
- Added an array of expense records instead of relying on individual expense variables.
- Added loops to calculate totals and generate category cards and expense records.
- Added conditional statements for budget and category decisions.
- Added DOM manipulation so calculations appear directly on the webpage.
- Added event listeners for the expense form, budget form, reset button, mobile navigation, and navigation links.
- Added dynamic budget, total spent, remaining balance, savings, and spending percentage information.
- Added a professional sticky dashboard header.
- Added a responsive mobile navigation menu.
- Added budget status feedback:
  - Healthy budget
  - Budget almost used
  - Budget exceeded
- Added category spending progress.
- Added validation for expense and budget inputs.
- Added a reset button for restoring the demo data.
- Added a savings progress section.
- Improved the visual design while continuing the existing SpendWise dashboard.

## How Conditionals Are Used

Conditional statements are used to make decisions based on the user's financial data.

Examples include:

- Checking whether the entered expense name is empty.
- Checking whether an expense amount is a valid positive number.
- Checking whether the monthly budget is valid.
- Determining whether the user is within the budget, close to the budget limit, or over budget.
- Determining whether a category is on track, near its limit, or over its limit.
- Preventing division by zero when calculating percentages.

For example, the application uses conditions to provide different budget messages:

```javascript
if (remaining < 0) {
    // Budget exceeded
} else if (percentage >= 80) {
    // Budget almost used
} else {
    // Budget is healthy
}
```

## How Arrays Are Used

The `expenses` array stores multiple expense records.

Each expense is represented by an object containing:

- `id`
- `name`
- `amount`
- `category`

Example:

```javascript
let expenses = [
    { id: 1, name: "Groceries", amount: 50, category: "food" },
    { id: 2, name: "Bus Fare", amount: 10, category: "transport" }
];
```

When the user adds a new expense, a new object is added to the array using:

```javascript
expenses.push({
    id: Date.now(),
    name: name,
    amount: amount,
    category: category
});
```

This makes it possible for SpendWise to manage many expense records.

## How Loops Are Used

Loops process the stored expense records efficiently.

For example, the application loops through the `expenses` array to calculate total expenses:

```javascript
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}
```

Loops are also used to:

- Calculate spending for individual categories.
- Display every stored expense.
- Generate the category cards dynamically.

## How the DOM Is Updated

DOM manipulation allows JavaScript to change the webpage without requiring the user to refresh the page.

SpendWise updates:

- Total budget.
- Total spent.
- Remaining balance.
- Spending percentage.
- Savings information.
- Budget status messages.
- Expense category cards.
- Recent expenses.
- Savings progress.

For example:

```javascript
document.querySelector("#spentValue").textContent = formatMoney(total);
```

The application also creates category cards and expense rows using `document.createElement()` and `innerHTML`.

## How User Interactions Are Handled

SpendWise uses event listeners to respond to user actions.

### Add Expense

The expense form listens for the `submit` event:

```javascript
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Process the expense
});
```

When the user submits the form:

1. JavaScript reads the input values.
2. The values are validated.
3. A new expense object is added to the array.
4. Calculations are performed again.
5. The dashboard is updated.
6. A success message is displayed.
7. The form is cleared.

### Update Budget

The monthly budget form also uses a submit event. The new budget is validated and then used to recalculate all dashboard values.

### Reset Demo Data

The reset button uses a click event and a confirmation dialog before restoring the original sample expenses.

### Mobile Navigation

The mobile menu uses a click event to open and close the sidebar.

## Data Flow

The application follows this flow:

**User Action → Event Listener → Validation → Update Array/Data → Calculate Values → DOM Update → User Feedback**

For example:

**Add Expense → submit event → validate input → `expenses.push()` → calculate total → update dashboard → show success message**

## Challenges Encountered and Solutions

### Challenge 1: Keeping dashboard values synchronized

When a new expense was added, several values needed to change at the same time.

**Solution:** A reusable `updateDashboard()` function was created. It calls the functions responsible for rendering each part of the dashboard.

### Challenge 2: Managing multiple expenses

Using separate variables for each expense would become difficult as the application grows.

**Solution:** An array of expense objects was introduced. This makes it easier to add, process, and display multiple records.

### Challenge 3: Handling invalid user input

Users can enter empty names, zero amounts, negative amounts, or invalid budget values.

**Solution:** Conditional validation checks were added before data is stored.

### Challenge 4: Displaying decisions on the webpage

Week 5 mainly displayed results in the console.

**Solution:** Week 6 uses DOM manipulation to display budget results and feedback directly in the SpendWise dashboard.

## Files

- `index.html` - Structure and content of the SpendWise dashboard.
- `style.css` - Professional responsive styling and layout.
- `script.js` - Application logic, arrays, loops, conditionals, DOM manipulation, calculations, and event handling.
- `README.md` - Project documentation and explanation of the Week 6 requirements.

## How to Run

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a web browser.
4. Add expenses using the form.
5. Change the monthly budget to test different budget scenarios.
6. Observe the dashboard update automatically.

## Week 6 Requirements Checklist

- [x] Decision making with conditional statements
- [x] Multiple expense records using arrays
- [x] Loops for processing records
- [x] DOM manipulation
- [x] Event listeners
- [x] Interactive expense form
- [x] Dynamic dashboard updates
- [x] Information displayed directly on the webpage
- [x] User actions connected to JavaScript logic
- [x] Responsive professional dashboard
