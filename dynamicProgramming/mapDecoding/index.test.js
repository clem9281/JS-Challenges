const { mapDecoding } = require("./index");

describe("mapDecoding", () => {
  it("should return the number of ways a string can be decoded using the map 1-26 = A-Z", () => {
    expect(mapDecoding("123")).toBe(3);
    expect(mapDecoding("12")).toBe(2);
    expect(mapDecoding("0")).toBe(0);
    expect(mapDecoding("1")).toBe(1);
    expect(mapDecoding("11")).toBe(2);
    expect(mapDecoding("301")).toBe(0);
    expect(mapDecoding("10122110")).toBe(5);
    expect(mapDecoding("1001")).toBe(0);

    expect(mapDecoding("")).toBe(1);
    expect(mapDecoding("11115112112")).toBe(104);
    expect(mapDecoding("2871221111122261")).toBe(233);
    expect(
      mapDecoding(
        "1221112111122221211221221212212212111221222212122221222112122212121212221212122221211112212212211211"
      )
    ).toBe(782204094);
  });
});
