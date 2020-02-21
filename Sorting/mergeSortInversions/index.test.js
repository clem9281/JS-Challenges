const { countInversions } = require("./index");

describe("mergeSort countInversions", () => {
  it("should return the number of inversions", () => {
    expect(countInversions([1, 1, 1, 2, 2])).toBe(0);
    expect(countInversions([2, 1, 3, 1, 2])).toBe(4);
    expect(countInversions([1, 5, 3, 7])).toBe(1);
    expect(countInversions([7, 5, 3, 1])).toBe(6);
    expect(countInversions([1, 3, 5, 7])).toBe(0);
    expect(countInversions([3, 2, 1])).toBe(3);
  });
});
