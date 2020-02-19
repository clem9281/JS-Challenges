const { processData } = require("./index");

describe("shortestReach processData", () => {
  it("should an array of arrays, where each inner array represent elements' distance from a given node", () => {
    expect(processData("2\n4 2\n1 2\n1 3\n1\n3 1\n2 3\n2")).toEqual([
      [6, 6, -1],
      [-1, 6]
    ]);
    expect(processData("1\n6 4\n1 2\n2 3\n3 4\n1 5\n1")).toEqual([
      [6, 12, 18, 6, -1]
    ]);
    expect(processData("1\n7 4\n1 2\n1 3\n3 4\n2 5\n2")).toEqual([
      [6, 12, 18, 6, -1, -1]
    ]);
  });
});
