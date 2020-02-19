const { isValid } = require("./index");

describe("sherlockValidString isValid", () => {
  it("should return 'YES' or 'NO' based on if the string is valid according to Sherlock", () => {
    expect(isValid("abcdefghhgfedecba")).toBe("YES");
    expect(isValid("aabbccddeefghi")).toBe("NO");
    expect(isValid("aabbcd")).toBe("NO");
    expect(isValid("aaaabbcc")).toBe("NO");
    expect(isValid("aabbc")).toBe("YES");
    expect(isValid("xxxaabbccrry")).toBe("NO");
  });
});
