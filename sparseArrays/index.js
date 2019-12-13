function matchingStrings(strings, queries) {
  let tracker = {};
  for (let element of strings) {
    if (!tracker[element]) {
      tracker[element] = 1;
    } else {
      tracker[element]++;
    }
  }
  let answerArr = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    answerArr[i] = tracker[queries[i]] ? tracker[queries[i]] : 0;
  }
  return answerArr;
}

console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);
module.exports = {
  matchingStrings
};
