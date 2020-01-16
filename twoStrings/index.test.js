const { twoStrings } = require("./index");

describe("twoStrings", () => {
  it("should return 'YES' or 'NO' based on if the strings share a common substring", () => {
    expect(twoStrings("hello", "world")).toBe("YES");
    expect(twoStrings("hi", "world")).toBe("NO");
    expect(twoStrings("wouldyoulikefries", "abcabcabcabcabcabc")).toBe("NO");
    expect(twoStrings("hackerrankcommunity", "cdecdecdecde")).toBe("YES");
    expect(twoStrings("jackandjill", "wentupthehill")).toBe("YES");
    expect(twoStrings("writetoyourparents", "fghmqzldbc")).toBe("NO");
    expect(twoStrings("aardvark", "apple")).toBe("YES");
    expect(twoStrings("beetroot", "sandals")).toBe("NO");
  });
});
