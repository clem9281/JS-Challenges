const { isBalanced } = require("./index");

describe("isBalanced", () => {
  it("should YES if the brackets are balanced, and NO if they are not", () => {
    expect(isBalanced("{[()]}")).toBe("YES");
    expect(isBalanced("{[(])}")).toBe("NO");
    expect(isBalanced("{{[[(())]]}}")).toBe("YES");

    expect(isBalanced("{{([])}}")).toBe("YES");
    expect(isBalanced("{{)[](}}")).toBe("NO");

    expect(isBalanced("{(([])[])[]}")).toBe("YES");
    expect(isBalanced("{(([])[])[]]}")).toBe("NO");
    expect(isBalanced("{(([])[])[]}[]")).toBe("YES");
  });
});
