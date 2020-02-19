const case1 = { arr: [0, 1, 0], output: true };
const case2 = { arr: [1, 2, 2, 3], output: false };
const case3 = {
  arr: [1, 1000000000, -1000000000, -1000000000, 1000000000, 1],
  output: true
};
const case4 = {
  arr: [1, 2, 3, 3, 2],
  output: false
};
const case5 = {
  arr: [1, 2, 3, 1, 2, 3],
  output: false
};
const case6 = {
  arr: [],
  output: true
};
const case7 = {
  arr: [3, 5, 3, 5],
  output: false
};
const case8 = {
  arr: [1, 5, 2, 4],
  output: false
};
const case9 = {
  arr: [10],
  output: true
};
const case10 = {
  arr: [0, 0],
  output: true
};
const case11 = {
  arr: [1, 3, 2, 2, 2],
  output: false
};

module.exports = [
  case1,
  case2,
  case3,
  case4,
  case5,
  case6,
  case7,
  case8,
  case9,
  case10,
  case11
];
