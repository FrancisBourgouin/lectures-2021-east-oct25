import { useState } from "react";
import "./App.css";
import Spy from "./components/Spy";
import Weather from "./components/Weather";

function App() {
  const [counter, setCounter] = useState(0);
  console.log("rendered!");

  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  return (
    <div className="App">
      <h1>Great weird app</h1>
      <h2 onClick={() => setCounter(counter + 1)}>Count: {counter}</h2>
      <Weather />
      {counter % 2 === 1 && <Spy />}
    </div>
  );
}

export default App;
