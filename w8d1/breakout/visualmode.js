// useVisualMode => Works like the back history of a browser

const [history, setHistory] = useState(["SHOW"]);

// Rendered
setHistory([...history, "EDIT"]); // ["SHOW", "EDIT"]
setHistory([...history, "EDIT"]); // ["SHOW", "EDIT"]
setHistory([...history, "EDIT"]); // ["SHOW", "EDIT"]
// Re-rendered

// Rendered
setHistory([...history, "SAVING"]); // ["EDIT", "SAVING"]
setHistory([...history, "SHOW"]); // ["EDIT", "SHOW"] <- Wins
// Re-rendered

// WRONG WAY ! WRONG WRONG WRONG

const newHistory = history.push("SAVING");
setHistory(newHistory); // ["EDIT", "SAVING"]
const newHistory = history.push("SHOW");
setHistory(newHistory); // ["EDIT", "SAVING", "SHOW"]

// WRONG WAY ! WRONG WRONG WRONG

// THE GOOD WAY

// Rendered
setHistory((prevState) => [...prevState, "SAVING"]); // ["EDIT", "SAVING"]
setHistory((prevState) => [...prevState, "SHOW"]); // ["EDIT", "SAVING", "SHOW"] <- Wins
// Re-rendered

setHistory((prevState) => {
  const newState = [...prevState];
  newState[newState.length - 1] = "...";

  return newState;
});
