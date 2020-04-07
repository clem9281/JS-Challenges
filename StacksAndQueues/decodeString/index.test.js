const { decodeString } = require("./index");

describe("decodeString", () => {
  it("should return the string decoded", () => {
    expect(decodeString("4[ab]")).toBe("abababab");
    expect(decodeString("2[b3[a]]")).toBe("baaabaaa");
    expect(decodeString("z1[y]zzz2[abc]")).toBe("zyzzzabcabc");
    expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
    expect(decodeString("3[a2[c]]")).toBe("accaccacc");
    expect(decodeString("2[abc]3[cd]ef")).toBe("abcabccdcdcdef");
    expect(decodeString("")).toBe("");
    expect(decodeString("codesignal")).toBe("codesignal");

    expect(decodeString("2[codesignal]")).toBe("codesignalcodesignal");
    expect(decodeString("100[codesignal]")).toBe(
      "codesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignalcodesignal"
    );
    expect(decodeString("sd2[f2[e]g]i")).toBe("sdfeegfeegi");
  });
});
