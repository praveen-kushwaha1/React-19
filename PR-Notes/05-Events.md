# React Events and Event Handling

> **💡 Key Improvement:** Your original `let count = 0` will not update the UI when changed. In React, we should use `useState` for values that need to trigger re-rendering.

---

## 1. Improved Code – `Events.jsx`

```jsx
/*
=========================================================
PR-003: REACT EVENTS AND EVENT HANDLING
=========================================================

Topics Covered:
1. What are React Events?
2. Handling Click Events (onClick)
3. Passing Functions as Event Handlers
4. Passing Arguments to Event Handlers
5. Arrow Functions in Event Handling
6. Updating State using useState
7. Changing Background Color Dynamically
8. Inline Event Handling
9. React Event Naming Convention

=========================================================
*/

import React, { useState } from "react";

export const Events = () => {
  // =====================================================
  // 1. REACT STATE
  // =====================================================

  // useState stores component data.
  // When state changes, React re-renders the component.
  const [count, setCount] = useState(0);

  // =====================================================
  // 2. BASIC EVENT HANDLING
  // =====================================================

  // Event handler function.
  // This function executes when the button is clicked.
  const showAlert = () => {
    alert("Welcome! You clicked the Submit button.");
  };

  // =====================================================
  // 3. BACKGROUND COLOR EVENT HANDLING
  // =====================================================

  const changeToLight = () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  };

  const changeToDark = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  };

  // =====================================================
  // 4. EVENT HANDLER WITH ARGUMENTS
  // =====================================================

  // We can pass arguments using an arrow function.
  const showMessage = (value) => {
    alert("You passed value: " + value);
  };

  // =====================================================
  // 5. STATE UPDATE USING BUTTON CLICK
  // =====================================================

  const incrementCounter = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrementCounter = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  // =====================================================
  // 6. JSX / UI
  // =====================================================

  return (
    <>
      <h1>React Events and Event Handling</h1>

      {/* Basic click event */}
      <button onClick={showAlert}>Submit</button>

      <hr />

      {/* Change background color */}
      <h2>Background Color Events</h2>

      <button onClick={changeToLight}>Change to Light</button>

      <button onClick={changeToDark}>Change to Dark</button>

      <hr />

      {/* Passing arguments to event handlers */}
      <h2>Passing Arguments</h2>

      <button onClick={() => showMessage(20)}>Show Message</button>

      <hr />

      {/* Counter using useState */}
      <h2>Counter Application</h2>

      <h3>Counter: {count}</h3>

      <button onClick={incrementCounter}>Increment</button>

      <button onClick={decrementCounter}>Decrement</button>

      <button onClick={resetCounter}>Reset</button>
    </>
  );
};

export default Events;
```

---

## 2. Important Concepts for Revision

### A. React Event Handling

React uses **camelCase** event names instead of lowercase HTML attributes.

| HTML          | React         |
| :------------ | :------------ |
| `onclick`     | `onClick`     |
| `onchange`    | `onChange`    |
| `onsubmit`    | `onSubmit`    |
| `onmouseover` | `onMouseOver` |
| `onkeydown`   | `onKeyDown`   |

### B. Function Reference vs. Function Call

This is one of the most important interview concepts.

- **Correct (Function Reference):**

  ```jsx
  <button onClick={showAlert}>Submit</button>
  ```

  React executes `showAlert` only when the user clicks the button.

- **Incorrect (Immediate Function Call):**
  ```jsx
  <button onClick={showAlert()}>Submit</button>
  ```
  Here, `showAlert()` executes immediately during rendering instead of waiting for the click.

### C. Passing Arguments to Event Handlers

```jsx
const showMessage = (value) => {
  alert(value);
};

// Correct
<button onClick={() => showMessage(20)}>Click Me</button>;
```

**Why use an arrow function?**  
Because wrapping the call in an arrow function ensures `showMessage(20)` only executes when the user actually clicks the button.

### D. Why `useState` Instead of `let`?

**Your original code:**

```jsx
let count = 0;

const counter = (value) => {
  count = value;
};
```

**Problem:**

- Changing a normal JavaScript variable does not trigger a React re-render.
- The UI will continue showing the old value.
- React does not track normal variables as component state.

