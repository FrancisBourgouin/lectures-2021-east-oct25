```jsx
// counter, setCounter

setCounter(5);
setCounter(6);
setCounter(3);
setCounter(9);
```

```jsx
  // counter, setCounter
  // counter is 5

  setCounter(counter + 5) => Put it to 10
  setCounter(counter + 6) => Put it to 11
  setCounter(counter + 3) => Put it to 8
  setCounter(counter + 9) => Put it to 14

  // Render happens, with 14
```

```jsx
// counter, setCounter
// counter is 5

setCounter((prev) => prev + 5); // prev was 5, now is 10
setCounter((prev) => prev + 6); // prev was 10, now is 16
setCounter((prev) => prev + 3); // prev is 16, now is 19
setCounter((prev) => prev + 9); // prev is 19, now is 28

// Render happens, with 28
```
