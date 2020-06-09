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
      counters = new Array(N).fill(max);
    }
  }
  return counters;
}

module.exports = { maxCounters };
