/*
=========================================================
PR-002: REACT COMPONENTS AND JSX
=========================================================

Topics covered:
1. Functional Components
2. Default Export
3. Named Export
4. Import and Export
5. JSX
6. JavaScript Expressions in JSX
7. Variables inside JSX
8. Objects inside JSX
9. React Fragments
=========================================================
*/

// =======================================================
// 1. BASIC FUNCTIONAL COMPONENT
// =======================================================

// A React component is a JavaScript function that
// returns JSX to describe the user interface.

// const Compo = () => {
//   return <div>Hello</div>;
// };

// export default Compo;

// =======================================================
// 2. NAMED EXPORT COMPONENT
// =======================================================

// We can export a component directly using export.

// export const Compo1 = () => {
//   return <div>Hello Praveen</div>;
// };

// Importing a named export:
// import { Compo1 } from './Compo.jsx';
//
// NOTE:
// If we use named export, we normally need curly braces
// while importing the component.

// =======================================================
// 3. IMPORT REACT
// =======================================================

import React from "react";

// NOTE:
// Modern React projects using Vite's automatic JSX
// transform do not require this React import for JSX.
// Keeping it here as part of your original lecture code.

// =======================================================
// 4. JSX AND JAVASCRIPT EXPRESSIONS
// =======================================================

// export const Compo = () => {

//   // JavaScript variable
//   const name = "Praveen";

//   const num = 25;

//   // JavaScript object
//   const Person = {
//     name: "Harshhit",
//     gmail: "praveen@gmail.com",
//   };

//   return (
//     <div>
//       <h1>Hello</h1>

//       {/* This displays 2+5 as plain text */}
//       <h1>2+5</h1>

//       {/* Curly braces execute JavaScript expressions */}
//       <h1>{5 + 6}</h1>

//       {/* Accessing JavaScript variables */}
//       <h1>Name = {name}</h1>
//       <h1>Name = {num}</h1>

//       {/* Accessing object properties */}
//       <h1>Name = {Person.name}</h1>
//       <h1>Name = {Person.gmail}</h1>
//     </div>

//     {/* Returning one more sibling directly is not valid.
//         Use a Fragment <> </> or a parent element. */}

//     <h1>return one more elem</h1>
//   );
// };

// =======================================================
// 5. REACT FRAGMENTS
// =======================================================

// A component must return one root JSX element.
//
// If we want to return multiple sibling elements,
// we can use React Fragment: <> </>
//
// Fragment groups multiple elements without adding
// an extra HTML element to the DOM.

// =======================================================
// 6. FINAL IMPLEMENTATION
// =======================================================

export const Compo = () => {
  // JavaScript variable
  const name = "Praveen";

  const num = 25;

  // JavaScript object
  const Person = {
    name: "Harshhit",
    gmail: "praveen@gmail.com",
  };

  // Returning JSX
  return (
    <>
      <div>
        {/* Normal JSX text */}
        <h1>Hello</h1>

        {/* Displays plain text: 2+5 */}
        <h1>2+5</h1>

        {/* JavaScript expression: displays 11 */}
        <h1>{5 + 6}</h1>

        {/* Displaying JavaScript variables */}
        <h1>Name = {name}</h1>
        <h1>Name = {num}</h1>

        {/* Accessing JavaScript object properties */}
        <h1>Name = {Person.name}</h1>
        <h1>Name = {Person.gmail}</h1>
      </div>

      {/* Second sibling element using Fragment */}
      <h1>return second value using fragment</h1>
    </>
  );
};

// =======================================================
// 7. DEFAULT EXPORT
// =======================================================

// Default export allows us to import App without
// curly braces.
//
// Example:
// import App from './App.jsx';

export default Compo;

// =======================================================
// REVISION SUMMARY
// =======================================================
//
// 1. Functional component:
//    const App = () => { return <h1>Hello</h1> }
//
// 2. Default export:
//    export default App;
//
// 3. Named export:
//    export const App1 = () => {};
//
// 4. Named import:
//    import { App1 } from './App.jsx';
//
// 5. Default import:
//    import App from './App.jsx';
//
// 6. JSX:
//    HTML-like syntax inside JavaScript.
//
// 7. JavaScript expression:
//    {5 + 6}
//
// 8. Object property:
//    {Person.name}
//
// 9. Fragment:
//    <> </> allows multiple sibling elements
//    without an additional DOM wrapper.
//
// =======================================================

/*
=========================================================
       PR-002: IMPORTANT REACT INTERVIEW QUESTIONS
                  Components and JSX
=========================================================

Q1. What is a React component?
Ans:
A component is a reusable, independent piece of UI.
It can be created using a JavaScript function.

Example:
const Welcome = () => {
    return <h1>Hello React</h1>;
};


Q2. What are the types of components in React?
Ans:
1. Functional Components
2. Class Components

Modern React applications primarily use functional components.


Q3. What is JSX?
Ans:
JSX stands for JavaScript XML.
It allows us to write HTML-like syntax inside JavaScript.

Example:
const element = <h1>Hello React</h1>;

JSX is converted into JavaScript by the build tool.


Q4. Can a React component return multiple elements?
Ans:
A component must return one parent element.
We can use a div or React Fragment.

Example:
return (
    <>
        <h1>Hello</h1>
        <p>Welcome</p>
    </>
);


Q5. What is React Fragment?
Ans:
Fragment groups multiple elements without adding
an extra DOM element.

Syntax:
<>
    <h1>Hello</h1>
    <p>Welcome</p>
</>


Q6. What is the difference between named export
and default export?

Ans:

Named export:
export const App = () => {
    return <h1>Hello</h1>;
};

Import:
import { App } from "./App";

Default export:
const App = () => {
    return <h1>Hello</h1>;
};

export default App;

Import:
import App from "./App";


Q7. How do we write JavaScript expressions in JSX?
Ans:
Use curly braces {}.

Example:
const name = "Praveen";

return <h1>Hello {name}</h1>;

We can use expressions:
{5 + 6}
{user.name}
{isLoggedIn ? "Welcome" : "Login"}


Q8. Can we write an if-else statement directly
inside JSX?
Ans:
No. We cannot directly write if-else statements
inside JSX expressions.

We can use:
1. Ternary operator
2. Logical AND (&&)
3. Conditional rendering outside JSX


Q9. What is the difference between JSX and HTML?
Ans:
1. JSX uses className instead of class.
2. JSX uses camelCase event names, such as onClick.
3. JSX expressions are written inside {}.
4. JSX elements must be properly closed.
5. JSX must return a single parent element.


Q10. Is React.createElement() related to JSX?
Ans:
Yes. JSX is transformed into JavaScript calls
that create React elements.

Conceptual example:
const element = React.createElement(
    "h1",
    null,
    "Hello React"
);


Q11. Why do we use export default?
Ans:
It allows a module to export one default value.
We can import it without curly braces and use
any valid local name.


Q12. Why is component naming important?
Ans:
React component names should start with an uppercase
letter. Lowercase JSX tags are treated as HTML elements.

Example:
<MyComponent />  // React component
<div />          // HTML element


=========================================================
                 QUICK REVISION
=========================================================

1. Component       = Reusable UI block
2. JSX             = HTML-like syntax in JavaScript
3. Fragment        = Group elements without extra DOM
4. {}              = JavaScript expression inside JSX
5. Named export    = Import using curly braces
6. Default export  = Import without curly braces
7. Component name  = Starts with uppercase letter

=========================================================
*/
