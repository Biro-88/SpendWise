/* =========================================================
   SPENDWISE - WEEK 6
   INTERACTIVE JAVASCRIPT
   ========================================================= */

// -----------------------------
// 1. APPLICATION DATA
// -----------------------------

let monthlyBudget = 2500;
const savingsTarget = 750;
const currency = "Ksh";

// Array: multiple expense records are stored as objects.
let expenses = [
    { id: 1, name: "Groceries", amount: 50, category: "food" },
    { id: 2, name: "Bus Fare", amount: 10, category: "transport" },
    { id: 3, name: "House Rent", amount: 300, category: "rent" },
    { id: 4, name: "Movie Ticket", amount: 15, category: "entertainment" }
];

// Category information used to build the dashboard dynamically.
const categories = {
    food: {
        name: "Food",
        icon: "🍔",
        description: "Groceries and meals",
        limit: 500
    },
    transport: {
        name: "Transport",
        icon: "🚌",
        description: "Bus fares and travel",
        limit: 300
    },
    rent: {
        name: "Rent",
        icon: "🏠",
        description: "Monthly house rent",
        limit: 600
    },
    entertainment: {
        name: "Entertainment",
        icon: "🎬",
        description: "Movies and recreation",
        limit: 200
    },
    savings: {
        name: "Savings",
        icon: "💰",
        description: "Emergency and future goals",
        limit: 1000
    },
    utilities: {
        name: "Utilities",
        icon: "💡",
        description: "Electricity and phone bills",
        limit: 250
    }
};

// -----------------------------
// 2. DOM ELEMENTS
// -----------------------------

const expenseForm = document.querySelector("#expenseForm");
const expenseNameInput = document.querySelector("#expense-name");
const expenseAmountInput = document.querySelector("#expense-amount");
const expenseCategoryInput = document.querySelector("#expense-category");
const expenseList = document.querySelector("#expenseList");
const emptyState = document.querySelector("#emptyState");
const formMessage = document.querySelector("#formMessage");
const categoryGrid = document.querySelector("#categoryGrid");
const budgetForm = document.querySelector("#budgetForm");
const monthlyBudgetInput = document.querySelector("#monthly-budget");
const clearExpensesButton = document.querySelector("#clearExpenses");
const mobileMenu = document.querySelector("#mobileMenu");
const sidebar = document.querySelector(".sidebar");

// -----------------------------
// 3. REUSABLE CALCULATION FUNCTIONS
// -----------------------------

function formatMoney(amount) {
    return `${currency} ${amount.toFixed(2)}`;
}

function calculateTotalExpenses() {
    let total = 0;

    // Loop through every record in the expenses array.
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

function calculateRemainingBalance() {
    return monthlyBudget - calculateTotalExpenses();
}

function calculateSpendingPercentage() {
    if (monthlyBudget <= 0) {
        return 0;
    }

    return (calculateTotalExpenses() / monthlyBudget) * 100;
}

function getCategoryTotal(category) {
    let total = 0;

    // Loop through stored expenses and select one category.
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].category === category) {
            total += expenses[i].amount;
        }
    }

    return total;
}

function getCategoryPercentage(category) {
    const limit = categories[category].limit;
    const amount = getCategoryTotal(category);

    if (limit <= 0) {
        return 0;
    }

    return (amount / limit) * 100;
}

function getStatus() {
    const remaining = calculateRemainingBalance();
    const percentage = calculateSpendingPercentage();

    // Conditional statements make decisions based on user data.
    if (remaining < 0) {
        return {
            type: "danger",
            title: "Budget exceeded",
            message: `You are ${formatMoney(Math.abs(remaining))} over your monthly budget. Review your expenses.`
        };
    }

    if (percentage >= 80) {
        return {
            type: "warning",
            title: "Budget almost used",
            message: `You have used ${percentage.toFixed(0)}% of your budget. Consider limiting non-essential spending.`
        };
    }

    return {
        type: "success",
        title: "Budget looks healthy",
        message: `You still have ${formatMoney(remaining)} available for the month.`
    };
}

