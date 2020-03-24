function containsCloseNums(nums, k) {
  let dict = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // if the number we are looking at does not belong to the dict yet, add it. It's value will be an array of the indexes that this number is at
    if (!dict.hasOwnProperty(num)) {
      dict[num] = [i];
    }
    // if the number does already exist in the dictionary, we have to see if exists at an index where this index minus that index is less than or equal to k. If so we can return true and stop checking the rest of the list. Otherwise add this new index to the index array
    else {
      for (let j = 0; j < dict[num].length; j++) {
        if (i - dict[num][j] <= k) {
          return true;
        }
      }
      dict[num].push(i);
    }
  }
  return false;
}

module.exports = { containsCloseNums };
