function mergeHalves(arr, leftStart, rightEnd) {
  let swaps = 0;
  let temp = [];
  let leftEnd = Math.floor((rightEnd + leftStart) / 2);
  let rightStart = leftEnd + 1;
  let left = leftStart;
  let right = rightStart;
  while (left <= leftEnd && right <= rightEnd) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      swaps += leftEnd - left + 1;
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= leftEnd) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= rightEnd) {
    temp.push(arr[right]);
    right++;
  }
  let count = 0;
  for (let i = leftStart; i <= rightEnd; i++) {
    arr[i] = temp[count];
    count++;
  }
  return swaps;
}

function mergeSort(arr, leftStart, rightEnd, swaps) {
  if (leftStart >= rightEnd) {
    return swaps;
  } else {
    let middle = Math.floor((leftStart + rightEnd) / 2);
    swaps = mergeSort(arr, leftStart, middle, swaps);
    swaps = mergeSort(arr, middle + 1, rightEnd, swaps);
    swaps += mergeHalves(arr, leftStart, rightEnd);
  }
  return swaps;
}

function countInversions(arr) {
  let swaps = 0;
  swaps += mergeSort(arr, 0, arr.length - 1, swaps);
  return swaps;
}

module.exports = { countInversions };
