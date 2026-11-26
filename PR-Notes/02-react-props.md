# PR-003: React Props and Destructuring

Your code demonstrates essential React concepts: **Props**, **Props Destructuring**, **Passing Objects as Props**, and **Default Values**. Let's break this down step by step, complete with interview insights and practice questions.

---

## 1. Understanding the `Product` Component

### `Product.jsx`

```jsx
import React from "react";

export const Product = ({ name, price, color, data = {} }) => {
  return (
    <div>
      <h1>Brand - {name}</h1>
      <h3>Price - {price}</h3>
      <h3>Color - {color}</h3>
      <h3>RAM - {data.ram}</h3>
      <h3>ROM - {data.rom}</h3>
      <h3>Chip - {data.chip}</h3>
    </div>
  );
};

export default Product;
```

### What are Props?

**Props** stands for **Properties**.

- Props are used to pass data from a **parent component** to a **child component**.
- Props are **read-only** (immutable).
- Props make components **reusable** and dynamic.
- A parent component can pass strings, numbers, arrays, objects, booleans, JSX, and functions as props.

#### Example Usage:

```jsx
<Product name="Iphone" price={7000000} color="blue" />
```

| Prop    | Value      | Data Type |
| :------ | :--------- | :-------- |
| `name`  | `"Iphone"` | String    |
| `price` | `7000000`  | Number    |
| `color` | `"blue"`   | String    |

---

## 2. Three Ways to Access Props

### Approach 1: Without Props (Hardcoded)

```jsx
export const Product = () => {
  return <h1>Brand - Iphone</h1>;
};
```

- **Limitation:** Data is hardcoded, so reusability is strictly limited.

### Approach 2: Using the `props` Object

```jsx
export const Product = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.price}</h3>
      <h3>{props.color}</h3>
    </div>
  );
};
```

- **Note:** React passes all attributes as a single `props` object.

### Approach 3: Using Destructuring (Recommended)

```jsx
export const Product = ({ name, price, color }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{price}</h3>
      <h3>{color}</h3>
    </div>
  );
};
```

- **Advantage:** Instead of repeatedly writing `props.name`, we extract properties directly in the parameter list for cleaner code.

---

## 3. Passing an Object as Props

### In your `App` Component:

```jsx
const obj = {
  ram: "16gb",
  rom: "128gb",
  chip: "intel core 9",
};

// Passing the object
<Product name="Iphone" price={7000000} color="blue" data={obj} />;
```

### Receiving the Object in `Product`:

```jsx
export const Product = ({ name, price, color, data }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{price}</h3>
      <h3>{color}</h3>
      <h3>{data.ram}</h3>
      <h3>{data.rom}</h3>
      <h3>{data.chip}</h3>
    </div>
  );
};
```

> **Important JSX Rule:** Always use curly braces `{}` when passing JavaScript variables or expressions.
>
> - ✅ **Correct:** `<Product data={obj} />` (Passes the `obj` variable)
> - ❌ **Incorrect:** `<Product data="obj" />` (Passes the literal string `"obj"`)

---

## 4. Default Props Using Destructuring

```jsx
export const Product = ({ name, price, color, data = {} }) => {
```

- Setting `data = {}` ensures that if the parent does not provide `data`, an empty object is used as a fallback.
- **Example:** `<Product name="Mac" price={8000000} color="white" />`
- Without `data = {}`, accessing `data.ram` would throw a `TypeError: Cannot read properties of undefined`. With it, `data.ram` safely evaluates to `undefined`.

> 💡 **Interview Point:** Destructuring default values only apply when a property is `undefined`. They **do not** trigger if the value passed is `null`.

---

## 5. Understanding Your `App` Component

```jsx
import Product from "./components/Product";
import Compo from "./components/Compo";

export const App = () => {
  const obj = {
    ram: "16gb",
    rom: "128gb",
    chip: "intel core 9",
  };

  return (
    <>
      <Compo />

      <Product name="Iphone" price={7000000} color="blue" data={obj} />

      <Product name="Mac" price={8000000} color="white" />

      <Product name="Laptop" price={9000000} color="black" />
    </>
  );
};

export default App;
```

Here, the same `Product` component is reused three times with different prop configurations.

### Expected Output Concept

```text
Brand - Iphone
Price - 7000000
Color - blue
RAM - 16gb
ROM - 128gb
Chip - intel core 9

Brand - Mac
Price - 8000000
Color - white
RAM -
ROM -
Chip -

Brand - Laptop
Price - 9000000
Color - black
RAM -
ROM -
Chip -
```

