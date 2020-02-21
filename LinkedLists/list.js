function ListNode(value) {
  this.value = value;
  this.next = null;
}

ListNode.prototype.append = function(value) {
  const newNode = new ListNode(value);
  let current = this;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
};

ListNode.prototype.asArray = function(head) {
  let current = head;
  const arr = [];
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
};

module.exports = { ListNode };
