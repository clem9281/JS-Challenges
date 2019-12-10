// still timing out for two test cases

function minimumBribes(q) {
  // create a sorted array with the same numbers as the q
  let sorted = new Array(q.length);
  for (let i = 0; i < q.length; i++) {
    sorted[i] = i + 1;
  }
  // initialize swaps dictionary: this dictionary will hold which elements have swapped, and how many times
  let swaps = {};
  // iterate over q
  for (let i = 0; i < q.length; i++) {
    // if q at i and sorted at i are not the same, we want to go into sorted and find the out of place element, and swap it into it's desired place (its placement in q) swapping one place at a time
    if (q[i] !== sorted[i]) {
      // current and current index keep track of the element we want to move, and what place in sorted it is in
      let current;
      let currentIndex;
      // here we go through sorted and find the element that is out of place
      for (let j = 0; j < sorted.length; j++) {
        if (sorted[j] === q[i]) {
          current = sorted[j];
          currentIndex = j;
          break;
        }
      }
      // now, once q at i and sorted at i are the same we've gotten that element into place. until then, swap the element backwards one position, and decrement our currentIndex so we keep moving backwards
      while (q[i] !== sorted[i]) {
        let temp = sorted[currentIndex];
        sorted[currentIndex] = sorted[currentIndex - 1];
        sorted[currentIndex - 1] = temp;
        currentIndex--;
        // keep track of number of swaps for this element
        if (!swaps[current]) {
          swaps[current] = 1;
        } else {
          swaps[current]++;
        }
        // if this element has swapped more than twice, stop everything! This solution is too chaotic, get out of there
        if (swaps[current] > 2) {
          // console.log("Too chaotic");
          return "Too chaotic";
        }
      }
    }
  }
  let moves = 0;
  // If we've made it here we've found a viable solution, count the number of swaps every element has made
  for (let key of Object.keys(swaps)) {
    moves += swaps[key];
  }
  // console.log(moves);
  return moves;
}

module.exports = {
  minimumBribes
};
