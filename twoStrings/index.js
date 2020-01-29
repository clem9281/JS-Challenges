function twoStrings(s1, s2) {
  let lettersS1 = new Set();
  for (let element of s1) {
    if (!lettersS1.has(element)) {
      lettersS1.add(element);
    }
  }
  let sharesSub = false;
  for (let element of s2) {
    if (lettersS1.has(element)) {
      sharesSub = true;
    }
  }
  console.log(sharesSub ? "YES" : "NO");
  return sharesSub ? "YES" : "NO";
}

module.exports = { twoStrings };
