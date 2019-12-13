// TOO SLOW
function arrayManipulation(n, queries) {
  let arr = {};
  for (let i = 1; i < n + 1; i++) {
    arr[i] = 0;
  }
  let max = 0;
  for (let query of queries) {
    let first = query[0];
    let last = query[1];
    let adder = query[2];
    for (let i = first; i < last + 1; i++) {
      arr[i] += adder;
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  }
  return max;
}

module.exports = {
  arrayManipulation
};
