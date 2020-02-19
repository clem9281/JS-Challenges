function removeKFromList(l, k) {
  let current = l;
  let prev = null;
  if (!current) {
    return current;
  }
  while (current && current.value === k) {
    l = l.next;
    current = l;
  }
  while (current) {
    if (current.value === k) {
      prev.next = current.next;
    }

    prev = current;

    current = current.next;
  }
  return l;
}
module.exports = { removeKFromList };
