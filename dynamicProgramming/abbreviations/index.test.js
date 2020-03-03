const { abbreviation } = require("./index");

describe("abbreviation", () => {
  it("should return 'YES' if a can be converted to b based on specific rules, or 'NO' if not", () => {
    expect(abbreviation("daBcd", "ABC")).toBe("YES");

    expect(abbreviation("Pi", "P")).toBe("YES");
    expect(abbreviation("AfPZN", "APZNC")).toBe("NO");
    expect(abbreviation("LDJAN", "LJJM")).toBe("NO");
    expect(abbreviation("UMKFW", "UMKFW")).toBe("YES");
    expect(abbreviation("KXzQ", "K")).toBe("NO");
    expect(abbreviation("LIT", "LIT")).toBe("YES");
    expect(abbreviation("sYOCa", "YOCN")).toBe("NO");

    expect(abbreviation("AbCdE", "AFE")).toBe("NO");
    expect(abbreviation("beFgH", "EFG")).toBe("NO");
    expect(abbreviation("beFgH", "EFH")).toBe("YES");
  });
});
