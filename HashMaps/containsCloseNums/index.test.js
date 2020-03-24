const { containsCloseNums } = require("./index");

describe("containsCloseNums", () => {
  it("should determine whether the list of nums contains two of the same integers that are k or less apart", () => {
    expect(containsCloseNums([0, 1, 2, 3, 5, 2], 3)).toBe(true);
    expect(containsCloseNums([0, 1, 2, 3, 5, 2], 2)).toBe(false);
    expect(containsCloseNums([], 0)).toBe(false);
    expect(containsCloseNums([99, 99], 2)).toBe(true);
    expect(containsCloseNums([2, 2], 3)).toBe(true);
    expect(containsCloseNums([1, 2], 2)).toBe(false);
    expect(containsCloseNums([1, 2, 1], 2)).toBe(true);
    expect(containsCloseNums([1, 0, 1, 1], 1)).toBe(true);
    expect(containsCloseNums([1, 2, 1], 0)).toBe(false);
    expect(containsCloseNums([1, 2, 1], 1)).toBe(false);
    expect(containsCloseNums([1], 1)).toBe(false);
    expect(containsCloseNums([-1, -1], 1)).toBe(true);
  });
});
