// take in an array of words, and l the proposed length of a line, and form an array of lines which contain l number of chars and spaces, text justified
function textJustification(words, l) {
  // we'll use wordsAndSpaces to keep track of the length of a word and the minimum nmber of spaces for that line. Each word will need at least one space after it, except the last word
  let wordsAndSpaces = 0;
  // justWords will keep track of the total actual chars in the words on a line, so when it comes time to apply the
  let justWords = 0;
  let answer = [];
  //   keep a pointer at the begining of each 'line'
  let beginingOfLine = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    // Each word will have at least one space after it, so we have to check if the addition of that word and a space will go over our line total
    if (wordsAndSpaces + word.length + 1 <= l) {
      wordsAndSpaces += word.length + 1;
      justWords += word.length;
    }
    // however, the last word in a line doesn't need that extra space, so if we can add the word but not a space we have reached the end of a line.
    else if (wordsAndSpaces + word.length <= l) {
      justWords += word.length;
      //   since we have found the end of a line, format that line and add it to our answer
      //   The second argument in slice is noninclusive, so we have to slice to i + 1 to include this word in our slice
      answer.push(
        formJustifiedLine(words.slice(beginingOfLine, i + 1), justWords, l)
      );
      //   our next line will begin at i + 1
      beginingOfLine = i + 1;
      //   reset the words and words and spaces counters
      justWords = 0;
      wordsAndSpaces = 0;
    }
    // if we can't add the word at all this is the end of a line, and the word we are currently on is the first word of the next line
    else {
      // so add the current line to the answer
      answer.push(
        formJustifiedLine(words.slice(beginingOfLine, i), justWords, l)
      );
      // the begining of the next line is i this time, because we want this word to be a part of the next line
      beginingOfLine = i;
      //  we won't set the word counters to 0, they need to include the word we are on that will be a part of the next line
      wordsAndSpaces = word.length + 1;
      justWords = word.length;
    }
  }
  //   if there is anything left in words and spaces, then we reached a string that needed to be a part of the 'next line', but didn't get added because our iteration ended. Process that string now, and we know it is the last line of our answer, so let our format function know that
  if (wordsAndSpaces > 0) {
    answer.push(
      formJustifiedLine(
        words.slice(beginingOfLine, words.length),
        justWords,
        l,
        true
      )
    );
  }

  return answer;
}

function addSpaces(numberOfSpaces) {
  let spaces = "";
  for (let j = 0; j < numberOfSpaces; j++) {
    spaces += " ";
  }
  return spaces;
}

// takes in a line, the length of words in that line, and the number of chars that should be in that line. Also takes in isLastLine, which tells us if this line should be treated as a last line, which is a special case
function formJustifiedLine(arr, lengthOfWords, l, isLastLine = false) {
  // line will hold the return value
  let line = "";
  let numberOfWords = arr.length;
  let numberOfSpaceSlots = numberOfWords - 1;
  let totalSpacesForLine = l - lengthOfWords;
  // if there is only one word, add that word to the line and the remaining spaces
  if (numberOfWords === 1) {
    line += arr[0];
    line += addSpaces(totalSpacesForLine);
  }
  // if this line is not the last line of the phrase we are processing
  else if (!isLastLine) {
    for (let word of arr) {
      // If the total number of space slots is more than the number of spaces, we want the floor of the two divided to find out how many spaces go in a slot. If there are more spaces than slots, we'll take the ceil. If there are no more of either, this is the last word in the line, and does not need anymore spaces
      let theseSpaces = 0;
      if (totalSpacesForLine > numberOfSpaceSlots) {
        theseSpaces = Math.ceil(totalSpacesForLine / numberOfSpaceSlots);
      } else if (totalSpacesForLine === 0 || numberOfSpaceSlots === 0) {
        theseSpaces = 0;
      } else {
        theseSpaces = Math.floor(totalSpacesForLine / numberOfSpaceSlots);
      }
      //   deduct the number of spaces we've used from the total spaces needed for this line
      totalSpacesForLine -= theseSpaces;
      //   we've used one space slot
      numberOfSpaceSlots -= 1;
      //   add the word and spaces to the line
      line += word;
      line += addSpaces(theseSpaces);
    }
  } else if (isLastLine) {
    //   If this is a last line, each word only gets one space after it, except the last, which gets all the remaining spaces after it. These spaces will keep track of the spaces and chars we have added to the line, and once we find the last word in the line, we'll add  l - theseSpaces, which is how many characters we'll need to fill out the line
    let theseSpaces = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j === arr.length - 1) {
        line += `${arr[j]}`;
        theseSpaces += arr[j].length;
        line += addSpaces(l - theseSpaces);
      } else {
        line += `${arr[j]} `;
        theseSpaces += 1 + arr[j].length;
      }
    }
  }
  return line;
}

module.exports = { textJustification };
