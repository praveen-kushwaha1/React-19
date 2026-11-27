# PR-004: React Conditional Rendering

Your code demonstrates an important React concept: **Conditional Rendering** using the **Ternary Operator (`? :`)** and **Logical AND (`&&`)**.

This learning notebook restructures your notes and preserves your original code while organizing everything into clear sections:
1. Restructured `Items.jsx` with detailed revision comments
2. Expected output breakdown
3. Conditional rendering approaches & comparisons
4. Common mistakes to avoid
5. Interview questions and answers (Basic to Advanced)
6. Practical coding exercises
7. Detailed GitHub Pull Request (PR) description

---

## 1. Restructured `Items.jsx`

```jsx
import React from "react";

// =========================================================
// PR-004: REACT CONDITIONAL RENDERING
// =========================================================
//
// Topics Covered:
//
// 1. What is Conditional Rendering?
// 2. Conditional Rendering using Ternary Operator (? :)
// 3. Conditional Rendering using Logical AND (&&)
// 4. Conditional Rendering using Boolean Values
// 5. Conditional Rendering using Variables
// 6. Conditional Rendering using if/else
// 7. Conditional Rendering using Early Return
// 8. Combining Multiple Conditions
//
// =========================================================


// =========================================================
// 1. WHAT IS CONDITIONAL RENDERING?
// =========================================================
//
// Conditional Rendering means displaying different UI
// elements based on a particular condition.
//
// In React, we can conditionally render JSX using:
//
// 1. if/else
// 2. Ternary operator (? :)
// 3. Logical AND operator (&&)
// 4. Early return
//
// Real-world examples:
//
// - Show Login or Logout button.
// - Display different messages based on age.
// - Show a success message after registration.
// - Display loading or error messages.
// - Show content based on user permissions.
//
// =========================================================


// =========================================================
// 2. CONDITIONAL RENDERING USING TERNARY OPERATOR
// =========================================================
//
// Syntax:
//
// condition ? expressionIfTrue : expressionIfFalse
//
// Explanation:
//
// If the condition is TRUE:
//     Render the first JSX element.
//
// If the condition is FALSE:
//     Render the second JSX element.
//
// Example:
//
// age >= 18 ? "Adult" : "Minor"
//
// Important:
// Ternary operator is useful when we need
// to render one of two possible UI elements.
//
// =========================================================

// export const Items = () => {
//
//   const age = 20;
//
//   return (
//     <div>
//       {age >= 18
//         ? <h1>You can drive</h1>
//         : <h1>You cannot drive</h1>
//       }
//     </div>
//   );
// };


// =========================================================
// 3. CONDITIONAL RENDERING USING LOGICAL AND (&&)
// =========================================================
//
// Syntax:
//
// condition && JSX
//
// Explanation:
//
// If the condition is TRUE:
//     JSX will be rendered.
//
// If the condition is FALSE:
//     JSX will not be rendered.
//
// Example:
//
// const isLoggedIn = true;
//
// {isLoggedIn && <h1>Welcome User</h1>}
//
// If isLoggedIn is true:
//     Welcome User will appear.
//
// If isLoggedIn is false:
//     Nothing will be rendered.
//
// Important:
// Use && when you want to display something
// only if a condition is true.
//
// =========================================================


// =========================================================
// 4. CONDITIONAL RENDERING USING BOOLEAN VARIABLES
// =========================================================
//
// Boolean variables contain either:
//
// true  -> Condition satisfied
// false -> Condition not satisfied
//
// Example:
//
// const addhar = true;
// const gmail = false;
//
// {addhar && <h1>Bank account option</h1>}
// {gmail && <h1>YouTube account option</h1>}
//
// Note:
// In real applications, having an Aadhaar card does not
// automatically guarantee bank account eligibility.
// This example only demonstrates conditional rendering.
//
// =========================================================


// =========================================================
// 5. CONDITIONAL RENDERING USING IF/ELSE
// =========================================================
//
// We can also use normal JavaScript if/else statements
// inside a React component.
//
// However, we cannot directly write an if statement
// inside JSX curly braces.
//
// Instead, calculate the result before returning JSX.
//
// =========================================================

// export const Items = () => {
//
//   const age = 20;
//
//   let message;
//
//   if (age >= 18) {
//     message = "You can drive";
//   } else {
//     message = "You cannot drive";
//   }
//
//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   );
// };


// =========================================================
// 6. CONDITIONAL RENDERING USING EARLY RETURN
// =========================================================
//
// Early return means returning JSX immediately
// when a particular condition is satisfied.
//
// This is useful when we want to handle loading,
// errors, authentication or missing data.
//
// Example:
//
// if (!isLoggedIn) {
//   return <h1>Please login first</h1>;
// }
//
// The component stops executing after this return.
//
// =========================================================

// export const Items = () => {
//
//   const isLoggedIn = false;
//
//   if (!isLoggedIn) {
//     return <h1>Please login first</h1>;
//   }
//
//   return <h1>Welcome User</h1>;
// };


// =========================================================
// 7. COMBINING MULTIPLE CONDITIONS
// =========================================================
//
// We can combine conditions using:
//
// &&  -> Logical AND
// ||  -> Logical OR
// !   -> Logical NOT
//
// Example:
//
// age >= 18 && hasLicense
//
// Both conditions must be TRUE.
//
// Example:
//
// isAdmin || isManager
//
// At least one condition must be TRUE.
//
// =========================================================


// =========================================================
// 8. FINAL IMPLEMENTATION
// =========================================================
//
// This is your original implementation, reorganized
// with better naming, formatting and comments.
//
// Conditions:
//
// age >= 18:
//     Show driving eligibility message.
//
// hasAadhaar:
//     Show bank account information message.
//
// hasGmail:
//     Show YouTube account information message.
//
// =========================================================

export const Items = () => {

  // -------------------------------------------------------
  // STEP 1: DECLARE VARIABLES
  // -------------------------------------------------------

  // Stores the user's age.
  const age = 20;

  // Boolean variable indicating Aadhaar availability.
  const hasAadhaar = true;

  // Boolean variable indicating Gmail availability.
  const hasGmail = false;


  // -------------------------------------------------------
  // STEP 2: RETURN JSX
  // -------------------------------------------------------

  return (

    // React Fragment:
    // Groups multiple JSX elements without an extra DOM node.
    <>

      <div>

        {/* ================================================
            CONDITION 1: TERNARY OPERATOR
            ================================================

            Condition: age >= 18

            TRUE:
                Display "You can drive"

            FALSE:
                Display "You cannot drive"

            Syntax:
                condition ? trueValue : falseValue

        */}

        <h2>Driving Eligibility</h2>

        {age >= 18 ? (
          <h3>You can drive</h3>
        ) : (
          <h3>You cannot drive</h3>
        )}


        {/* ================================================
            CONDITION 2: LOGICAL AND (&&)
            ================================================

            If hasAadhaar is TRUE:
                Display the bank account information.

            If hasAadhaar is FALSE:
                Render nothing.

        */}

        <h2>Aadhaar Verification</h2>

        {hasAadhaar && (
          <h3>You can proceed with bank account opening</h3>
        )}


        {/* ================================================
            CONDITION 3: LOGICAL AND (&&)
            ================================================

            If hasGmail is TRUE:
                Display the YouTube account information.

            If hasGmail is FALSE:
                Render nothing.

        */}

        <h2>Gmail Verification</h2>

        {hasGmail && (
          <h3>You can proceed with YouTube account setup</h3>
        )}

      </div>

    </>
  );
};


// =========================================================
// 9. DEFAULT EXPORT
// =========================================================
//
// Allows us to import this component without curly braces.
//
// Example:
//
// import Items from "./components/Items";
//
// =========================================================

export default Items;
```