---

## 6. Quick-Reference Interview Cheatsheet

| Question                                            | Answer                                                                        |
| :-------------------------------------------------- | :---------------------------------------------------------------------------- |
| **What are props?**                                 | Data passed from a parent component to a child component.                     |
| **Are props mutable?**                              | No, props are strictly read-only.                                             |
| **Can we pass objects as props?**                   | Yes.                                                                          |
| **Can we pass functions as props?**                 | Yes (commonly used as callbacks).                                             |
| **Can we pass arrays as props?**                    | Yes.                                                                          |
| **What is props destructuring?**                    | Extracting properties directly from the `props` object.                       |
| **Can a child modify parent props?**                | No, data flows one way (top-down).                                            |
| **What is a default value in destructuring?**       | A fallback value applied when a prop is `undefined`.                          |
| **Can multiple components receive the same props?** | Yes.                                                                          |
| **Difference between props and state?**             | Props are passed from a parent; state is managed internally by the component. |

---

## 7. Practice & Interview Questions (Beginner to Advanced)

### Part 1: Basic React Props Questions

#### Q1. What are Props in React?

**Answer:** Props stands for Properties. They are used to pass data from a parent component to a child component, making components reusable. Props are read-only and can contain strings, numbers, arrays, objects, and functions.

```jsx
function Product(props) {
  return <h1>{props.name}</h1>;
}

function App() {
  return <Product name="Iphone" />; // App is parent, Product is child
}
```

#### Q2. Why do we use Props in React?

**Answer:** We use props to make components dynamic and reusable instead of hardcoding data.

```jsx
<Product name="Iphone" />
<Product name="Samsung" />
<Product name="OnePlus" />
```

#### Q3. Are Props mutable or immutable?

