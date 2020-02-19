function updateCountDict(countDict, prevCount, currentCount, element) {
  if (prevCount > 0) {
    if (countDict[prevCount]) {
      countDict[prevCount].delete(element);
    }
  }
  if (!countDict[currentCount]) {
    countDict[currentCount] = new Set();
  }
  countDict[currentCount].add(element);
  return countDict;
}

function freqQuery(queries) {
  let dict = {};
  let countDict = {};
  let answer = [];
  let count = 0;
  for (let query of queries) {
    let op = query[0];
    let opand = query[1];
    if (op === 1) {
      if (!dict[opand]) {
        dict[opand] = 1;
      } else {
        dict[opand]++;
      }
      let prevCount = dict[opand] - 1;
      let currentCount = dict[opand];
      countDict = updateCountDict(countDict, prevCount, currentCount, opand);
    }
    if (op === 2) {
      if (dict[opand]) {
        dict[opand]--;
        let prevCount = dict[opand] + 1;
        let currentCount = dict[opand];
        countDict = updateCountDict(countDict, prevCount, currentCount, opand);
      }
    }
    if (op === 3) {
      answer.push(0);
      if (countDict[opand]) {
        if (countDict[opand].size > 0) {
          answer[count] = 1;
        }
      }
      count++;
    }
  }
  return answer;
}

module.exports = {
  freqQuery
};
