import { pickComputerChoice, toggleRobot } from "./robotHelpers";

describe("toggleRobot function", () => {
  it("will toggle cheating mode on if it wasn't cheating", () => {
    const isCheating = false;
    const actualResult = toggleRobot(isCheating);
    const expectedResult = true;

    expect(actualResult).toEqual(expectedResult);
  });
  it("will toggle cheating mode off if it was cheating", () => {
    const isCheating = true;
    const actualResult = toggleRobot(isCheating);
    const expectedResult = false;

    expect(actualResult).toEqual(expectedResult);
  });
  it("will toggle cheating mode off if it wasn't cheating and ran twice", () => {
    const isCheating = false;
    const actualResult1 = toggleRobot(isCheating);
    const actualResult2 = toggleRobot(actualResult1);
    const expectedResult1 = true;
    const expectedResult2 = false;

    expect(actualResult1).toEqual(expectedResult1);
    expect(actualResult2).toEqual(expectedResult2);
  });
});
describe("pickComputerChoice function", () => {
  it("should pick the opposite of the player if cheating", () => {
    const isCheating = true;
    const playerInputs = ["🗿", "🪓", "🌳"];
    const playerOpposites = ["🌳", "🗿", "🪓"];

    for (const index in playerInputs) {
      const actualResult = pickComputerChoice(playerInputs[index], isCheating);
      const expectedResult = playerOpposites[index];

      expect(actualResult).toEqual(expectedResult);
    }
  });
  it("should pick a random value if not cheating", () => {
    const isCheating = false;
    const expectedResults = ["🗿", "🪓", "🌳"];
    const actualResult = pickComputerChoice("🗿", isCheating);

    expect(expectedResults).toContain(actualResult);
  });
  it("should pick a random value if player value not provided", () => {
    const isCheating = true;
    const expectedResults = ["🗿", "🪓", "🌳"];
    const actualResult = pickComputerChoice(null, isCheating);

    expect(expectedResults).toContain(actualResult);
  });
});
