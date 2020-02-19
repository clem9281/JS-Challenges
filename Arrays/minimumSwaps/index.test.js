const { minimumSwaps } = require("./index");

describe("minimumSwaps", () => {
  it("should return the minimum number of swaps required for the list to have gotten to a certain order", () => {
    expect(minimumSwaps([4, 3, 1, 2])).toBe(3);
    expect(minimumSwaps([2, 3, 4, 1, 5])).toBe(3);
    expect(minimumSwaps([1, 3, 5, 2, 4, 6, 7])).toBe(3);
  });
});
