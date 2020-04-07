function consumeNumbers(s, index) {
  let digit = "";
  while (!isNaN(s[index])) {
    digit += s[index];
    index++;
  }
  return [digit, index];
}

function decodeString(s) {
  let i = 0;
  const letterRegex = /[a-z]/i;
  const numberStack = [];
  const letterStack = [];
  let answer = "";
  while (i < s.length) {
    let char = s[i];
    if (letterRegex.test(char)) {
      answer += char;
      i++;
    } else if (!isNaN(char)) {
      let digit;
      [digit, i] = consumeNumbers(s, i);
      numberStack.push(parseInt(digit));
    } else if (char === "]") {
      let digit = numberStack.pop();
      let temp = answer;
      while (digit > 1) {
        answer += temp;
        digit--;
      }
      if (letterStack.length > 0) {
        let part = letterStack.pop();
        answer = part + answer;
      }
      i++;
    } else if (char === "[") {
      if (answer.length > 0) {
        letterStack.push(answer);
        answer = "";
      }
      i++;
    }
  }
  return answer;
}

module.exports = { decodeString };
