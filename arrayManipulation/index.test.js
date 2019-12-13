const { arrayManipulation } = require("./index");

describe("arrayManipulation", () => {
  it("should return the largest number in the 1 indexed array after operations are performed", () => {
    expect(
      arrayManipulation(10, [
        [1, 5, 3],
        [4, 8, 7],
        [6, 9, 1]
      ])
    ).toBe(10);
    expect(
      arrayManipulation(10, [
        [2, 6, 8],
        [3, 5, 7],
        [1, 8, 1],
        [5, 9, 15]
      ])
    ).toBe(31);
    expect(
      arrayManipulation(5, [
        [1, 2, 100],
        [2, 5, 100],
        [3, 4, 100]
      ])
    ).toBe(200);
  });
});
