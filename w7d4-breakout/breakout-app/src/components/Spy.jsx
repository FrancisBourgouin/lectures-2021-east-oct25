import { useEffect } from "react";

export default function Spy(props) {
  useEffect(() => {
    const logEvent = (event) => console.log(event);
    document.addEventListener("click", logEvent);

    return () => document.removeEventListener("click", logEvent);
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 5 }}>I AM SPY</h1>
    </div>
  );
}
