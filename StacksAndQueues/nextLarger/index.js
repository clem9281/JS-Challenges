function nextLarger(a) {
  const stack = [];
  const answer = new Array(a.length).fill(-1);
  stack.push(a[a.length - 1]);
  for (let i = a.length - 2; i >= 0; i--) {
    let lastElement = stack[stack.length - 1];
    if (lastElement > a[i]) {
      answer[i] = lastElement;
      stack.push(a[i]);
    } else {
      stack.pop();
      while (stack[stack.length - 1] <= a[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        answer[i] = stack[stack.length - 1];
      }
      stack.push(a[i]);
    }
  }
  return answer;
}

module.exports = { nextLarger };