function getCategoryStatus(category) {
    const percentage = getCategoryPercentage(category);

    if (percentage >= 100) {
        return "Over limit";
    }

    if (percentage >= 80) {
        return "Near limit";
    }

    return "On track";
}

function getCategoryStatusClass(category) {
    const percentage = getCategoryPercentage(category);

    if (percentage >= 100) {
        return "danger";
    }

    if (percentage >= 80) {
        return "warning";
    }

    return "success";
}

function getCategoryIcon(category) {
    return categories[category]?.icon || "💳";
}

// -----------------------------
// 4. DOM MANIPULATION
// -----------------------------

function renderSummary() {
    const total = calculateTotalExpenses();
    const remaining = calculateRemainingBalance();
    const percentage = calculateSpendingPercentage();

    document.querySelector("#budgetValue").textContent = formatMoney(monthlyBudget);
    document.querySelector("#spentValue").textContent = formatMoney(total);
    document.querySelector("#remainingValue").textContent = formatMoney(remaining);
    document.querySelector("#headerBalance").textContent = formatMoney(remaining);

    document.querySelector("#spentPercentage").textContent =
        `${percentage.toFixed(1)}% of budget used`;

    document.querySelector("#remainingLabel").textContent =
        remaining >= 0 ? "Available to spend" : "Amount over budget";

    document.querySelector("#savingsValue").textContent = formatMoney(savingsTarget);

    const savingsPercentage = monthlyBudget > 0
        ? (savingsTarget / monthlyBudget) * 100
        : 0;

    document.querySelector("#savingsPercentage").textContent =
        `${savingsPercentage.toFixed(1)}% of monthly budget`;
}

function renderStatus() {
    const alert = document.querySelector("#budgetAlert");
    const title = document.querySelector("#statusTitle");
    const message = document.querySelector("#statusMessage");
    const icon = alert.querySelector(".alert-icon");
    const status = getStatus();

    alert.className = "budget-alert";

    if (status.type === "warning") {
        alert.classList.add("warning");
        icon.textContent = "!";
    } else if (status.type === "danger") {
        alert.classList.add("danger");
        icon.textContent = "×";
    } else {
        icon.textContent = "✓";
    }

    title.textContent = status.title;
    message.textContent = status.message;
}

function renderCategories() {
    categoryGrid.innerHTML = "";

    // Loop through categories and create the cards dynamically.
    for (const key in categories) {
        const category = categories[key];
        const amount = key === "savings" ? savingsTarget : getCategoryTotal(key);
        const limit = category.limit;

        let percentage = limit > 0 ? (amount / limit) * 100 : 0;

        // Prevent the progress bar from becoming wider than the card.
        const progressWidth = Math.min(percentage, 100);
        const statusClass = getCategoryStatusClass(key);
        const statusText = key === "savings"
            ? `${percentage.toFixed(0)}% target`
            : getCategoryStatus(key);

        const card = document.createElement("article");
        card.className = "category-card";

        card.innerHTML = `
            <div class="card-top">
                <div class="category-icon">${category.icon}</div>
                <span class="percentage">${percentage.toFixed(0)}%</span>
            </div>

            <div class="card-content">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </div>

            <div class="card-bottom">
                <strong>${formatMoney(amount)}</strong>
                <span>of ${formatMoney(limit)}</span>
            </div>

            <div class="progress">
                <span style="width: ${progressWidth}%;"></span>
            </div>

            <small class="category-status ${statusClass}">${statusText}</small>
        `;

        categoryGrid.appendChild(card);
    }
}

function renderExpenses() {
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        emptyState.hidden = false;
        return;
    }

    emptyState.hidden = true;

    // Loop through all expense records and display each one.
    for (let i = expenses.length - 1; i >= 0; i--) {
        const expense = expenses[i];

        const row = document.createElement("div");
        row.className = "expense-row";

        row.innerHTML = `
            <div class="expense-info">
                <span class="expense-icon">${getCategoryIcon(expense.category)}</span>
                <div>
                    <strong>${escapeHTML(expense.name)}</strong>
                    <small>${categories[expense.category]?.name || "Other"}</small>
                </div>
            </div>
            <strong class="expense-amount">${formatMoney(expense.amount)}</strong>
        `;

        expenseList.appendChild(row);
    }
}