---

## 2. Understanding the Expected Output

Given your current state variables:

```javascript
const age = 20;
const hasAadhaar = true;
const hasGmail = false;
```

* **Driving Eligibility (`age >= 18` -> `TRUE`):** Renders `You can drive`
* **Aadhaar Verification (`hasAadhaar` -> `TRUE`):** Renders `You can proceed with bank account opening`
* **Gmail Verification (`hasGmail` -> `FALSE`):** Renders nothing (no YouTube account setup message is displayed)

---

## 3. Conditional Rendering Approaches

| Approach | Syntax | When to Use |
| :--- | :--- | :--- |
| **Ternary** | `condition ? A : B` | Render either `A` or `B` |
| **Logical AND** | `condition && A` | Show `A` only if `condition` is true |
| **Logical OR** | `condition \|\| A` | Provide a fallback value when falsy |
| **If/Else** | `if (condition)` | Complex conditional logic before `return` |
| **Early Return** | `if (!cond) return JSX` | Stop rendering early (e.g., loading/errors) |

### A. Ternary Operator (`? :`)

```jsx
const isLoggedIn = true;

return (
  <>
    {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
  </>
);
```

### B. Logical AND (`&&`)

```jsx
const isAdmin = true;

return (
  <>
    {isAdmin && <h1>Admin Dashboard</h1>}
  </>
);
```

