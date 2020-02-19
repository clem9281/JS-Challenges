function productExceptSelf(nums, m) {
  // left array at each index will hold the product of all numbers to the left of that index
  // right array at each index will hold the product of all numbers to the right of that index
  let left = new Array(nums.length);
  let right = new Array(nums.length);
  // thus the first element of the left array is 1, as that index has no numbers to the left. Not 0, because muliplying by 0 makes everything 0
  // same for the last element of right
  left[0] = 1;
  right[right.length - 1] = 1;
  // (a * b) % m is the same as ((a % m) * (b % m)) % m, do this the whole way to keep the numbers small enough
  for (let i = 1; i < nums.length; i++) {
    left[i] = ((left[i - 1] % m) * (nums[i - 1] % m)) % m;
  }
  for (let i = nums.length - 2; i > -1; i--) {
    right[i] = ((right[i + 1] % m) * (nums[i + 1] % m)) % m;
  }
  let prod = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    prod[i] = ((left[i] % m) * (right[i] % m)) % m;
  }
  return prod.reduce((acc, val) => acc + val) % m;
}

module.exports = { productExceptSelf };
