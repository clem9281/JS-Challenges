function isBalanced(s) {
  const balance = { "}": "{", "]": "[", ")": "(" };
  const open = new Set(["{", "[", "("]);
  const closed = new Set(["}", "]", ")"]);
  const stack = [];
  for (let char of s) {
    if (open.has(char)) {
      stack.push(char);
    } else if (closed.has(char)) {
      let opposite = stack.pop();
      if (opposite !== balance[char]) {
        return "NO";
      }
    }
  }
  if (stack.length > 0) {
    return "NO";
  } else {
    return "YES";
  }
}

module.exports = { isBalanced };
