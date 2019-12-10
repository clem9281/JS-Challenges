const { minimumBribes } = require("./index");

describe("minimumBribes", () => {
  it("should return the minimum number of swaps required for the queue to have gotten to a certain order", () => {
    expect(minimumBribes([2, 1, 5, 3, 4])).toBe(3);
    expect(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])).toBe(7);
    expect(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])).toBe(4);
  });
  it("should return 'Too chaotic' if any one person had to bribe more than two people", () => {
    expect(minimumBribes([2, 5, 1, 3, 4])).toBe("Too chaotic");
    expect(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])).toBe("Too chaotic");
  });
});
