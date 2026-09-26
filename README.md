# SpendWise - Budget Tracker Dashboard

## Project Overview

SpendWise is a modern budget tracking dashboard designed to help users view and organize their monthly financial information.

For Week 4, the original SpendWise Budget Tracker was redesigned into a responsive dashboard using **CSS Grid and Flexbox**.

This assignment focuses on the visual layout and user interface. No JavaScript functionality has been added.

---

## Project Files

The project contains the following files:

```text
SpendWise/
│
├── index.html
├── style.css
└── README.md
```

### 1. index.html

The `index.html` file contains the structure of the SpendWise dashboard.

It includes:

* SpendWise logo and branding
* Sidebar navigation menu
* Dashboard header
* Available balance
* Budget summary cards
* Six expense category cards
* Add Expense form
* Recent Expenses section
* Footer

### 2. style.css

The `style.css` file controls the appearance and layout of the dashboard.

It includes:

* CSS Grid
* Flexbox
* CSS custom properties
* Responsive design
* Card hover effects
* Keyboard focus effects
* Dark theme
* Typography
* Colors
* Spacing
* Buttons
* Forms
* Navigation styling

### 3. README.md

This file explains the project, its structure, technologies used, and the CSS techniques implemented.

---

# Dashboard Layout

The main SpendWise dashboard uses **CSS Grid** to create the overall page structure.

The dashboard contains two main areas:

1. Sidebar/navigation
2. Main dashboard content

The layout is created using:

```css
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
}
```

The sidebar has a fixed width of 250px while the main content takes the remaining available space.

---

# Sidebar Navigation

The sidebar contains the SpendWise logo and navigation links.

The navigation items include:

* Dashboard
* Expenses
* Budget
* Savings
* Reports

Flexbox is used to arrange the navigation items vertically.

```css
.navigation {
    display: flex;
    flex-direction: column;
}
```

The navigation also includes hover effects to improve the user experience.

---

# Dashboard Header

The dashboard header contains:

* Welcome message
* Financial Dashboard title
* Dashboard description
* Available balance
* User profile button

Flexbox is used to position the header information and available balance.

```css
.dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

---

# Financial Summary

The dashboard contains three summary cards:

* Total Budget
* Total Spent
* Savings

CSS Grid is used to arrange the summary cards.

```css
.summary-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

---

# Expense Category Cards

The dashboard contains six financial category cards:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

Each card displays:

* Category icon
* Category name
* Category description
* Percentage
* Amount spent
* Budget amount
* Progress bar

CSS Grid is used to arrange the six cards.

```css
.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

Flexbox is used inside each card to arrange its content.

```css
.category-card {
    display: flex;
    flex-direction: column;
}
```

---

# CSS Grid

CSS Grid is used for the major page layouts.

It is used for:

* Overall dashboard layout
* Summary cards
* Expense category cards

The overall dashboard uses:

```css
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
}
```

The category section uses:

```css
.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

This creates a clean three-column desktop layout.

---

# Flexbox

Flexbox is used for smaller internal layouts.

It is used in:

* Sidebar
* Navigation menu
* Dashboard header
* Header actions
* Category cards
* Expense form
* Recent expenses
* Buttons

For example:

```css
.expense-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

Flexbox makes it easier to align and distribute elements within each section.

---

# CSS Custom Properties

SpendWise uses CSS custom properties to create a consistent color theme.

The variables are defined inside the `:root` selector.

Examples include:

```css
:root {
    --brand-color: #2563eb;
    --accent-color: #10b981;
    --background-color: #f1f5f9;
    --surface-color: #ffffff;
    --primary-text: #1e293b;
    --secondary-text: #64748b;
}
```

These variables are reused throughout the stylesheet.

This makes it easier to change the application's color scheme without changing every individual CSS rule.

---

# Responsive Design

The SpendWise dashboard is responsive and adapts to smaller screen sizes.

A media query is used below **768px**:

```css
@media (max-width: 767px)
```

On smaller screens:

* The dashboard changes to a single-column layout.
* The sidebar changes into a horizontal navigation area.
* Summary cards become one column.
* Category cards become one column.
* The expense form becomes one column.
* Dashboard spacing is reduced.

The layout can be tested using the browser's **DevTools Device Toolbar**.

---

# Card Micro-interactions

The expense category cards include hover and keyboard focus animations.

The animation lasts **200 milliseconds**, which satisfies the assignment requirement of 250ms or less.

Hover effect:

```css
.category-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
}
```

Keyboard focus effect:

```css
.category-card:focus {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
}
```

The cards use:

```html
tabindex="0"
```

This allows users to reach the cards using the keyboard.

---

# Dark Theme

As a stretch goal, SpendWise includes a dark theme.

The dark theme is implemented by overriding the CSS custom properties inside:

```css
@media (prefers-color-scheme: dark)
```

For example:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --background-color: #0f172a;
        --surface-color: #1e293b;
        --primary-text: #f8fafc;
        --secondary-text: #94a3b8;
    }
}
```

This allows the dashboard to automatically adapt when the user's device or browser uses dark mode.

---

# Static Content

This week's SpendWise dashboard uses static content.

There is currently no JavaScript functionality.

The following features can be implemented in future versions:

* Adding expenses
* Calculating totals
* Updating budgets
* Tracking savings
* Generating reports
* Storing financial information

The current assignment focuses on the dashboard's visual layout and responsive design.

---

# Technologies Used

The project was created using:

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Media Queries
* Google Fonts

---

# How to Run the Project

To run the SpendWise dashboard:

1. Open the SpendWise project folder in Visual Studio Code.
2. Make sure the following files are present:

```text
index.html
style.css
README.md
```

3. Open `index.html` in a web browser.

You can also use the **Live Server** extension in Visual Studio Code.

If Live Server is installed:

1. Right-click `index.html`.
2. Select **Open with Live Server**.
3. The SpendWise dashboard will open in your browser.

---

# Responsive Testing

The responsive layout can be tested using Google Chrome DevTools.

### Steps

1. Open the SpendWise dashboard in Chrome.
2. Right-click anywhere on the page.
3. Select **Inspect**.
4. Click the **Toggle Device Toolbar** button.
5. Select a mobile device.
6. Test different screen widths.

The dashboard should change to a single-column layout below 768px.

---

# GitHub Submission

The SpendWise project should be uploaded to the existing GitHub repository used for the previous weeks.

The repository should contain:

```text
SpendWise/
│
├── index.html
├── style.css
└── README.md
```

The GitHub repository link can then be submitted as required by the assignment.

---

# Conclusion

The Week 4 SpendWise project provides the foundation for a modern budgeting application.

The dashboard demonstrates practical use of:

* CSS Grid for page structure
* Flexbox for internal component layouts
* CSS custom properties for theming
* Responsive media queries
* Hover and keyboard focus interactions
* Dark mode styling

The project can be expanded in future weeks by adding JavaScript functionality and connecting the application to a database.
