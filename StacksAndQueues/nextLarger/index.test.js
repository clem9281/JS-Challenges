const { nextLarger } = require("./index");

describe("nextLarger", () => {
  it("should return an array denoting each elements next largest element", () => {
    expect(nextLarger([6, 7, 3, 8])).toEqual([7, 8, 8, -1]);

    expect(nextLarger([4])).toEqual([-1]);

    expect(nextLarger([4, 2])).toEqual([-1, -1]);

    expect(nextLarger([1, 3, 2, 4])).toEqual([3, 4, 4, -1]);

    expect(nextLarger([10, 3, 12, 4, 2, 9, 13, 0, 8, 11, 1, 7, 5, 6])).toEqual([
      12,
      12,
      13,
      9,
      9,
      13,
      -1,
      8,
      11,
      -1,
      7,
      -1,
      6,
      -1,
    ]);

    expect(nextLarger([6, 2, 7, 3, 1, 0, 4, 5])).toEqual([
      7,
      7,
      -1,
      4,
      4,
      4,
      5,
      -1,
    ]);
  });
});
