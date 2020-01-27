function isValid(s) {
  // Create a dictionary of the string, where each letter in the string is the key and the number of times it occurs is the value
  let sDict = {};
  for (let element of s) {
    if (!sDict[element]) {
      sDict[element] = 0;
    }
    sDict[element]++;
  }
  // We're going to go through the sDict and create a dictionary of frequencies: so the frequency is the key, and the number of times that frequency occurs is the value. Also keep track of the different frequencies in a set
  let frequencies = {};
  let tracker = new Set();
  for (let element of Object.keys(sDict)) {
    tracker.add(sDict[element]);
    if (!frequencies[sDict[element]]) {
      frequencies[sDict[element]] = 0;
    }
    frequencies[sDict[element]]++;
  }
  let max = 0;
  let idealCount = 0;
  // We want our ideal count to be the frequency that occured most often
  for (let element of Object.keys(frequencies)) {
    if (frequencies[element] > max) {
      max = frequencies[element];
      idealCount = Number(element);
    }
  }
  // Delete the ideal count from our tracker set. So now all that is left in the tracker set is the frequencies that are messing up our validation
  tracker.delete(idealCount);
  // So if there is more than one abnormal value, we the string can't be valid
  if (tracker.size > 1) {
    return "NO";
  }
  // Even though we know there should be only one element in the set, this is a quick and dirty way to look into the set
  for (let element of tracker) {
    // if there is more than one element with the abnormal frequency, this string is invalid
    if (frequencies[element] > 1) {
      return "NO";
    }
    // if only one letter has the abnormal frequency, but it requires a removal of more than one instance of that letter to get to our ideal frequency, string is invalid
    if (element > idealCount + 1) {
      return "NO";
    }
  }
  // If we've made it here our string must be valid!
  return "YES";
}

module.exports = { isValid };
