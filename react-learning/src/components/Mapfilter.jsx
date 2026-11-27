import React from "react";

/*
=========================================================
PR-004: REACT map() AND filter() ARRAY METHODS
=========================================================

Topics Covered:
1. JavaScript map() method
2. JavaScript filter() method
3. Method chaining
4. Rendering dynamic lists in React
5. Using unique keys in React
6. Arrow functions
7. Conditional filtering
8. JSX rendering

=========================================================
*/

export const Mapfilter = () => {
  // =====================================================
  // STEP 1: CREATE PRODUCT DATA
  // =====================================================

  /*
    An array of product objects.

    Each product contains:
    - id       : Unique product identifier
    - name     : Product name
    - price    : Product price

    In real-world applications, this data usually
    comes from a Spring Boot REST API.
  */

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Mouse", price: 800 },
    { id: 5, name: "Monitor", price: 12000 },
  ];

  // =====================================================
  // STEP 2: FILTER PRODUCTS
  // =====================================================

  /*
    filter() METHOD:

    Definition:
    filter() creates a NEW array containing only
    elements that satisfy the given condition.

    Condition:
    Display products whose price is greater than 10000.

    product represents the current object.

    Example:
    Laptop  -> 50000 > 10000 -> TRUE
    Mobile  -> 20000 > 10000 -> TRUE
    Keyboard -> 1500 > 10000 -> FALSE
  */

  const expensiveProducts = products.filter((product) => {
    return product.price > 10000;
  });

  // =====================================================
  // STEP 3: DISPLAY PRODUCTS USING map()
  // =====================================================

  /*
    map() METHOD:

    Definition:
    map() creates a NEW array by transforming
    each element of the original array.

    In React:
    We use map() to convert product objects into JSX.

    key={product.id}:
    React uses a unique key to identify list elements
    when the list changes.
  */

  return (
    <div>
      {/* Page Heading */}
      <h1>Expensive Products</h1>

      {/* Display total filtered products */}
      <h3>Total Products: {expensiveProducts.length}</h3>

      {/* =================================================
          STEP 4: CONDITIONAL RENDERING
          ================================================= */}

      {/*
        If products are available:
          Display products using map().

        Otherwise:
          Display No Products Found.
      */}

      {expensiveProducts.length > 0 ? (
        expensiveProducts.map((product) => (
          <div key={product.id}>
            {/* Display product name */}
            <h3>{product.name}</h3>

            {/* Display product price */}
            <p>Price: ₹{product.price}</p>
          </div>
        ))
      ) : (
        <h3>No Products Found!</h3>
      )}
    </div>
  );
};

// Default Export
export default Mapfilter;
