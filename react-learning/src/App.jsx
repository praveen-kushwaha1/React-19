import React from "react";

// Importing Product using DEFAULT EXPORT.
// No curly braces are required.
import Product from "./components/Product";

// Importing Compo using DEFAULT EXPORT.
import Compo from "./components/Compo";

import Items from "./components/Items";

// =========================================================
// PR-003: REACT PROPS - PARENT COMPONENT
// =========================================================
//
// Topics Covered:
// 1. Importing Components
// 2. Reusing Components
// 3. Passing Props from Parent to Child
// 4. Passing String Values
// 5. Passing Number Values
// 6. Passing JavaScript Objects
// 7. Passing Optional Props
// 8. Component Reusability
//
// =========================================================

// =========================================================
// 1. REUSING COMPONENT WITHOUT PROPS
// =========================================================
//
// We can use the same component multiple times.
//
// Every instance displays the same hardcoded information
// because no dynamic props are provided.
//
// <Product /> creates one instance of Product.
//
// =========================================================

// export const App = () => {
//   return (
//     <>
//       <Compo />
//
//       <Product />
//       <Product />
//       <Product />
//
//       {/*
//         The Product component is rendered three times.
//         All three instances display the same hardcoded data.
//       */}
//     </>
//   );
// };

// =========================================================
// 2. PASSING PROPS TO CHILD COMPONENT
// =========================================================
//
// Here, App is the PARENT component.
// Product is the CHILD component.
//
// We pass data using attributes.
//
// name="Iphone"       -> String prop
// price={7000000}     -> Number prop
// color="blue"       -> String prop
//
// Curly braces {} are used to pass JavaScript expressions.
//
// =========================================================

// export const App = () => {
//   return (
//     <>
//       <Compo />
//
//       <Product
//         name="Iphone"
//         price={7000000}
//         color="blue"
//       />
//     </>
//   );
// };

// =========================================================
// 3. PASSING OBJECT AS PROPS
// =========================================================
//
// We can also pass an entire JavaScript object as a prop.
//
// Object contains:
// - RAM
// - ROM
// - Chip
//
// data={obj} passes the object reference to Product.
//
// =========================================================

export const App = () => {
  // Creating a JavaScript object.
  // This object contains additional product specifications.
  const obj = {
    ram: "16gb",
    rom: "128gb",
    chip: "intel core 9",
  };

  return (
    <>
      <Items />
      {/* Rendering another reusable component */}
      <Compo />

      {/* ================================================
          PRODUCT 1: IPHONE
          ================================================

          Passing:
          name  -> String
          price -> Number
          color -> String
          data  -> Object

          All props are received by Product.jsx.
      */}

      <Product name="Iphone" price={7000000} color="blue" data={obj} />

      {/* ================================================
          PRODUCT 2: MAC
          ================================================

          Passing only primitive props.

          data is not provided here.

          Therefore, Product uses its default value:
          data = {}

          Accessing data.ram, data.rom and data.chip
          returns undefined.
      */}

      <Product name="Mac" price={8000000} color="white" />

      {/* ================================================
          PRODUCT 3: LAPTOP
          ================================================

          Again, we reuse the same Product component
          with different prop values.

          This demonstrates component reusability.
      */}

      {/* <Product name="Laptop" price={9000000} color="black" /> */}
    </>
  );
};

// =========================================================
// 4. DEFAULT EXPORT
// =========================================================
//
// App can be imported into main.jsx using:
//
// import App from "./App";
//
// =========================================================

export default App;
