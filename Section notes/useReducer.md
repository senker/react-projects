useState is used to manage simple state values like strings, numbers, and booleans.

useEffect is used to manage side effects like fetching data from an API or updating the DOM.

useReducer is used when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

Here’s a table that summarizes the differences between these hooks:

| Hook | Use case | When to use |
| --- | --- | --- |
| useState | Simple state values | Strings, numbers, booleans |
| useEffect | Side effects | Fetching data from an API, updating the DOM |
| useReducer | Complex state logic | Multiple sub-values, next state depends on previous one |