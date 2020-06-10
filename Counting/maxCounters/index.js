function maxCounters(N, A) {
  let counters = new Array(N).fill(0);
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      counters[A[i] - 1]++;
      if (counters[A[i] - 1] > max) {
        max = counters[A[i] - 1];
      }
    } else {
      let left = 0;
      let right = N - 1;
      while (left <= right) {
        counters[left] = max;
        counters[right] = max;
        right--;
        left++;
      }
    }
  }
  return counters;
}

maxCounters(5, [3, 4, 4, 6, 1, 4, 4]);

module.exports = { maxCounters };
