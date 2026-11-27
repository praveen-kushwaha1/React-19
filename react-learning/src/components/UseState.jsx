import React, { useState } from "react";

/*
=========================================================
PR-003: REACT useState HOOK
=========================================================

Topics Covered:
1. What is useState?
2. How to declare state variables
3. Updating state
4. Functional state updater
5. Passing parameters to event handlers
6. useState with different data types
7. Why normal variables don't work in React

=========================================================
*/

export const UseState = () => {
  // =====================================================
  // 1. useState WITH DIFFERENT DATA TYPES
  // =====================================================

  // Number state
  const [counter, setCounter] = useState(0);

  // String state
  const [name, setName] = useState("Ram");

  // Array state
  const [numbers, setNumbers] = useState([]);

  // Object state
  const [person, setPerson] = useState({
    name: "Praveen",
    age: 26,
  });

  // Boolean state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // =====================================================
  // 2. INCREASE COUNTER
  // =====================================================

  const increase = () => {
    // Functional updater:
    // React provides the previous state value.
    // Useful when new state depends on previous state.

    setCounter((prevCounter) => prevCounter + 1);
  };

  // =====================================================
  // 3. DECREASE COUNTER
  // =====================================================

  const decrease = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  // =====================================================
  // 4. INCREASE COUNTER BY A PARAMETER
  // =====================================================

  const increaseByValue = (value) => {
    // Passing a parameter to the event handler.
    setCounter((prevCounter) => prevCounter + value);
  };

  // =====================================================
  // 5. RESET COUNTER
  // =====================================================

  const resetCounter = () => {
    setCounter(0);
  };

  // =====================================================
  // 6. UPDATE STRING STATE
  // =====================================================

  const changeName = () => {
    setName("Praveen");
  };

  // =====================================================
  // 7. UPDATE ARRAY STATE
  // =====================================================

  const addNumber = () => {
    // Never modify the existing state array directly.
    // Create a new array using spread operator.

    setNumbers((prevNumbers) => [...prevNumbers, prevNumbers.length + 1]);
  };

  // =====================================================
  // 8. UPDATE OBJECT STATE
  // =====================================================

  const updatePerson = () => {
    // Spread operator preserves existing properties.
    // Only age is updated here.

    setPerson((prevPerson) => ({
      ...prevPerson,
      age: prevPerson.age + 1,
    }));
  };

  // =====================================================
  // 9. UPDATE BOOLEAN STATE
  // =====================================================

  const toggleLogin = () => {
    setIsLoggedIn((prevStatus) => !prevStatus);
  };

  // =====================================================
  // 10. JSX
  // =====================================================

  return (
    <>
      <h1>React useState Hook</h1>

      <hr />

      {/* Counter Example */}

      <h2>Counter: {counter}</h2>

      <button onClick={increase}>Increase</button>

      <button onClick={decrease}>Decrease</button>

      <button onClick={() => increaseByValue(100)}>Increase By 100</button>

      <button onClick={resetCounter}>Reset</button>

      <hr />

      {/* String State Example */}

      <h2>Name: {name}</h2>

      <button onClick={changeName}>Change Name</button>

      <hr />

      {/* Array State Example */}

      <h2>Numbers: {numbers.join(", ")}</h2>

      <button onClick={addNumber}>Add Number</button>

      <hr />

      {/* Object State Example */}

      <h2>Person Details</h2>

      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>

      <button onClick={updatePerson}>Increase Age</button>

      <hr />

      {/* Boolean State Example */}

      <h2>Login Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h2>

      <button onClick={toggleLogin}>Toggle Login</button>
    </>
  );
};

export default UseState;