### C. Logical OR (`||`)

```jsx
const userName = "";

return (
  <>
    <h1>{userName || "Guest User"}</h1>
  </>
);
```
> *Note: Because `userName` is an empty string (falsy), `"Guest User"` is displayed.*

### D. `if/else` Statement

```jsx
const age = 20;
let message;

if (age >= 18) {
  message = "Adult";
} else {
  message = "Minor";
}

return <h1>{message}</h1>;
```

### E. Early Return

```jsx
const isLoggedIn = false;

if (!isLoggedIn) {
  return <h1>Please Login First</h1>;
}

return <h1>Welcome User</h1>;
```

---

## 4. Important Mistakes to Avoid

### Mistake 1: Using `if` directly inside JSX

**Incorrect:**
```jsx
return (
  <div>
    {if (age >= 18) {
      <h1>Adult</h1>
    }}
  </div>
);
```

**Correct:** Use a ternary operator inside JSX, or compute a variable with `if/else` before returning JSX.

---

### Mistake 2: Logical AND (`&&`) with numbers (`0`)

**Incorrect:**
```jsx
const count = 0;

return (
  <div>
    {count && <h1>Products Available</h1>}
  </div>
);
```
> *Why?* JavaScript evaluates `0 && ...` to `0`, and React renders the number `0` visibly on the screen.

**Correct:** Ensure the left-hand side evaluates strictly to a boolean:
```jsx
{count > 0 && <h1>Products Available</h1>}
```

---

### Mistake 3: Deeply nested ternary operators

**Avoid:**
```jsx
{age >= 18
  ? age >= 60
    ? "Senior Citizen"
    : "Adult"
  : "Minor"}
```

**Better:** For multi-branch conditions, extract the logic into an `if/else` block or a helper function for readability.

---

## 5. React Conditional Rendering – Interview Questions & Answers

### Level 1: Basic Questions

#### Q1. What is Conditional Rendering in React?
**Answer:** Conditional rendering means displaying different UI elements based on specific conditions. React uses standard JavaScript conditions to decide what should appear on the screen (e.g., showing a dashboard if logged in vs. a login form if logged out, or showing loading/error states).

#### Q2. What are the different ways to perform Conditional Rendering in React?
**Answer:**
1. `if/else` statements
2. Ternary operator (`? :`)
3. Logical AND (`&&`)
4. Logical OR (`||`)
5. Early return (including returning `null`)

#### Q3. What is the Ternary Operator in React?
**Answer:** The ternary operator is an inline JavaScript conditional operator used to render one of two possible outputs.
* **Syntax:** `condition ? expressionIfTrue : expressionIfFalse`
* **Example:**
  ```jsx
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
    </div>
  );
  ```

#### Q4. What is the Logical AND (`&&`) operator in React?
**Answer:** The logical AND operator is used to render an element **only** when a condition is truthy.
* **Example:**
  ```jsx
  const isAdmin = true;

  return (
    <>
      {isAdmin && <h1>Admin Dashboard</h1>}
    </>
  );
  ```

#### Q5. What is the difference between Ternary (`? :`) and Logical AND (`&&`)?
**Answer:**

| Feature | Ternary (`? :`) | Logical AND (`&&`) |
| :--- | :--- | :--- |
| **Branches** | Supports both `true` and `false` branches | Renders content only when condition is `true` |
| **Fallback UI** | Displays alternative UI when `false` | Renders nothing when `false` |
| **Best Use Case** | Choosing between two outputs (e.g., Login vs. Logout) | Optional UI elements (e.g., Notification badge) |

