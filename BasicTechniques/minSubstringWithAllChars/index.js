function minSubstringWithAllChars(s, t) {
  // get the elements of t into a set for easy lookup
  let unique = new Set();
  let shortestLength = Number.MAX_SAFE_INTEGER;
  let shortest = "";
  for (let char of t) {
    unique.add(char);
  }
  // iterate over the search string, if we find one of the unique characters, start forming a substring
  for (let i = 0; i < s.length; i++) {
    let foundThisRound = new Set();
    let shortHolder = "";
    if (unique.has(s[i])) {
      foundThisRound.add(s[i]);
      shortHolder = s[i];
      let count = i + 1;
      //   found this round will keep track of if we have found all the unique characters
      while (foundThisRound.size < unique.size && count < s.length) {
        shortHolder += s[count];
        if (unique.has(s[count])) {
          foundThisRound.add(s[count]);
        }
        count++;
      }
      //   if we reach this point we have either found a substring, or we have counted to the end of the string, if foundThisRound isn't the same size as unique then we just hit the end of the string, this substring is not valid
      if (
        shortHolder.length < shortestLength &&
        foundThisRound.size === unique.size
      ) {
        shortest = shortHolder;
        shortestLength = shortHolder.length;
      }
    }
  }
  return shortest;
}

module.exports = { minSubstringWithAllChars };
