function findLongestSubarrayBySum(s, arr) {
  let left = 0;
  let right = 1;
  let range = arr[0] + arr[1];
  let answer = [-1];
  let longestSubset = 0;
  if (arr.length === 1 && arr[0] === s) {
    return [1, 1];
  } else if (arr.length === 1) {
    return [-1];
  }
  while (left < arr.length - 1) {
    // console.log(left, right, range, answer, longestSubset)
    if (range < s && right < arr.length - 1) {
      right++;
      range += arr[right];
    } else if (range < s) {
      return answer;
    } else if (range > s) {
      range -= arr[left];
      left++;
    }
    if (range === s) {
      // we have to look for extra zeroes to consume

      while (arr[right + 1] === 0) {
        right++;
      }
      // while(arr[left - 1] === 0) {
      //     left--
      // }
      // console.log(right, left, right - left > longestSubset)
      if (right - left > longestSubset || longestSubset === 0) {
        longestSubset = right - left;
        answer = [left + 1, right + 1];
      }
      if (right < arr.length - 1) {
        right++;
        range += arr[right];
      } else {
        break;
      }
      // return [left + 1, right + 1]
    }
  }
  return answer;
}
module.exports = { findLongestSubarrayBySum };
