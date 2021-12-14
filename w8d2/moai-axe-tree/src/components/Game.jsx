import { useState } from "react";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";
import { toggleRobot } from "../helpers/robotHelpers";
export default function Game(props) {
  const [state, setState] = useState({
    isCheating: true,
    playerItem: null,
    result: null,
  });
  const { isCheating, playerItem, result } = state;

  const updateRobotState = () => {
    const newState = { ...state };
    newState.isCheating = toggleRobot(isCheating);

    setState(newState);
  };

  const computerProps = { isCheating };

  return (
    <div>
      <main className="game">
        {/* <Computer {...{ isCheating, updateRobotState }} /> */}
        <Computer isCheating={isCheating} updateRobotState={updateRobotState} />
        <Player />
      </main>
      <Result />
    </div>
  );
}
