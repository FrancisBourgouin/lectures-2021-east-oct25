import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Game from "../Game";

describe("Robot interaction in game", () => {
  it("should have a default state of cheating", () => {
    const { getByText } = render(<Game />);

    const robotFace = getByText("🤖");
    expect(robotFace).toHaveClass("cheating");
  });
  it("should change to not cheating when we click on the robot face", () => {
    const { getByText } = render(<Game />);

    const robotFace = getByText("🤖");

    fireEvent.click(robotFace);

    expect(robotFace).not.toHaveClass("cheating");
  });
  it("should change back to cheating when we click on robot face again", () => {
    const { getByText } = render(<Game />);

    const robotFace = getByText("🤖");

    fireEvent.click(robotFace);

    expect(robotFace).not.toHaveClass("cheating");

    fireEvent.click(robotFace);

    expect(robotFace).toHaveClass("cheating");
  });
});
