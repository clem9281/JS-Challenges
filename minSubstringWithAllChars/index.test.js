const { minSubstringWithAllChars } = require("./index");

describe("minSubstringWithAllChars", () => {
  it("should return a the sum of a product except self array % m", () => {
    expect(minSubstringWithAllChars("adobecodebanc", "abc")).toBe("banc");
    expect(minSubstringWithAllChars("", "")).toBe("");
    expect(minSubstringWithAllChars("abz", "abz")).toBe("abz");
    expect(minSubstringWithAllChars("zqyvbfeiee", "ze")).toBe("zqyvbfe");

    expect(minSubstringWithAllChars("tvdsxcqsnoeccaurocnk", "acqt")).toBe(
      "tvdsxcqsnoecca"
    );
    expect(
      minSubstringWithAllChars("xgajymplpvftjwjqomhbnutorgysaf", "j")
    ).toBe("j");
  });
});
