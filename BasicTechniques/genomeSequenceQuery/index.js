function getCurrentSmallest(obj) {
  if (obj["A"]) {
    return 1;
  }
  if (obj["C"]) {
    return 2;
  }
  if (obj["G"]) {
    return 3;
  }
  if (obj["T"]) {
    return 4;
  }
}
function genomeSequenceQuery(S, P, Q) {
  const M = P.length;
  const answer = new Array(M).fill(0);

  // generate an array of objects the same length as the string
  // each array object will keep track of the number of occurances of each genome up until that point
  const sums = new Array(S.length + 1).fill({});
  for (let i = 0; i < S.length; i++) {
    // spread the previous object into the current object
    sums[i + 1] = { ...sums[i] };
    // if the current item doesn't exist in the object add it
    if (!sums[i + 1][S[i]]) {
      sums[i + 1][S[i]] = 0;
    }
    // update the current item
    sums[i + 1][S[i]]++;
  }
  for (let i = 0; i < M; i++) {
    // Q[i] + 1 represents the right of our slice, which is the total of each genome up to that position
    const currentSum = { ...sums[Q[i] + 1] };

    // get the element at P[i], that is the total occurance of each genome that comes BEFORE the beginning of the slice we want to look at. By subracting this object fron the current sum object, we get only the occurance of each genome in our current slice
    const prevSum = { ...sums[P[i]] };

    // remove all elements of the prev sum from the current sum (this is why we made copies of the objects, we don't want to mutate sums array)
    Object.keys(prevSum).forEach((key, i) => {
      if (currentSum[key]) {
        currentSum[key] -= prevSum[key];
      }
    });

    // now we just need  to get the smallest element from our slice
    const smallestPresentElement = getCurrentSmallest(currentSum);
    answer[i] = smallestPresentElement;
  }
  return answer;
}
module.exports = { genomeSequenceQuery };
