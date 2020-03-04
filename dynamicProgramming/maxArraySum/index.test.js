const { maxSubsetSum } = require("./recursiveSolution.js");

describe("maxSubsetSum", () => {
  it("should return the maximum sum achieved by a non adjacent sub array", () => {
    expect(maxSubsetSum([3, 7, 4, 6, 5])).toBe(13);
    expect(maxSubsetSum([2, 1, 5, 8, 4])).toBe(11);
    expect(maxSubsetSum([3, 5, -7, 8, 10])).toBe(15);
    expect(maxSubsetSum([-2, 1, 3, -4, 5])).toBe(8);
  });
});