#### Q6. Can we use `if/else` directly inside JSX?
**Answer:** No, because JSX compiles to function calls (`React.createElement`), and `if/else` is a statement rather than an expression. You must evaluate `if/else` before the `return` statement.

#### Q7. What is the purpose of the Logical OR (`||`) operator?
**Answer:** It is commonly used to provide fallback values when a variable is falsy (such as `""`, `null`, `undefined`, or `0`).
```jsx
const name = "";
return <h1>{name || "Guest User"}</h1>;
```

---

### Level 2: Intermediate Questions

#### Q8. What is Early Return in React?
**Answer:** Early return means returning JSX before reaching the main component `return` statement when a condition is met. It is ideal for guard clauses such as authentication checks, loading spinners, and error messages.

```jsx
function Dashboard() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <h1>Access Denied</h1>;
  }

  return <h1>Welcome to Dashboard</h1>;
}
```

#### Q9. What happens when we write `{false && <h1>Hello</h1>}`?
**Answer:** JavaScript evaluates the expression to `false`. React ignores boolean values (`true` and `false`) in JSX and renders nothing.

#### Q10. What happens when we write `{0 && <h1>Products Found</h1>}`?
**Answer:** In JavaScript, `0 && "Products Found"` short-circuits and evaluates to `0`. Unlike booleans, React renders numbers—so `0` appears as text on the screen. Always use a boolean comparison like `{count > 0 && <h1>Products Found</h1>}`.

#### Q11. Can we combine multiple conditions in React?
**Answer:** Yes, using logical operators (`&&`, `||`, `!`).
```jsx
const age = 25;
const hasLicense = true;

return (
  <>
    {age >= 18 && hasLicense
      ? <h1>Eligible to drive</h1>
      : <h1>Not eligible to drive</h1>}
  </>
);
```

#### Q12. What is the difference between `&&` and `||`?
**Answer:**

| Logical AND (`&&`) | Logical OR (`\|\|`) |
| :--- | :--- |
| Both conditions must be true | At least one condition must be true |
| Short-circuits at the first **falsy** value | Short-circuits at the first **truthy** value |
| Commonly used to conditionally show UI | Commonly used for fallback values |

#### Q13. Can we use a helper function for Conditional Rendering?
**Answer:** Yes. Extracting complex conditional logic into a helper function keeps JSX clean and readable.
```jsx
const Items = () => {
  const age = 20;

  const getMessage = () => {
    if (age >= 18) return "Adult";
    return "Minor";
  };

  return <h1>{getMessage()}</h1>;
};
```

#### Q14. What is the difference between rendering nothing and returning `null`?
**Answer:** Returning `null` from a component explicitly tells React to render no DOM nodes for that component while still allowing its lifecycle/hooks to execute normally.
```jsx
function Notification({ show }) {
  if (!show) return null;
  return <h1>New Notification!</h1>;
}
```

---

### Level 3: Advanced & Scenario-Based Questions

#### Q15. How do you handle Loading, Success, and Error states in React?
**Answer:** Use early returns based on a `status` state variable managed via `useState`:
```jsx
function UserData() {
  const status = "loading";

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>Something went wrong</h1>;

  return <h1>Data Loaded Successfully</h1>;
}
```

#### Q16. How do you conditionally render based on user roles?
**Answer:**
```jsx
function Dashboard({ role }) {
  return (
    <>
      {role === "ADMIN" && <h1>Admin Dashboard</h1>}
      {role === "USER" && <h1>User Dashboard</h1>}
      {role === "MANAGER" && <h1>Manager Dashboard</h1>}
    </>
  );
}
```
> **Security Note:** Hiding UI elements on the frontend is for user experience only; backend APIs must independently enforce authorization.

#### Q17. What is the difference between hiding an element with CSS and conditionally rendering it?
**Answer:**
* **CSS (`display: none`):** The element is still mounted in the DOM and retains its state, it is simply hidden visually.
* **Conditional Rendering (`{isVisible && <div />}`):** When `false`, the element is unmounted and completely absent from the DOM.

