const { sherlockAndAnagrams } = require("./index");

describe("sherlockAndAnagrams", () => {
  it("should return the number of pairs of substring anagrams", () => {
    expect(sherlockAndAnagrams("abba")).toBe(4);
    expect(sherlockAndAnagrams("abcd")).toBe(0);
    expect(sherlockAndAnagrams("ifailuhkqq")).toBe(3);
    expect(sherlockAndAnagrams("kkkk")).toBe(10);
    expect(sherlockAndAnagrams("cdcd")).toBe(5);
  });
});
