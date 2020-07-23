function minAvgSlice(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // generate an array of averages
  // it needs one less element than the given array, since at the 0 position of A there is no valid average
  const averages = new Array(A.length - 1);
  let finalIndex = 0;
  let smallestAverage = Number.MAX_SAFE_INTEGER;

  // set the first average, the only thing it can possibly be is the average of the first two elements
  // this is our first minimum average
  averages[0] = (A[0] + A[1]) / 2;

  // we need to start at the third element, or the second position of A
  for (let i = 2; i < A.length; i++) {
    let prevAvg = averages[i - 2];

    // so at each position we have two choices: keep the last lowest average and add our new element to it
    let keepLastAverage = (prevAvg * (i + 1) + A[i]) / (i + 2);

    // or abandon that average and start a new on for this slice
    let createNewAverage = (A[i] + A[i - 1]) / 2;

    // populate the averages array with the smaller option
    averages[i - 1] = Math.min(keepLastAverage, createNewAverage);
  }
  for (let i = 0; i < averages.length; i++) {
    if (averages[i] < smallestAverage) {
      smallestAverage = averages[i];
      finalIndex = i;
    }
  }

  return finalIndex;
}

module.exports = { minAvgSlice };
