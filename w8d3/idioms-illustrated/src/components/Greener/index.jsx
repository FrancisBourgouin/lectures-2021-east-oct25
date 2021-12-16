import { useState } from "react";
import "./Greener.scss";
import Side from "./Side";

export default function Greener(props) {
  const [side, setSide] = useState("left");
  const [literal, setLiteral] = useState(false);

  const changeSides = () => setSide(side === "left" ? "right" : "left");
  return (
    <section className="Greener">
      <h1>
        <span>It's always greener on the other side</span>
        {literal && <em> literally</em>}
      </h1>
      <main>
        <Side side={"left"} currentSide={side} literal={literal} onClick={changeSides} />
        <Side side={"right"} currentSide={side} literal={literal} onClick={changeSides} />
      </main>
    </section>
  );
}
