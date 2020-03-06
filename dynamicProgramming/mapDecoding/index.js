function mapDecoding(message) {
  let n = message.length;
  if (n === 0) {
    return 1;
  }
  // make a map of our valid letters, capital letters A-Z mapped to 1-26
  let letterMap = {};
  let count = 1;
  for (let i = 65; i <= 90; i++) {
    letterMap[count] = String.fromCharCode(i);
    count++;
  }
  // create a cache the keeps track of the number of possibilities our string can generate at different lengths
  let cache = new Array(n + 1).fill(0);
  // if the string is empty then there is one possibility
  cache[0] = 1;
  // when there is one char in the string, if that char is a valid letter, then there is one possibility
  if (letterMap[message[0]]) {
    cache[1] = 1;
  }
  // if that char is not a valid letter then there are no possibilities
  else {
    return 0;
  }
  // i is our index in message
  // but 0 in our cache refers to "" empty string, and 1 in our cache refers to the 0 index of the string. Rather than keep a seperate count to index the cache, we will just remember that our place in cache = our place in message + 1
  for (let i = 1; i < n; i++) {
    // we need to check if the char we are at is a valid letter, or if it can be combined with the char before it to be a valid letter
    let joinChar = `${message[i - 1]}${message[i]}`;

    // if the leter we are at is not a valid letter, but its "joinChar" is, then this must be a 0.
    if (!letterMap[message[i]] && letterMap[joinChar]) {
      // So basically, if we only had the one combination, we don't lose anything, even with this 0 we still have that 1 combo.
      // For everything after that though, if we encounter a 0, we are actually losing some possibilities, because whatever char that came before this 0 that makes it a valid letter is now bound to that 0, and cannot be used in all the combinations that it was previously being used in
      // Also mod everything every time you do math to handle the larger test cases
      if (cache[i] > 1) {
        cache[i + 1] = (cache[i] - cache[i - 2]) % (10 ** 9 + 7);
      } else {
        cache[i + 1] = cache[i];
      }
    } else if (letterMap[message[i]] && !letterMap[joinChar]) {
      // if this is a valid character but its joinChar is not, we did not gain any new combos
      cache[i + 1] = cache[i];
    } else if (letterMap[message[i]] && letterMap[joinChar]) {
      // if this is a valid letter and its joinChar is too, we follow the fib combo pattern
      cache[i + 1] = (cache[i] + cache[i - 1]) % (10 ** 9 + 7);
    }
    // if we have reached an invalid character, this string won't work, there are no combos, quit and return 0
    else {
      return 0;
    }
  }
  return cache[n];
}

module.exports = { mapDecoding };
