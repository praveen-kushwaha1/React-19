import React from "react";
import "./Product.css";

// =========================================================
// PR-003: REACT PROPS
// =========================================================
//
// Topics Covered:
// 1. Creating Functional Components
// 2. Hardcoded Data in Components
// 3. Understanding Props
// 4. Accessing Props using props object
// 5. Props Destructuring
// 6. Passing Different Data Types as Props
// 7. Passing Objects as Props
// 8. Accessing Object Properties
// 9. Default Values in Props Destructuring
// 10. Named Export and Default Export
//
// =========================================================

// =========================================================
// 1. BASIC FUNCTIONAL COMPONENT (WITHOUT PROPS)
// =========================================================
//
// A React component is a JavaScript function that returns JSX.
//
// Here, product information is hardcoded.
// Every time we use this component, the same information appears.
//
// Disadvantage:
// We cannot dynamically change product information.
//
// =========================================================

// export const Product = () => {
//   return (
//     <div>
//       <h1>Brand - Iphone</h1>
//       <h3>Price - 500000</h3>
//     </div>
//   );
// };

// =========================================================
// 2. USING PROPS OBJECT
// =========================================================
//
// Props stands for Properties.
//
// Props are used to pass data from a parent component
// (App) to a child component (Product).
//
// React automatically provides props as an object.
//
// Example:
// <Product name="Iphone" price={7000000} color="blue" />
//
// Access props using:
// props.name
// props.price
// props.color
//
// Important:
// Props are read-only. A child component should not modify them.
//
// =========================================================

// export const Product = (props) => {
//   return (
//     <div>
//       <h1>Brand - {props.name}</h1>
//       <h3>Price - {props.price}</h3>
//       <h3>Color - {props.color}</h3>
//     </div>
//   );
// };

// =========================================================
// 3. PROPS DESTRUCTURING (RECOMMENDED APPROACH)
// =========================================================
//
// Instead of repeatedly writing props.name, props.price,
// and props.color, we can directly extract properties.
//
// Without destructuring:
// const Product = (props) => {
//   return <h1>{props.name}</h1>;
// };
//
// With destructuring:
// const Product = ({ name, price, color }) => {
//   return <h1>{name}</h1>;
// };
//
// This is JavaScript object destructuring.
//
// =========================================================

// =========================================================
// 4. PASSING OBJECT AS PROPS
// =========================================================
//
// We can pass an entire JavaScript object from parent to child.
//
// Example from App.jsx:
//
// const obj = {
//   ram: "16gb",
//   rom: "128gb",
//   chip: "intel core 9"
// };
//
// Passing object:
// <Product data={obj} />
//
// Accessing object properties:
// data.ram
// data.rom
// data.chip
//
// =========================================================

// =========================================================
// 5. DEFAULT VALUE IN PROPS DESTRUCTURING
// =========================================================
//
// data = {} is a default value.
//
// If the parent does not pass the data prop,
// React provides undefined for that property.
//
// JavaScript destructuring then assigns an empty object.
//
// This prevents errors when accessing:
// data.ram, data.rom, data.chip
//
// Important:
// Default values apply when the prop is undefined,
// not when it is explicitly null.
//
// =========================================================

// =========================================================
// 6. FINAL PRODUCT COMPONENT
// =========================================================
//
// This component combines:
// - Props destructuring
// - Primitive props (name, price, color)
// - Object props (data)
// - Default value (data = {})
//
// The same component can display different products.
//
// =========================================================

// Reusable Product card component
// Receives basic props (name, price, color) and an optional `data` object for extra specs
export const Product = ({ name, price, color, data = {} }) => {
  // --- STYLING APPROACH 1: Style object ("internal" JS object style) ---
  // In React, CSS properties use camelCase (e.g., `backgroundColor` instead of `background-color`)
  // Note: `border: "10px"` needs a style & color like "10px solid black" to render visibly
  const myStyle = {
    backgroundColor: "yellow",
    border: "10px",
  };

  // --- STYLING APPROACH 2: Inline style object ---
  // Passed directly to `style={...}` on the JSX element
  const inlineStyle = {
    backgroundColor: "blue",
    padding: "10px",
    margin: "10px",
    border: "1px solid yellow",
    borderRadius: "10px",
  };

  // --- SAFE PROPERTY ACCESS & DESTRUCTURING ---
  // Optional chaining (`?.`) avoids runtime errors if `data` is undefined/null or lacks `name`
  console.log(data?.name);

  // Destructure `data` once so JSX stays shorter and easier to read
  const { ram, rom, chip } = data;

  return (
    // --- STYLING APPROACH 3: External CSS via `className` ---
    // Active styling: uses external CSS class `.container`
    // To test another style during revision, swap `className="container"` with:
    //   style={myStyle}      -> for the `myStyle` object above
    //   style={inlineStyle}  -> for the inline style object above
    <div
      //className="container"
      className="product-container"
      // style={myStyle}
      // style={inlineStyle}
    >
      {/* Primitive / main product props */}
      <h1>Brand - {name}</h1>
      <h3>Price - {price}</h3>
      <h3>Color - {color}</h3>

      {/* Conditional rendering: renders hardware specs only when `data.ram` is truthy */}
      {ram && (
        <>
          <h3>RAM - {ram}</h3>
          <h3>ROM - {rom}</h3>
          <h3>Chip - {chip}</h3>
        </>
      )}
    </div>
  );
};

// =========================================================
// 7. NAMED EXPORT VS DEFAULT EXPORT
// =========================================================
//
// Named Export:
// export const Product = () => {};
//
// Import:
// import { Product } from "./components/Product";
//
// Default Export:
// export default Product;
//
// Import:
// import Product from "./components/Product";
//
// Important:
// A file can have multiple named exports,
// but only one default export.
//
// =========================================================

export default Product;
