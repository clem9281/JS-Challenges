const { maxCounters } = require("./index");

describe("maxCounters", () => {
  // codility doesn't actually share the test cases with you, which is part of what makes it such a great practice platform
  it("should return the counters array after the operations have been run on them", () => {
    expect(maxCounters(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
  });
});
