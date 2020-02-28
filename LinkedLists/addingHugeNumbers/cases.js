const case1 = { a: [9876, 5432, 1999], b: [1, 8001], output: [9876, 5434, 0] };
const case2 = { a: [123, 4, 5], b: [100, 100, 100], output: [223, 104, 105] };
const case3 = { a: [0], b: [0], output: [0] };
const case4 = { a: [1234, 1234, 0], b: [0], output: [1234, 1234, 0] };
const case5 = { a: [0], b: [1234, 123, 0], output: [1234, 123, 0] };
const case6 = {
  a: [1],
  b: [9998, 9999, 9999, 9999, 9999, 9999],
  output: [9999, 0, 0, 0, 0, 0]
};
const case7 = {
  a: [1],
  b: [9999, 9999, 9999, 9999, 9999, 9999],
  output: [1, 0, 0, 0, 0, 0, 0]
};
const case8 = { a: [8339, 4510], b: [2309], output: [8339, 6819] };

module.exports = [case1, case2, case3, case4, case5, case6, case7, case8];