**Answer:** Props are read-only (immutable from the child component's perspective). A child component must never directly modify the props it receives.

```jsx
// ❌ Incorrect
function Product(props) {
  props.name = "Samsung"; // Do not mutate props!
  return <h1>{props.name}</h1>;
}

// ✅ Correct
function Product({ name }) {
  return <h1>{name}</h1>;
}
```

#### Q4. Can we pass different data types through Props?

**Answer:** Yes, React props support all JavaScript data types.

```jsx
<Product
  name="Iphone"
  price={70000}
  available={true}
  features={["5G", "OLED"]}
  details={{ ram: "16GB", rom: "128GB" }}
/>
```

#### Q5. Can we pass a function as Props?

**Answer:** Yes. Passing a function allows a child component to communicate back up to its parent by invoking the callback.

```jsx
function Child({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const handleClick = () => console.log("Button clicked");
  return <Child onClick={handleClick} />;
}
```

---

### Part 2: Props Destructuring Questions

#### Q6. What is Props Destructuring in React?

**Answer:** It is a JavaScript ES6 feature that extracts properties directly from the `props` object, making the component code cleaner and easier to read.

```jsx
// Without destructuring
const Product = (props) => <h1>{props.name}</h1>;

// With destructuring
const Product = ({ name }) => <h1>{name}</h1>;
```

#### Q7. What is the difference between `props` and destructured props?

**Answer:** Both access the exact same underlying data; destructuring just removes the repetitive `props.` prefix.

| `props` Object | Destructured Props |
| :------------- | :----------------- |
| `props.name`   | `name`             |
| `props.price`  | `price`            |
| `props.color`  | `color`            |

#### Q8. Can we destructure nested objects in Props?

**Answer:** Yes, using nested object destructuring.

```jsx
const Product = ({ data: { ram, rom, chip } }) => {
  return (
    <>
      <h3>{ram}</h3>
      <h3>{rom}</h3>
      <h3>{chip}</h3>
    </>
  );
};

// Parent usage:
<Product data={{ ram: "16GB", rom: "128GB", chip: "Intel i9" }} />;
```

> **Note:** Direct nested destructuring requires `data` to be defined; otherwise, it will throw an error unless you provide a default object (`data: { ram, rom, chip } = {}`).

#### Q9. What are default values in Props destructuring?

**Answer:** Default values provide fallback values when a prop is not passed or evaluates to `undefined`.

```jsx
const Product = ({ name = "Unknown", price = 0 }) => {
  return (
    <>
      <h1>{name}</h1>
      <h3>{price}</h3>
    </>
  );
};
```

#### Q10. What happens if a prop is `null` instead of `undefined`?

**Answer:** Default destructuring values **only** activate when the prop is `undefined`. If `null` is explicitly passed, `null` is preserved.

```jsx
const Product = ({ name = "Unknown" }) => <h1>{name}</h1>;

<Product name={undefined} /> // Renders: "Unknown"
<Product name={null} />      // Renders: null (nothing visible)
```

---

### Part 3: Advanced Props Questions

#### Q11. What is the difference between Props and State?

| Feature        | Props                         | State                                    |
| :------------- | :---------------------------- | :--------------------------------------- |
| **Origin**     | Passed from parent component  | Managed inside the component             |
| **Mutability** | Read-only (immutable)         | Updated via setter function (`useState`) |
| **Purpose**    | Parent-to-child communication | Managing dynamic/interactive UI          |
| **Control**    | Controlled by parent          | Controlled by the component itself       |

```jsx
import { useState } from "react";

function Counter({ title }) {
  // title is a prop
  const [count, setCount] = useState(0); // count is state

  return (
    <>
      <h2>{title}</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

#### Q12. What is Prop Drilling?

**Answer:** Prop drilling occurs when data is passed through multiple intermediate components that do not need the data themselves, solely to reach a deeply nested child component.

```text
App ──▶ Parent ──▶ Child ──▶ GrandChild
```

- **Solutions:** React Context API, Component Composition, or State Management libraries (Redux, Zustand).

#### Q13. What is the `children` prop in React?

**Answer:** `children` is a special built-in prop that contains any JSX or content placed between a component's opening and closing tags.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h1>Iphone</h1>
      <p>Price: 70000</p>
    </Card>
  );
}
```

#### Q14. Can we pass JSX as Props?

**Answer:** Yes. Passing JSX elements as props is a common pattern for flexible component composition.

```jsx
function Product({ header }) {
  return <div>{header}</div>;
}

function App() {
  return <Product header={<h1>Iphone 17</h1>} />;
}
```

#### Q15. What is the difference between Named Export and Default Export?

- **Named Export:** A file can have multiple named exports. Must be imported using exact names inside curly braces `{}`.
  ```jsx
  export const Product = () => <h1>Product</h1>;
  // Import:
  import { Product } from "./Product";
  ```
- **Default Export:** A file can have only one default export. Can be imported with any name without curly braces.
  ```jsx
  const Product = () => <h1>Product</h1>;
  export default Product;
  // Import:
  import Product from "./Product";
  ```

---

### Part 4: Scenario-Based Interview Questions

#### Q16. What happens if the parent component changes a prop value?

**Answer:** When the parent's state updates and changes a prop value, React triggers a re-render of the child component with the updated prop.

```jsx
function Child({ name }) {
  return <h1>{name}</h1>;
}

function App() {
  const [name, setName] = useState("Iphone");

  return (
    <>
      <Child name={name} />
      <button onClick={() => setName("Samsung")}>Change Product</button>
    </>
  );
}
```

#### Q17. Can a child component send data to a parent component?

**Answer:** Yes, by invoking a callback function passed down from the parent via props.

```jsx
function Child({ sendData }) {
  return <button onClick={() => sendData("Hello Parent")}>Send Data</button>;
}

function App() {
  const handleData = (value) => console.log(value);
  return <Child sendData={handleData} />;
}
```

#### Q18. What is the difference between passing a value and passing a reference through Props?

**Answer:** Primitive values (strings, numbers, booleans) are passed by **value**. Non-primitive values (objects, arrays, functions) are passed by **reference** to the same memory location. Mutating an object prop inside a child mutates the parent's object and causes bugs/unpredictable rendering.

#### Q19. Does React re-render a child component whenever its parent re-renders?

**Answer:** By default, yes. Wrapping a component in `React.memo` tells React to skip re-rendering the child if its props haven't changed (using shallow comparison).

```jsx
import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return <h1>{name}</h1>;
});
```

#### Q20. What is the difference between `React.memo` and `useMemo`?

- **`React.memo`:** A Higher-Order Component (HOC) that memoizes an entire **component** to prevent unnecessary re-renders when props stay the same.
- **`useMemo`:** A React Hook that memoizes the **return value** of an expensive calculation between renders.
  ```jsx
  const result = useMemo(() => expensiveCalculation(data), [data]);
  ```
