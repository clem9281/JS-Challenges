const { roadsAndLibraries } = require("./index");

describe("roadsAndLibraries", () => {
  it("should return the total cost of building roads and libraries such that every city has access to a library", () => {
    expect(
      roadsAndLibraries(3, 2, 1, [
        [1, 2],
        [3, 1],
        [2, 3]
      ])
    ).toBe(4);
    expect(
      roadsAndLibraries(6, 2, 5, [
        [1, 3],
        [3, 4],
        [2, 4],
        [1, 2],
        [2, 3],
        [5, 6]
      ])
    ).toBe(12);
    expect(
      roadsAndLibraries(6, 2, 3, [
        [1, 2],
        [1, 3],
        [4, 5],
        [4, 6]
      ])
    ).toBe(12);
    expect(
      roadsAndLibraries(5, 6, 1, [
        [1, 2],
        [1, 3],
        [1, 4]
      ])
    ).toBe(15);
  });
});
