const tripleSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let answer = [];
  let found = new Set();
  for (let i = 0; i < nums.length - 2; i++) {
    let right = nums.length - 1;
    let left = i + 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        if (!found.has(`${nums[i]}, ${nums[left]}, ${nums[right]}`)) {
          answer.push([nums[i], nums[left], nums[right]]);
          found.add(`${nums[i]}, ${nums[left]}, ${nums[right]}`);
        }
        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return answer;
};

module.exports = { tripleSum };
