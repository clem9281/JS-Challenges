const { tripleSum } = require("./index");

describe("tripleSum", () => {
  it("should an array of triplets that add up to 0", () => {
    expect(tripleSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
    expect(
      tripleSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])
    ).toEqual([
      [-4, -2, 6],
      [-4, 0, 4],
      [-4, 1, 3],
      [-4, 2, 2],
      [-2, -2, 4],
      [-2, 0, 2]
    ]);
    expect(tripleSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1]
    ]);
  });
});
