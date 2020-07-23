const arr = require("./arr");

function missingInteger(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // sort the elements
  const sorted = A.sort((a, b) => a - b);
  // remove duplicates and negatives
  let sortedDistinct = [];
  let dict = {};
  for (let i = 0; i < sorted.length; i++) {
    // if the element is positive and not present in the dictionary yet, add it to the new distinct array, and add it to the dictionary so we ignore the duplicates
    if (sorted[i] > 0 && !dict[sorted[i]]) {
      dict[sorted[i]] = 1;
      sortedDistinct.push(sorted[i]);
    }
  }
  // if sortedDistinct is empty all the elements were negative, return 1, as it's the smallest missing positive integer
  if (sortedDistinct.length === 0) {
    return 1;
  }
  // let last = sortedDistinct[0];
  let elementToLookFor = 1;
  for (let i = 0; i < sortedDistinct.length; i++) {
    if (sortedDistinct[i] !== elementToLookFor) {
      return elementToLookFor;
    }
    elementToLookFor++;
  }
  // if we haven't returned by the time we are done iterating through the array, then our missing element is one more than our last element
  return sortedDistinct[sortedDistinct.length - 1] + 1;
}

module.exports = { missingInteger };
