const { change } = require("./index");

describe("change", () => {
  it("should return the number of combinations that can be made with the array of coins to total the target amount ", () => {
    expect(change(0, [])).toBe(1);
    expect(change(5, [1, 2, 5])).toBe(4);
    expect(change(4, [1, 2, 3])).toBe(4);
    expect(change(10, [2, 3, 5, 6])).toBe(5);
    expect(change(15, [1, 5, 10, 25])).toBe(6);
    expect(change(100, [1, 101, 102, 103])).toBe(1);
    expect(change(100, [3, 5, 7, 8, 9, 10, 11])).toBe(6606);
    expect(change(500, [2, 7, 13])).toBe(717);
    expect(change(500, [1, 2, 5])).toBe(12701);
  });
});