#### Q18. Does conditional rendering affect component state?
**Answer:** Yes. When a component is conditionally unmounted from the React tree, its local state (`useState`) is destroyed. When it mounts again later, it re-initializes with its default state.

#### Q19. Can we use `switch` statements for Conditional Rendering?
**Answer:** Yes, `switch` statements work well before the `return` statement when handling several distinct states:
```jsx
function Status({ status }) {
  let content;

  switch (status) {
    case "loading":
      content = <h1>Loading...</h1>;
      break;
    case "success":
      content = <h1>Success!</h1>;
      break;
    case "error":
      content = <h1>Error occurred</h1>;
      break;
    default:
      content = <h1>Unknown status</h1>;
  }

  return <div>{content}</div>;
}
```

#### Q20. Which Conditional Rendering approach do you prefer in production applications?
**Answer:** It depends on complexity:
* **Ternary (`? :`)** for simple two-branch toggles.
* **Logical AND (`&&`)** for optional UI elements (ensuring boolean conditions).
* **Early return** for guard clauses (loading, errors, auth).
* **`if/else` or `switch`** for multi-branch business logic.

---

## 6. Practical Coding Exercises

**Coding Challenge Tracker:** `0/8 solved`

- [ ] **Q1.** Display `"Adult"` or `"Minor"` based on `age`. *(Hint: Use the ternary operator)*
- [ ] **Q2.** Display a `"Welcome"` message only when `isLoggedIn` is `true`. *(Hint: Use logical AND `&&`)*
- [ ] **Q3.** Display a `Login` button when logged out and a `Logout` button when logged in. *(Hint: Use the ternary operator)*
- [ ] **Q4.** Display `Admin Dashboard`, `User Dashboard`, or `Manager Dashboard` based on `role`. *(Hint: Use `if/else` or `switch`)*
- [ ] **Q5.** Display `Loading`, `Success`, and `Error` messages based on API status. *(Hint: Use early returns and `useState`)*
- [ ] **Q6.** Display a product count only when `count` is greater than zero. *(Hint: Avoid the `0 && JSX` trap)*
- [ ] **Q7.** Hide an entire `Notification` component when there are no notifications. *(Hint: Return `null`)*
- [ ] **Q8.** Display a message if a user is 18 or older **and** has a driving license. *(Hint: Combine conditions using `&&`)*

---

## 7. GitHub Pull Request Description

Copy and paste the template below for your GitHub PR:

```markdown
### PR-004: React Conditional Rendering

#### Overview
This PR covers **Conditional Rendering in React** using JavaScript conditional statements and logical operators. Conditional Rendering allows React components to dynamically display different UI elements depending on conditions, boolean flags, user permissions, and application states.

#### Topics Covered
1. **Conditional Rendering Basics:** Understanding why conditional rendering is required and real-world use cases.
2. **Ternary Operator (`? :`):** Rendering one of two JSX elements (age eligibility, Login/Logout toggles).
3. **Logical AND Operator (`&&`):** Rendering optional UI elements when a condition is truthy and understanding short-circuit evaluation.
4. **Logical OR Operator (`||`):** Providing fallback values for empty/falsy data.
5. **`if/else` Conditional Rendering:** Computing JSX/values before the `return` statement.
6. **Early Return:** Handling authentication, loading, and error states, plus returning `null`.
7. **Multiple Conditions:** Combining conditions with `&&`, `||`, and `!` for role-based UI rendering.
8. **React Edge Cases:** Conditional rendering vs. CSS visibility, the `0 && JSX` rendering pitfall, and component state lifecycle on unmount.

#### Practical Implementation
Created and documented `Items.jsx` demonstrating:
- Age-based driving eligibility using the **ternary operator**.
- Aadhaar-based bank account prompt using **logical AND (`&&`)**.
- Gmail-based YouTube setup prompt using **logical AND (`&&`)**.

#### Learning Outcomes
- Implement conditional rendering cleanly in React functional components.
- Choose between ternary operators, logical operators, `if/else`, and early returns based on complexity.
- Avoid common JavaScript short-circuit rendering bugs (such as rendering `0`).

#### Technologies
- React.js
- JavaScript (ES6+)
- JSX

#### PR Status
**Completed:** React Conditional Rendering fundamentals, practical examples, and interview preparation notes.
```