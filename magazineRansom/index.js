function checkMagazine(magazine, note) {
  let magazineDict = {};
  for (let element of magazine) {
    if (!magazineDict[element]) {
      magazineDict[element] = 1;
    } else {
      magazineDict[element]++;
    }
  }
  for (let element of note) {
    if (magazineDict[element] > 0) {
      magazineDict[element]--;
    } else {
      console.log("No");
      return "No";
    }
  }
  console.log("Yes");
  return "Yes";
}

module.exports = { checkMagazine };
