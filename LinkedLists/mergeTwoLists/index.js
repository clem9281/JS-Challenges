const { ListNode } = require("../list");

function mergeTwoLinkedLists(l1, l2) {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }
  // establish head of new list with the lowest value
  let newListHead = null;
  let newListPointer = null;
  if (l1.value < l2.value) {
    newListHead = new ListNode(l1.value);
    l1 = l1.next;
  } else {
    newListHead = new ListNode(l2.value);
    l2 = l2.next;
  }
  // newListHead will hold a pointer pointing the head of our new list, but newListPointer will keep moving to the tail of our list to add new elements
  newListPointer = newListHead;
  while (l1 && l2) {
    let newListNode = null;
    if (l1.value < l2.value) {
      newListNode = new ListNode(l1.value);
      l1 = l1.next;
    } else {
      newListNode = new ListNode(l2.value);
      l2 = l2.next;
    }
    newListPointer.next = newListNode;
    newListPointer = newListNode;
  }
  if (l1) {
    newListPointer.next = l1;
  } else if (l2) {
    newListPointer.next = l2;
  }
  return newListHead;
}

module.exports = { mergeTwoLinkedLists };