function renderSavings() {
    const progress = monthlyBudget > 0
        ? Math.min((savingsTarget / monthlyBudget) * 100, 100)
        : 0;

    document.querySelector("#savingsTargetText").textContent =
        formatMoney(savingsTarget);

    document.querySelector("#savingsProgress").style.width = `${progress}%`;

    if (monthlyBudget <= 0) {
        document.querySelector("#savingsMessage").textContent =
            "Set a monthly budget to calculate your savings target.";
    } else if (savingsTarget >= monthlyBudget) {
        document.querySelector("#savingsMessage").textContent =
            "Your savings target is equal to or above your current budget.";
    } else {
        document.querySelector("#savingsMessage").textContent =
            `Your target represents ${((savingsTarget / monthlyBudget) * 100).toFixed(1)}% of your monthly budget.`;
    }
}

function updateDashboard() {
    renderSummary();
    renderStatus();
    renderCategories();
    renderExpenses();
    renderSavings();
}

// Simple safety helper for user-entered expense names.
function escapeHTML(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

// -----------------------------
// 5. EVENT HANDLING
// -----------------------------

expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    // Conditional validation.
    if (name === "") {
        showFormMessage("Please enter an expense name.", "error");
        expenseNameInput.focus();
        return;
    }

    if (Number.isNaN(amount) || amount <= 0) {
        showFormMessage("Please enter an amount greater than zero.", "error");
        expenseAmountInput.focus();
        return;
    }

    // Add a new object to the expenses array.
    expenses.push({
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    });

    updateDashboard();

    showFormMessage(
        `${name} was added successfully. Dashboard updated.`,
        "success"
    );

    expenseForm.reset();
    expenseNameInput.focus();
});

budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newBudget = Number(monthlyBudgetInput.value);

    if (Number.isNaN(newBudget) || newBudget < 0) {
        showFormMessage("Please enter a valid budget amount.", "error");
        return;
    }

    monthlyBudget = newBudget;
    updateDashboard();

    showFormMessage(
        `Monthly budget updated to ${formatMoney(monthlyBudget)}.`,
        "success"
    );
});

clearExpensesButton.addEventListener("click", function () {
    const shouldReset = confirm(
        "Reset the demo expenses and return to the original SpendWise sample data?"
    );

    if (!shouldReset) {
        return;
    }

    expenses = [
        { id: 1, name: "Groceries", amount: 50, category: "food" },
        { id: 2, name: "Bus Fare", amount: 10, category: "transport" },
        { id: 3, name: "House Rent", amount: 300, category: "rent" },
        { id: 4, name: "Movie Ticket", amount: 15, category: "entertainment" }
    ];

    monthlyBudget = 2500;
    monthlyBudgetInput.value = monthlyBudget;

    updateDashboard();
    showFormMessage("Demo data has been reset.", "success");
});

mobileMenu.addEventListener("click", function () {
    sidebar.classList.toggle("open");
});

// Close mobile navigation after clicking a link.
document.querySelectorAll(".nav-item").forEach(function (link) {
    link.addEventListener("click", function () {
        document.querySelectorAll(".nav-item").forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
        sidebar.classList.remove("open");
    });
});

// -----------------------------
// 6. INITIAL PAGE RENDER
// -----------------------------

const today = new Date();
const monthName = today.toLocaleString("en-US", { month: "long" });
const year = today.getFullYear();

document.querySelector("#currentPeriod").textContent =
    `${monthName} ${year}`;

document.querySelector("#categoryPeriod").textContent =
    `${monthName} ${year}`;

monthlyBudgetInput.value = monthlyBudget;

// Build the complete dashboard when the page loads.
updateDashboard();
