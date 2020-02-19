function arrayManipulation(n, queries) {
  let arr = new Array(n + 1).fill(0);
  for (let query of queries) {
    let a = query[0] - 1;
    let b = query[1];
    let adder = query[2];

    arr[a] += adder;
    arr[b] -= adder;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      arr[i] = arr[i] + arr[i - 1];
    }
  }
  let max = 0;
  for (let element of arr) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}

// TOO SLOW
// function arrayManipulation(n, queries) {
//   let arr = {};
//   let max = 0;
//   for (let query of queries) {
//     let first = query[0];
//     let last = query[1];
//     let adder = query[2];
//     for (let i = first; i < last + 1; i++) {
//       if (!arr[i]) {
//         arr[i] = adder;
//       } else {
//         arr[i] += adder;
//       }
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//   }
//   return max;
// }

module.exports = {
  arrayManipulation
};
