function minimumSwaps(arr) {
  let dict = {};
  let inOrderArr = [];
  for (let i = 0; i < arr.length; i++) {
    dict[arr[i]] = { idealPosition: i, currentPosition: arr[i] - 1 };
    inOrderArr.push(i + 1);
  }
  let swapped = true;
  let swaps = 0;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < inOrderArr.length; i++) {
      if (
        dict[inOrderArr[i]].currentPosition !==
        dict[inOrderArr[i]].idealPosition
      ) {
        let element = inOrderArr[i];
        let currentPosition = dict[inOrderArr[i]].currentPosition;
        let idealPosition = dict[inOrderArr[i]].idealPosition;
        dict[element].currentPosition = idealPosition;
        dict[inOrderArr[idealPosition]].currentPosition = currentPosition;

        let temp = inOrderArr[idealPosition];
        inOrderArr[idealPosition] = element;
        inOrderArr[currentPosition] = temp;
        swapped = true;
        swaps++;
      }
    }
  }
  console.log(swaps);
  return swaps;
}
module.exports = {
  minimumSwaps
};
