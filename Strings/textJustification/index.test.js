const { textJustification } = require("./index");

describe("textJustification", () => {
  it("should return the array of words in a justified format", () => {
    expect(
      textJustification(
        ["This", "is", "an", "example", "of", "text", "justification."],
        16
      )
    ).toEqual(["This    is    an", "example  of text", "justification.  "]);
    expect(textJustification(["Two", "words."], 11)).toEqual(["Two words. "]);
    expect(textJustification(["Two", "words."], 10)).toEqual(["Two words."]);
    expect(textJustification(["a", "b", "c", "longword"], 9)).toEqual([
      "a   b   c",
      "longword "
    ]);
    expect(textJustification(["Two", "words."], 9)).toEqual([
      "Two      ",
      "words.   "
    ]);
    expect(
      textJustification(
        ["Looks", "like", "it", "can", "be", "a", "tricky", "test"],
        25
      )
    ).toEqual(["Looks  like  it  can be a", "tricky test              "]);
    expect(textJustification(["a", "b", "b", "longword"], 8)).toEqual([
      "a   b  b",
      "longword"
    ]);
    expect(
      textJustification(
        [
          "vba",
          "gaff",
          "ye",
          "gs",
          "cthj",
          "hf",
          "vetjj",
          "jm",
          "k",
          "f",
          "cgbf",
          "zzz"
        ],
        8
      )
    ).toEqual([
      "vba gaff",
      "ye    gs",
      "cthj  hf",
      "vetjj jm",
      "k f cgbf",
      "zzz     "
    ]);
    expect(
      textJustification(
        ["Given", "an", "array", "of", "words", "and", "a", "length"],
        9
      )
    ).toEqual(["Given  an", "array  of", "words and", "a length "]);
    expect(
      textJustification(
        [
          "Extra",
          "spaces",
          "between",
          "words",
          "should",
          "be",
          "distributed",
          "as",
          "evenly",
          "as",
          "possible"
        ],
        20
      )
    ).toEqual([
      "Extra spaces between",
      "words    should   be",
      "distributed       as",
      "evenly as possible  "
    ]);
  });
});
