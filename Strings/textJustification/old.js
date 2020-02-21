function textJustification(words, l) {
  // we'll use wordsAndSpaces to keep track of the length of a word and the minimum nmber of spaces for that line. Each word will need at least one space after it, except the last word
  let wordsAndSpaces = 0;
  // justWords will keep track of the total actual chars in the words on a line, so when it comes time to apply the
  let justWords = 0;
  // each holder will hold the words that will go on a single line
  let lineHolder = [];
  // newLines will hold all our line holders
  let newLines = [];
  for (let word of words) {
    // console.log({word, counter, holder, all})
    // So each word will have at least one space after it, so we have to check if the addition of that word and a space will go over our line total
    if (wordsAndSpaces + word.length + 1 <= l) {
      wordsAndSpaces += word.length + 1;
      justWords += word.length;
      lineHolder.push(word);
    }
    // however, the last word in a line doesn't need that extra space, so if we can add the word but not a space we have reached the end of a line
    else if (wordsAndSpaces + word.length <= l) {
      lineHolder.push(word);
      justWords += word.length;
      lineHolder.push(justWords);
      newLines.push(lineHolder);
      justWords = 0;
      wordsAndSpaces = 0;
      lineHolder = [];
    }
    // if we can't add the word at all this is the end of a line
    else {
      lineHolder.push(justWords);
      newLines.push(lineHolder);
      lineHolder = [];
      justWords = 0;
      lineHolder.push(word);
      wordsAndSpaces = word.length + 1;
      justWords += word.length;
    }
  }
  if (lineHolder.length > 0) {
    lineHolder.push(justWords);
    newLines.push(lineHolder);
  }

  let answer = new Array(newLines.length).fill("");
  for (let i = 0; i < newLines.length; i++) {
    let wordsLength = newLines[i][newLines[i].length - 1];
    newLines[i].pop();
    let numberOfWords = newLines[i].length;
    let numberOfSpaceSlots = numberOfWords - 1;
    let spaces = l - wordsLength;
    if (numberOfWords === 1) {
      let theseSpaces = l - wordsLength;
      answer[i] += newLines[i][0];
      for (let j = 0; j < theseSpaces; j++) {
        answer[i] += " ";
      }
    } else if (i !== newLines.length - 1) {
      // we need to handle cases where there is only one word in a line. and probably clean this up
      for (let word of newLines[i]) {
        let theseSpaces = 0;
        if (spaces > numberOfSpaceSlots) {
          theseSpaces = Math.ceil(spaces / numberOfSpaceSlots);
        } else if (spaces === 0 || numberOfSpaceSlots === 0) {
          theseSpaces = 0;
        } else {
          theseSpaces = Math.floor(spaces / numberOfSpaceSlots);
        }
        spaces -= theseSpaces;
        numberOfSpaceSlots -= 1;
        // console.log({answer, theseSpaces})

        answer[i] += word;
        for (let j = 0; j < theseSpaces; j++) {
          answer[i] += " ";
        }
      }
    } else {
      let theseSpaces = 0;
      for (let j = 0; j < newLines[i].length; j++) {
        if (j === newLines[i].length - 1) {
          answer[i] += `${newLines[i][j]}`;
          theseSpaces += newLines[i][j].length;

          for (let k = 0; k < l - theseSpaces; k++) {
            answer[i] += " ";
          }
        } else {
          answer[i] += `${newLines[i][j]} `;
          theseSpaces += 1 + newLines[i][j].length;
        }
      }
    }
  }
  return answer;
}
