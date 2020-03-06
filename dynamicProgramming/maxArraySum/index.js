function maxSubsetSum(arr) {
  let n = arr.length;
  let cache = new Array(n);
  // If there are no elements there is no highest anything
  if (n === 0) {
    return 0;
  }
  // If there is only one element then that is the highest we can do
  if (n === 1) {
    return arr[0];
  }
  // So we'll build up our cache from the bottom up using the same sort of logic in the recursive problem (comments in the recursiveSolution file)
  // We will hold the best sums possible at each element's index in our cache
  // When we are at the first element of our array, the absolute highest total we could be at is the value of the first element
  cache[0] = arr[0];
  //  When we are at the second element, we have to start making choices.
  // 1. If we took the first element, then we cannot take the second because they are adjacent. In that case, the highest total we can have is the value of the first element
  // 2. If we did not take the first element, we have the opportunity to take the second element, in which case the highest sum we have come to is the value of the second element
  // 3. Make the choice that yields the higher total, and add that to our cache array
  cache[1] = Math.max(arr[0], arr[1]);
  // We will iterate through the rest of the array following the same sort of logic
  // At every element, we will look back at its last non-adjacent element, and see what the last highest sum was there
  // Then we can either take this element and add it to create a new highest, take this element as the new highest, or disregard this element.
  // We have one more choice here though. If the element one before this one is higher than any of the ways we can use this number, then this number is not a part of a valid subset. Take the highest number from the last subset
  // Just make the choice that gives us the highest total
  // If there were only two elements in the array this loop just never fires, and our check for the answer at the end still works :)
  for (let i = 2; i < arr.length; i++) {
    let thisElement = arr[i];
    let lastElement = cache[i - 2];
    let prevSubset = cache[i - 1];

    cache[i] = Math.max(
      thisElement,
      thisElement + lastElement,
      lastElement,
      prevSubset
    );
  }
  return cache[n - 1];
}

module.exports = { maxSubsetSum };
