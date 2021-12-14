import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Computer from "../Computer";

describe("Computer Component", () => {
  it("should have the class cheating when isCheating is true", () => {
    const { getByText, debug, getByTestId } = render(<Computer isCheating={true} />);

    const element = getByText("🤖");
    // console.log(debug());
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("cheating");
  });
  it("should not have the class cheating when isCheating is false", () => {
    const { getByText, debug } = render(<Computer isCheating={false} />);

    const element = getByText("🤖");
    // console.log(debug());
    expect(element).toBeInTheDocument();
    expect(element).not.toHaveClass("cheating");
  });
});
