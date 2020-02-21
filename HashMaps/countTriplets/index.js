// Basically in this approach, as we iterate to each element, we keep track of how many times that element is a first of a triplet, a second of a triplet, and a third of a triplet. Then at the end, we'll count how many elements were thirds, and how many times they are thirds, those are our completed triplets.

function countTriplets(arr, r) {
  // Dictionaries: firsts is number of times each element is a "first" in a triplet, seconds is number of times an element is "second" in a triplet, and thirds is, you've guessed it, how many times each element is a "third" in a triplet
  let firsts = {};
  let seconds = {};
  let thirds = {};
  let count = 0;
  for (let element of arr) {
    let mult = element * r;
    // If the element is in third then we know we have seen its first and its second element, we want to divide it by r to find which element is "second" in this progression. Increment the "third" count by the count of it's second element
    if (thirds[element] >= 0) {
      thirds[element] += seconds[element / r];
    }
    // if the element is in seconds, then we know we have seen it's first element, again divide by r to find its firsts element, and increment the second count by the count of its first eleement
    if (seconds[element] >= 0) {
      seconds[element] += firsts[element / r];
      // if the element is in second, add the element * r to the third element dict so we know we should look for it
      if (!thirds.hasOwnProperty(mult)) {
        thirds[mult] = 0;
      }
    }
    // If the element isn't in first, this is the first time we are seeing it, add it there, otherwise increment it by one
    if (!firsts.hasOwnProperty(element)) {
      firsts[element] = 1;
    } else {
      firsts[element]++;
    }
    // if the mult of our first isn't in seconds yet, add it there so we know to look for it
    if (!seconds.hasOwnProperty(mult)) {
      seconds[mult] = 0;
    }
  }
  for (let key of Object.keys(thirds)) {
    count += thirds[key];
  }
  return count;
}
console.log(countTriplets([1, 1, 1, 1], 1));

module.exports = { countTriplets };
