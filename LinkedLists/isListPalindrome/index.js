function isListPalindrome(l) {
  // slow pointers will reverse the linked list in place as we go
  let slowPrev = null;
  let slow = l;
  // if slow was null to begin with the list was empty and is a palindrome
  if (!slow) {
    return true;
  }
  let slowNext = slow.next;
  // when fast.next is null then fast has found the last element of the list, if fast is null then fast has gone past the last element of the list by one
  let fast = l;

  while (fast && fast.next !== null) {
    fast = fast.next.next;

    slow.next = slowPrev;
    slowPrev = slow;
    slow = slowNext;
    slowNext = slow.next;
  }
  let forward = null;
  let back = slowPrev;
  // slowPrev is the head of our new reversed half of the linked list, and will now iterate 'back'. If the list length was odd, we don't care what the center value was, we just need to check that the elements are the same on the right and left. So, the 'forward' pointer will either be the slow pointer if the length was even, or it will be the slowNext pointer if the length was odd. We know the list is even or odd based on where our fast pointer ended up. If we went one past the end of the list our list has an even number of elements (so there is no center to ignore, each half ought to be the same), but if the fast pointer holds a value it found the last element of our linked list, so we know the list is odd and we want to ignore the center, which is where slow is pointing
  if (!fast) {
    forward = slow;
  } else {
    forward = slowNext;
  }
  // now we just follow each half of our list
  while (forward && back) {
    if (forward.value !== back.value) {
      return false;
    }
    forward = forward.next;
    back = back.next;
  }
  // if either has elements left over the lists are not the same size and cannot be a palindrome
  if (forward || back) {
    return false;
  }
  return true;
}
module.exports = {
  isListPalindrome
};
