const { checkMagazine } = require("./index");

describe("magazineRansom checkMagazine", () => {
  it("should return 'YES' or 'NO' based on if the strings in the note can be exactly replicated by those in the magazine", () => {
    expect(
      checkMagazine("give me one grand today night", "give one grand today")
    ).toBe("Yes");
    expect(
      checkMagazine("two times three is not four", "two times two is four")
    ).toBe("No");
    expect(
      checkMagazine(
        "ive got a lovely bunch of coconuts",
        "ive got some coconuts"
      )
    ).toBe("No");
  });
});
