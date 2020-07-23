const { minAvgSlice } = require("./index");

describe("minAvgSlcie", () => {
  it("should return the starting index of the slice with the smallest index", () => {
    expect(minAvgSlice([4, 2, 2, 5, 1, 5, 8])).toBe(1);
    [-3, -5, -8, -4, -10];
    expect(minAvgSlice([-3, -5, -8, -4, -10])).toBe(2);
  });
});
