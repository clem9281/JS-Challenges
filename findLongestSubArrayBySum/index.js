function findLongestSubarrayBySum(s, arr) {
  let prefixSum = new Array(arr.length);
  let indexOfS = -1;
  let dict = {};
  for (let i = 0; i < arr.length; i++) {
    let sum;
    if (i === 0) {
      prefixSum[i] = arr[i];
      sum = arr[i];
    } else {
      sum = arr[i] + prefixSum[i - 1];
      prefixSum[i] = sum;
    }
    if (sum === s) {
      indexOfS = i;
    }
    dict[prefixSum[i]] = i;
  }
  if (indexOfS >= 0) {
    return [1, indexOfS + 1];
  } else {
    // hashmap two sum solution
    for (let i = 0; i < prefixSum.length; i++) {
      let dif = prefixSum[i] + s;
      if (dict[dif]) {
        return [i + 2, dict[dif] + 1];
      }
    }
  }
  return [-1];
}

// console.log(findLongestSubarrayBySum(468, arr));
