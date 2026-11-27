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
