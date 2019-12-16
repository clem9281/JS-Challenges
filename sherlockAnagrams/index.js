// This horrible O(n^2) solution passes all the tests on hackerrank
function sherlockAndAnagrams(s) {
  let allSubs = [];
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      let str = s
        .slice(i, j)
        .split("")
        .sort()
        .join("");
      let len = str.length;
      if (!dict[len]) {
        dict[len] = [str];
      } else {
        dict[len].push(str);
      }

      allSubs.push(str);
    }
  }
  let total = 0;
  for (let key of Object.keys(dict)) {
    let arr = dict[key];
    if (arr.length > 1) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length + 1; j++) {
          if (arr[i] === arr[j]) {
            total++;
          }
        }
      }
    }
  }
  return total;
}

module.exports = { sherlockAndAnagrams };