**Improved:**

```jsx
const [count, setCount] = useState(0);

const counter = (value) => {
  setCount(value);
};
```

Now React automatically updates the UI whenever the state changes.

### E. Functional State Updates

```jsx
setCount((previousCount) => previousCount + 1);
```

This is recommended when the new state depends on the previous state (e.g., Previous count = `5` $\rightarrow$ New count = `6`).

---

## 3. Project Folder Structure

```text
react-learning/
│
├── src/
│   ├── components/
│   │   ├── Events.jsx
│   │   ├── Items.jsx
│   │   └── Product.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

**In `App.jsx`:**

```jsx
import React from "react";
import Events from "./components/Events";

function App() {
  return (
    <>
      <Events />
    </>
  );
}

export default App;
```

---

## 4. Important React Interview Questions and Answers

### Q1. What are events in React?

Events are user interactions such as clicking a button, typing into an input, submitting a form, or moving the mouse. React provides event handlers to respond to these interactions.

### Q2. How do you handle click events in React?

Using the `onClick` event attribute:

```jsx
function handleClick() {
  alert("Button clicked");
}

<button onClick={handleClick}>Click</button>;
```

### Q3. Why do we use camelCase in React events?

React uses camelCase naming conventions (such as `onClick`, `onChange`, and `onSubmit`) to align with JavaScript property naming standards rather than standard HTML lowercase attributes.

### Q4. What is the difference between `onClick={handleClick}` and `onClick={handleClick()}`?

- `onClick={handleClick}` passes the **function reference**, waiting for the click event to fire.
- `onClick={handleClick()}` **executes the function immediately** during the component rendering phase.

### Q5. How do you pass arguments to an event handler?

By wrapping the handler call inside an arrow function:

```jsx
const handleClick = (id) => {
  console.log(id);
};

<button onClick={() => handleClick(101)}>Click</button>;
```

### Q6. What is `useState` in React?

`useState` is a React Hook that allows functional components to maintain and update internal state.

```jsx
const [name, setName] = useState("Praveen");
```

- `name`: Current state value.
- `setName`: State updater function.
- `"Praveen"`: Initial state value.

### Q7. Why should we not directly modify state?

Direct modification mutates the variable without notifying React to re-render the component UI.

- **Incorrect:** `count = count + 1;`
- **Correct:** `setCount(count + 1);`

### Q8. What is the difference between state and normal variables?

| Normal Variable                  | React State                        |
| :------------------------------- | :--------------------------------- |
| Declared using `let` or `const`  | Declared using `useState`          |
| Does not trigger a re-render     | Triggers a component re-render     |
| Not managed by React             | Managed internally by React        |
| Resets on every component render | Preserved across component renders |

### Q9. What is a `SyntheticEvent` in React?

React's `SyntheticEvent` is a cross-browser wrapper around the browser's native event. It ensures events work identically across all browsers.

```jsx
const handleClick = (event) => {
  console.log(event.type);
  console.log(event.target);
};

<button onClick={handleClick}>Click</button>;
```

### Q10. What is the difference between `event.target` and `event.currentTarget`?

- `event.target`: The specific DOM element that originally triggered the event (e.g., a child element clicked inside a button).
- `event.currentTarget`: The DOM element to which the event handler is actually attached.

---

## 5. Practical Exercises

Try completing these challenges without looking at the solution:

- [ ] Create a button that displays an alert when clicked.
- [ ] Create a counter with increment and decrement buttons.
- [ ] Create a reset button that sets the counter to zero.
- [ ] Pass your name as an argument to an event handler.
- [ ] Create light and dark theme buttons.
- [ ] Display the clicked button's value using `event.target`.
- [ ] Create a button that increments the counter by 5.

---

## 6. GitHub PR Description

Use the template below as your pull request description:

```markdown
## Description

Added `Events.jsx` component demonstrating React event handling, `useState` management, and dynamic UI updates.

## Key Changes

- Implemented `onClick` handlers for alerts, theme toggling, and argument passing.
- Replaced local variables with `useState` for reactive counter updates.
- Added functional state updates (`previousCount => previousCount + 1`).

## Checklist

- [x] Code is properly commented for revision
- [x] Tested click events and counter state transitions in browser
```
