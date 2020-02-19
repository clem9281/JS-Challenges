const { matchingStrings } = require("./index");

describe("matchingStrings", () => {
  it("should return an array that indicates the occurance of each query string in the string array", () => {
    expect(
      matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
    ).toEqual([2, 1, 0]);
    expect(
      matchingStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"])
    ).toEqual([1, 0, 1]);
    expect(
      matchingStrings(
        [
          "abcde",
          "sdaklfj",
          "asdjf",
          "na",
          "basdn",
          "sdaklfj",
          "asdjf",
          "na",
          "asdjf",
          "na",
          "basdn",
          "sdaklfj",
          "asdjf"
        ],
        ["abcde", "sdaklfj", "asdjf", "na", "basdn"]
      )
    ).toEqual([1, 3, 4, 3, 2]);
  });
});
