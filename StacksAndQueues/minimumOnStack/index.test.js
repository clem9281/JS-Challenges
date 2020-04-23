const { minimumOnStack } = require("./index");

describe("minimumOnStack", () => {
  it("should return an array containing the minimum value on the stack at the time min was called", () => {
    expect(
      minimumOnStack([
        "push 10",
        "min",
        "push 5",
        "min",
        "push 8",
        "min",
        "pop",
        "min",
        "pop",
        "min",
      ])
    ).toEqual([10, 5, 5, 5, 10]);

    expect(
      minimumOnStack([
        "push 10",
        "min",
        "pop",
        "push 3",
        "min",
        "push 5",
        "pop",
        "push 3",
        "min",
        "pop",
      ])
    ).toEqual([10, 3, 3]);

    expect(minimumOnStack(["push 10"])).toEqual([]);

    expect(minimumOnStack(["push 10", "pop"])).toEqual([]);
  });
});
