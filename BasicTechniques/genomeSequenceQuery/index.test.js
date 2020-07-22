const { genomeSequenceQuery } = require("./index");
describe("genomeSequenceQuery", () => {
  it("should return the minimum impact value of a given slice of genomes", () => {
    expect(genomeSequenceQuery("CAGCCTA", [2, 5, 0], [4, 5, 6])).toEqual([
      2,
      4,
      1,
    ]);
  });
});
