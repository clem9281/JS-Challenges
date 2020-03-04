function maxSubsetSumRecur(arr) {
  // initialize total to be super small
  let total = Number.MIN_SAFE_INTEGER;
  //   we'll just use this helper to handle the recursion
  function helper(arr, total) {
    let n = arr.length;
    // if there are no elements in n, return our accumulated total. The problem guarantees more than one element in the array, so this check just helps run our recursion
    if (n === 0) {
      return total;
    }
    // if there is only one element in the array, we can either add it to total, overwrite total with it, or disregard it, take whichever is biggest
    if (n === 1) {
      total = Math.max(total + arr[0], total, arr[0]);
      return total;
    }
    // for every other length we have to consider two different cases, either we add an element or we disregard it
    // if we add it, we then must consider our new total, and the rest of the array, but NOT the element directly adjacent to the one we just took
    // if we disregard it, our total remains the same, but now we consider all of this element's neighbors, even the one directly adjacent
    // First let's calculate the new total for our "take the number and add it to total" case
    let temp = Math.max(total + arr[n - 1], arr[n - 1]);

    total = Math.max(
      helper(arr.slice(0, n - 2), temp),
      helper(arr.slice(0, n - 1), total)
    );
    return total;
  }
  total = helper(arr, total);
  return total;
}

// naive caching?
function maxSubsetSum(arr) {
  let total = Number.MIN_SAFE_INTEGER;
  let cache = new Array(arr.length + 1);

  function maxSub(arr, total, cache) {
    let n = arr.length;
    if (n === 0) {
      cache[n] = total;
      return cache[n];
    }

    if (n === 1) {
      total = Math.max(total + arr[0], total, arr[0]);
      cache[n] = total;
      return cache[n];
    }

    let temp = Math.max(total + arr[n - 1], arr[n - 1]);

    if (cache[n]) {
      return Math.max(cache[n], temp);
    }

    cache[n] = Math.max(
      maxSub(arr.slice(0, n - 2), temp, cache),
      maxSub(arr.slice(0, n - 1), total, cache)
    );
    // cache[n] = total
    return cache[n];
  }

  total = maxSub(arr, total, cache);

  return total;
}

// let arr = [3, 7, 4, 6, 5];
let arr = [2, 1, 5, 8, 4, 2, 1, 5, 8, 4, 2, 1, 5, 8, 4, 2, 1, 5, 8, 4];

console.time("maxSubsetSumRecur");
maxSubsetSumRecur(arr);
console.timeEnd("maxSubsetSumRecur");

console.time("maxSubsetSum");
maxSubsetSum(arr);
console.timeEnd("maxSubsetSum");

module.exports = { maxSubsetSum };
