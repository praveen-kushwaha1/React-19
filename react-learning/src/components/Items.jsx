
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
