const { ListNode } = require("../list");
// This function reverses a linked list, returns the head of the reversed linked list as well as the length of the linked list
function reverseLinkedListAndGetLength(list) {
  let current = list;
  let prev = null;
  let next = !!current ? current.next : null;
  let length = 0;
  // if next was assigned to null (meaning there was only one node in this list) this loop never fires, and we return the unmutated list that was passed in
  while (next) {
    current.next = prev;
    prev = current;
    current = next;
    next = current.next;
    length++;
  }
  // since we only looped until next was null, we have the head of the reversed list, but it isn't pointing at any of the other nodes. Prev is holding the rest of the nodes, set current.next to prev. If next was null, this line shouldn't hurt the single node linked list we need to return.
  current.next = prev;
  // since we never counted the last node, add it to the length now
  return [current, length + 1];
}
function addTwoHugeNumbers(a, b) {
  // reverse the lists and get their length O(n + m)
  let [reversedA, lengthA] = reverseLinkedListAndGetLength(a);
  let [reversedB, lengthB] = reverseLinkedListAndGetLength(b);

  // we will walk the longer of the lists, replacing it's values with the the sums we need
  let longerListPointer = null;
  let shorterListPointer = null;
  // since we'll be replacing the values of the nodes in the longer list, we need to save a reference to the head in longerList, while the listPointers will traverse the lists
  let longerList = null;
  if (lengthA >= lengthB) {
    longerList = reversedA;
    shorterListPointer = reversedB;
  } else {
    longerList = reversedB;
    shorterListPointer = reversedA;
  }

  longerListPointer = longerList;
  let remainder = 0;
  while (longerListPointer) {
    // we % the sum against 10000 to keep it within 4 digits. If we have completed traversing the shorter list then don't consider the shorterPointer value
    let total = shorterListPointer
      ? (longerListPointer.value + shorterListPointer.value + remainder) % 10000
      : (longerListPointer.value + remainder) % 10000;
    // our carry number is our sum / 10000
    remainder = shorterListPointer
      ? Math.floor(
          (longerListPointer.value + shorterListPointer.value + remainder) /
            10000
        )
      : Math.floor((longerListPointer.value + remainder) / 10000);
    // overwrite the value of the longerList
    longerListPointer.value = total;
    // continue to traverse the pointers
    longerListPointer = longerListPointer.next;
    if (shorterListPointer) {
      shorterListPointer = shorterListPointer.next;
    }
  }
  // reverse the longerList to it's correct direction
  let answerList = reverseLinkedListAndGetLength(longerList)[0];
  let newListNode = null;
  // if our remainder is greater than 0 then we still have a carry number and need to add a node at the head
  if (remainder > 0) {
    newListNode = new ListNode(remainder);
    newListNode.next = answerList;
  }
  return newListNode || answerList;
}

module.exports = {
  addTwoHugeNumbers
};

// Never used this but it gets the length of a linked list
// function getLengthOfList(list) {
//   let length = 0;
//   let current = list;
//   while (current) {
//     current = current.next;
//     length++;
//   }
//   return length;
// }
