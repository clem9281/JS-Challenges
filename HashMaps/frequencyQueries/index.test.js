const { freqQuery } = require("./index");

describe("freqQuery", () => {
  it("should an array with the results of each '3' query", () => {
    expect(
      freqQuery([
        [1, 5],
        [1, 6],
        [3, 2],
        [1, 10],
        [1, 10],
        [1, 6],
        [2, 5],
        [3, 2]
      ])
    ).toEqual([0, 1]);
    expect(
      freqQuery([
        [3, 4],
        [2, 1003],
        [1, 16],
        [3, 1]
      ])
    ).toEqual([0, 1]);
    expect(
      freqQuery([
        [1, 3],
        [2, 3],
        [3, 2],
        [1, 4],
        [1, 5],
        [1, 5],
        [1, 4],
        [3, 2],
        [2, 4],
        [3, 2]
      ])
    ).toEqual([0, 1, 1]);
  });
});
