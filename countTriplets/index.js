// First pass solution is waaaay too slow, O(n^3)
function countTriplets(arr, r) {
  let triplets = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        triplets.push([arr[i], arr[j], arr[k]]);
      }
    }
  }
  let total = 0;
  for (let element of triplets) {
    if (element[0] === element[1] / r && element[1] === element[2] / r) {
      total += 1;
    }
  }
  return total;
}

module.exports = { countTriplets };
